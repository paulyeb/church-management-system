import MetaData from "../../../components/MetaData"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditMember from "../../../components/UI/Modals/Update/EditMember";
import EditSuccessMessage from "../../../components/UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";

const EditMemberPage = () => {
    const [member, setMember] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    
    let memberId = router.query.editMemberById;

    useEffect(() => {
        fetchdata();
    }, [memberId])
    
    console.log('member id before: ', memberId)
    const fetchdata = () => {
        if (!memberId) return;
        console.log('member id after: ', memberId)

        fetch(`http://localhost:8000/api/v1/users/${memberId}`)
            .then(res => res.json())
            .then(data => setMember(data));
    }

    const updateMemberHandler = async (updatedMemberDetails) => {
        await fetch(`http://localhost:8000/api/v1/users/${memberId}`, {
            method: "PUT",
            body: JSON.stringify(updatedMemberDetails),
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
        <EditMember onUpdateMember={updateMemberHandler} data={member} />
        {success && <EditSuccessMessage title={'MEMBER'} link={'/'} />}
    </>
  );
}

export default EditMemberPage;

