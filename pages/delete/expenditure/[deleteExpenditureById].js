import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import DeleteRecord from "../../../components/UI/Modals/Delete/DeleteRecord";
import SuccessMessage from "../../../components/UI/Modals/Delete/SuccessMessage";

const DeleteExpenditureById = () => {
    const router = useRouter();
    const [success, setSuccess] = useState('');
    const [data, setData] = useState(null);

    let expenditureId = router.query.deleteExpenditureById;

    useEffect(() => {
        fetchExpenditureById();
    }, [expenditureId]);

    console.log('expenditure id before: ', expenditureId)
    const fetchExpenditureById = () => {
        console.log('expenditure id after: ', expenditureId)
        if (!expenditureId) return;

        fetch(`http://localhost:8000/api/v1/expenditure/${expenditureId}`)
            .then(response => response.json())
            .then(data => setData(data));
    }

    const deleteExpenditureHandler = () => {
        fetch(`http://localhost:8000/api/v1/expenditure/${expenditureId}/destroy`, {
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
                title={'EXPENDITURE'} 
                    link={'/expenditure'} 
                /> : 
                <DeleteRecord 
                    deleteRecord={deleteExpenditureHandler}
                    title={'EXPENDITURE'} 
                    link={'/expenditure'} 
                /> 
            }
        </>
    )
}

export default DeleteExpenditureById;