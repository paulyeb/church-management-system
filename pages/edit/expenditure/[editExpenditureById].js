import MetaData from "../../../components/MetaData"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditExpenditure from "../../../components/UI/Modals/Update/EditExpenditure";
import EditSuccessMessage from "../../../components/UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";

const EditExpensesPage = () => {
    const [expenditure, setExpenditure] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    
    let expenseId = router.query.editExpenditureById;

    useEffect(() => {
        fetchdata();
    }, [expenseId])
    
    console.log('expenditure id before: ', expenseId)
    const fetchdata = () => {
        if (!expenseId) return;
        console.log('expenditure id after: ', expenseId)

        fetch(`http://localhost:8000/api/v1/expenditure/${expenseId}`)
            .then(res => res.json())
            .then(data => setExpenditure(data));
    }

    const updateExpenseHandler = async (updatedExpenseRecord) => {
        await fetch(`http://localhost:8000/api/v1/expenditure/${expenseId}`, {
            method: "PUT",
            body: JSON.stringify(updatedExpenseRecord),
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setSuccess(true);
            console.log(data); 
            fetchdata();
        })
        .catch(error => console.log('error: ', error))
    }

    return (
      <>
        <MetaData />
        <EditExpenditure onUpdateExpense={updateExpenseHandler} data={expenditure} />
        {success && <EditSuccessMessage title={'EXPENDITURE'} link={'/expenditure'} />}
    </>
  );
}

export default EditExpensesPage;

