import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import DeleteRecord from "../../../components/UI/Modals/Delete/DeleteRecord";
import SuccessMessage from "../../../components/UI/Modals/Delete/SuccessMessage";

const DeleteMemberById = () => {
    const router = useRouter();
    const [success, setSuccess] = useState('');
    const [memberName, setMemberName] = useState('');
    const [data, setData] = useState(null);

    let titheId = router.query.deleteTitheById;

    useEffect(() => {
        fetchTitheById();
    }, [titheId]);

    console.log('tithe id before: ', titheId)
    const fetchTitheById = () => {
        console.log('tithe id after: ', titheId)
        if (!titheId) return;

        fetch(`http://localhost:8000/api/v1/tithes/${titheId}`)
            .then(response => response.json())
            .then(data => {setData(data), console.log(data), setMemberName(data.user.name.toUpperCase())});
    }

    const deleteTitheHandler = () => {
        fetch(`http://localhost:8000/api/v1/tithes/${titheId}/destroy`, {
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
                title={'TITHE'} 
                    link={'/tithes'} 
                /> : 
                <DeleteRecord 
                    deleteRecord={deleteTitheHandler}
                    title={'TITHE'} 
                    link={'/attendances'} 
                /> 
            }
        </>
    )
}

export default DeleteMemberById;