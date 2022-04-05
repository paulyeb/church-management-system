import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import SuccessMessage from "../../../components/UI/Modals/Restore/SuccessMessage";
import RestoreRecord from "../../../components/UI/Modals/Restore/RestoreRecord";

const RestoreOfferingById = () => {
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState(null);
    const router = useRouter();

    let offeringId = router.query.restoreOfferingById;

    useEffect(() => {
        fetchOfferingById();
    }, [offeringId, success]);

    console.log('offering id before: ', offeringId);

    const fetchOfferingById = () => {
        console.log('offering id after: ', offeringId)
        if (!offeringId) return;

        fetch(`http://localhost:8000/api/v1/offerings/${offeringId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setData(data)
            });
    }

    const restoreOfferingHandler = () => {
        fetch(`http://localhost:8000/api/v1/offerings/${offeringId}/restore`)
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
                    title={'OFFERING'}
                    link={'/offerings'}
                /> : 
                <RestoreRecord 
                    titile={'OFFERING'}
                    link={'/offerings'}
                    restoreRecord={restoreOfferingHandler}
                />
            }
        </>
    )
}

export default RestoreOfferingById;