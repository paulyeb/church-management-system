import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import SuccessMessage from "../../../components/UI/Modals/Restore/SuccessMessage";
import RestoreRecord from "../../../components/UI/Modals/Restore/RestoreRecord";

const RestoreMemberById = () => {
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState('');
    const [data, setData] = useState(null);
    const router = useRouter();

    let memberId = router.query.restoreMemberById;

    useEffect(() => {
        fetchMemberById();
    }, [memberId, success]);

    console.log('member id before: ', memberId);

    const fetchMemberById = () => {
        console.log('member id after: ', memberId)
        if (!memberId) return;

        fetch(`http://localhost:8000/api/v1/users/${memberId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setData(data), 
                setName(data.name.toUpperCase())
            });
    }

    const restoreMemberHandler = () => {
        fetch(`http://localhost:8000/api/v1/users/${memberId}/restore`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setSuccess(true);
            });

        if (!data) return;

        console.log(success);
    }

    return (
        <>
            {
                !data ? "Loading..." : success ? 
                <SuccessMessage 
                    title={name}
                    link={'/'}
                /> : 
                <RestoreRecord 
                    titile={name}
                    link={'/'}
                    restoreRecord={restoreMemberHandler}
                />
            }
        </>
    )
}

export default RestoreMemberById;