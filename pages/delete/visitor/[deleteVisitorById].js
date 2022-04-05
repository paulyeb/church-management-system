import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import DeleteRecord from "../../../components/UI/Modals/Delete/DeleteRecord";
import SuccessMessage from "../../../components/UI/Modals/Delete/SuccessMessage";

const DeleteVisitorById = () => {
    const router = useRouter();
    const [success, setSuccess] = useState('');
    const [visitorName, setVisitorName] = useState('');
    const [data, setData] = useState(null);

    let visitorId = router.query.deleteVisitorById;

    useEffect(() => {
        fetchVisitorById();
    }, [visitorId]);

    console.log('visitor id before: ', visitorId)
    const fetchVisitorById = () => {
        console.log('visitor id after: ', visitorId)
        if (!visitorId) return;

        fetch(`http://localhost:8000/api/v1/visitors/${visitorId}`)
            .then(response => response.json())
            .then(data => {setData(data), setVisitorName(data.name.toUpperCase())});
    }

    const deleteVisitorHandler = () => {
        fetch(`http://localhost:8000/api/v1/visitors/${visitorId}/destroy`, {
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
                title={visitorName} 
                    link={'/visitors'} 
                /> : 
                <DeleteRecord 
                    deleteRecord={deleteVisitorHandler}
                    title={visitorName} 
                    link={'/visitors'} 
                /> 
            }
        </>
    )
}

export default DeleteVisitorById;