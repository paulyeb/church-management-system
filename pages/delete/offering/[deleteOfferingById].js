import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import DeleteRecord from "../../../components/UI/Modals/Delete/DeleteRecord";
import SuccessMessage from "../../../components/UI/Modals/Delete/SuccessMessage";

const DeleteOfferingById = () => {
    const router = useRouter();
    const [success, setSuccess] = useState('');
    const [data, setData] = useState(null);

    let offeringId = router.query.deleteOfferingById;

    useEffect(() => {
        fetchMemberById();
    }, [offeringId]);

    console.log('offering id before: ', offeringId)
    const fetchMemberById = () => {
        console.log('offering id after: ', offeringId)
        if (!offeringId) return;

        fetch(`http://localhost:8000/api/v1/offerings/${offeringId}`)
            .then(response => response.json())
            .then(data => {setData(data)});
    }

    const deleteOfferingHandler = () => {
        fetch(`http://localhost:8000/api/v1/offerings/${offeringId}/destroy`, {
            method: "DELETE",
            body: JSON.stringify(),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data), 
                setSuccess('Loading'), 
                console.log(success)});
    }
    return (
        <>
            {
                !data ? "Loading..." : success ? 
                <SuccessMessage 
                title={'OFFERING'} 
                    link={'/offerings'} 
                /> : 
                <DeleteRecord 
                    deleteRecord={deleteOfferingHandler}
                    title={'OFFERING'} 
                    link={'/offerings'} 
                /> 
            }
        </>
    )
}

export default DeleteOfferingById;