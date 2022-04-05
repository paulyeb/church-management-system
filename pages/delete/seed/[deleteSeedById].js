import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import DeleteRecord from "../../../components/UI/Modals/Delete/DeleteRecord";
import SuccessMessage from "../../../components/UI/Modals/Delete/SuccessMessage";

const DeleteMemberById = () => {
    const router = useRouter();
    const [success, setSuccess] = useState('')
    const [data, setData] = useState(null);

    let seedId = router.query.deleteSeedById;

    useEffect(() => {
        fetchSeedById();
    }, [seedId]);

    console.log('seed id before: ', seedId)
    const fetchSeedById = () => {
        console.log('seed id after: ', seedId)
        if (!seedId) return;

        fetch(`http://localhost:8000/api/v1/seeds/${seedId}`)
            .then(response => response.json())
            .then(data => {setData(data)});
    }

    const deleteSeedHandler = () => {
        fetch(`http://localhost:8000/api/v1/seeds/${seedId}/destroy`, {
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
                title={'SEED'} 
                    link={'/seeds'} 
                /> : 
                <DeleteRecord 
                    deleteRecord={deleteSeedHandler}
                    title={'SEED'} 
                    link={'/seeds'} 
                /> 
            }
        </>
    )
}

export default DeleteMemberById;