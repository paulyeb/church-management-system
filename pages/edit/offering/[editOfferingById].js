import MetaData from "../../../components/MetaData"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditOffering from "../../../components/UI/Modals/Update/EditOffering";
import EditSuccessMessage from "../../../components/UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";

const EditMemberPage = () => {
    const [offering, setOffering] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    
    let offeringId = router.query.editOfferingById;

    useEffect(() => {
        fetchdata();
    }, [offeringId])
    
    console.log('offering id before: ', offeringId)
    const fetchdata = () => {
        if (!offeringId) return;
        console.log('offering id after: ', offeringId)

        fetch(`http://localhost:8000/api/v1/offerings/${offeringId}`)
            .then(res => res.json())
            .then(data => setOffering(data));
    }

    const updateOfferingHandler = async (updatedOfferingRecord) => {
        await fetch(`http://localhost:8000/api/v1/offerings/${offeringId}`, {
            method: "PUT",
            body: JSON.stringify(updatedOfferingRecord),
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
        <EditOffering onUpdateOffering={updateOfferingHandler} data={offering} />
        {success && <EditSuccessMessage title={'OFFERING'} link={'/offerings'} />}
    </>
  );
}

export default EditMemberPage;

