import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import DeleteRecord from "../../../components/UI/Modals/Delete/DeleteRecord";
import SuccessMessage from "../../../components/UI/Modals/Delete/SuccessMessage";

const DeleteFamilyById = () => {
    const router = useRouter();
    const [success, setSuccess] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [data, setData] = useState(null);

    let familyId = router.query.deleteFamilyById;

    useEffect(() => {
        fetchFamilyById();
    }, [familyId]);

    console.log('family id before: ', familyId)
    const fetchFamilyById = () => {
        console.log('family id after: ', familyId)
        if (!familyId) return;

        fetch(`http://localhost:8000/api/v1/families/${familyId}`)
            .then(response => response.json())
            .then(data => {setData(data), setFamilyName(data.name.toUpperCase())});
    }

    const deleteFamilyHandler = () => {
        fetch(`http://localhost:8000/api/v1/families/${familyId}/destroy`, {
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
                title={familyName} 
                    link={'/families'} 
                /> : 
                <DeleteRecord 
                    deleteRecord={deleteFamilyHandler}
                    title={familyName} 
                    link={'/families'} 
                /> 
            }
        </>
    )
}

export default DeleteFamilyById;