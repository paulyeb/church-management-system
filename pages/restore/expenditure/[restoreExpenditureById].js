import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import SuccessMessage from "../../../components/UI/Modals/Restore/SuccessMessage";
import RestoreRecord from "../../../components/UI/Modals/Restore/RestoreRecord";

const RestoreExpenditureById = () => {
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState(null);
    const router = useRouter();

    let expenditureId = router.query.restoreExpenditureById;

    useEffect(() => {
        fetchExpenditureById();
    }, [expenditureId, success]);

    console.log('expenditure id before: ', expenditureId);

    const fetchExpenditureById = () => {
        console.log('expenditure id after: ', expenditureId)
        if (!expenditureId) return;

        fetch(`http://localhost:8000/api/v1/expenditure/${expenditureId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setData(data)
            });
    }

    const restoreMemberHandler = () => {
        fetch(`http://localhost:8000/api/v1/expenditure/${expenditureId}/restore`)
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
                    title={'EXPENDITURE'}
                    link={'/expenditure'}
                /> : 
                    <RestoreRecord 
                    titile={'EXPENDITURE'}
                    link={'/expenditure'}
                    restoreRecord={restoreMemberHandler}
                />
            }
        </>
    )
}

export default RestoreExpenditureById;