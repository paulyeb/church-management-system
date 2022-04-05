import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import SuccessMessage from "../../../components/UI/Modals/Restore/SuccessMessage";
import RestoreRecord from "../../../components/UI/Modals/Restore/RestoreRecord";

const RestoreMemberById = () => {
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState(null);
    const router = useRouter();

    let seedId = router.query.restoreSeedById;

    useEffect(() => {
        fetchSeedById();
    }, [seedId, success]);

    console.log('seed id before: ', seedId);

    const fetchSeedById = () => {
        console.log('seed id after: ', seedId)
        if (!seedId) return;

        fetch(`http://localhost:8000/api/v1/seeds/${seedId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setData(data)
            });
    }

    const restoreSeedHandler = () => {
        fetch(`http://localhost:8000/api/v1/seeds/${seedId}/restore`)
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
                    title={'SEED'}
                    link={'/seeds'}
                /> : 
                <RestoreRecord 
                    titile={'SEED'}
                    link={'/seeds'}
                    restoreRecord={restoreSeedHandler}
                />
            }
        </>
    )
}

export default RestoreMemberById;