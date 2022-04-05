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

    let memberId = router.query.deleteMemberById;

    useEffect(() => {
        fetchMemberById();
    }, [memberId]);

    console.log('member id before: ', memberId)
    const fetchMemberById = () => {
        console.log('member id after: ', memberId)
        if (!memberId) return;

        fetch(`http://localhost:8000/api/v1/users/${memberId}`)
            .then(response => response.json())
            .then(data => {
                setData(data), 
                setMemberName(data.name.toUpperCase())
            }
        );
    }

    const deleteMemberHandler = () => {
        fetch(`http://localhost:8000/api/v1/users/${memberId}/destroy`, {
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
                    title={'MEMBER'} 
                    link={'/'} 
                /> : 
                <DeleteRecord 
                    deleteRecord={deleteMemberHandler}
                    title={memberName}
                    link={'/'} 
                /> 
            }
        </>
    )
}

export default DeleteMemberById;