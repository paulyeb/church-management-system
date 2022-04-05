import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import SuccessMessage from "../../../components/UI/Modals/Restore/SuccessMessage";
import RestoreRecord from "../../../components/UI/Modals/Restore/RestoreRecord";

const RestoreMemberById = () => {
    const [success, setSuccess] = useState(false);
    const [visitorName, setVisitorName] = useState('');
    const [data, setData] = useState(null);
    const router = useRouter();

    let visitorId = router.query.restoreVisitorById;

    useEffect(() => {
        fetchMemberById();
    }, [visitorId, success]);

    console.log('member id before: ', visitorId);

    const fetchMemberById = () => {
        console.log('member id after: ', visitorId)
        if (!visitorId) return;

        fetch(`http://localhost:8000/api/v1/visitors/${visitorId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setData(data),
                setVisitorName(data.name.toUpperCase()) 
            });
    }

    const restoreVisitorHandler = () => {
        fetch(`http://localhost:8000/api/v1/visitors/${visitorId}/restore`)
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
                    title={visitorName}
                    link={'/visitors'}
                /> : 
                <RestoreRecord 
                    titile={visitorName}
                    link={'/visitors'}
                    restoreRecord={restoreVisitorHandler}
                />
            }
        </>
    )
}

export default RestoreMemberById;