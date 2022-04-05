import MetaData from "../../../components/MetaData"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditFamily from "../../../components/UI/Modals/Update/EditFamily";
import EditSuccessMessage from "../../../components/UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";

const EditFamilyName = () => {
    const [family, setFamily] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    
    let familyId = router.query.editFamilyById;

    useEffect(() => {
        fetchdata();
    }, [familyId])
    
    console.log('family id before: ', familyId)
    const fetchdata = () => {
        if (!familyId) return;
        console.log('family id after: ', familyId)

        fetch(`http://localhost:8000/api/v1/families/${familyId}`)
            .then(res => res.json())
            .then(data => setFamily(data));
    }

    const updateMemberHandler = async (updatedFamilyName) => {
        await fetch(`http://localhost:8000/api/v1/families/${familyId}`, {
            method: "PUT",
            body: JSON.stringify(updatedFamilyName),
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setSuccess(true);
            console.log(data); 
            fetchdata();
        })
        .catch(error => console.log('error: ', error))

    }

    return (
      <>
        <MetaData />
        <EditFamily onUpdateFamilyName={updateMemberHandler} data={family}  />
        {success && <EditSuccessMessage title={'FAMILY'} link={'/families'} />}
    </>
  );
}

export default EditFamilyName;

