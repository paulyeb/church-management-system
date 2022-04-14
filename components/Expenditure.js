import { useState, useEffect } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import ExpenditureTable from "./UI/Tables/ExpenditureTable";
import RecordExpense from "./UI/Modals/Create/RecordExpenditure";
import AddRecordButton from "./UI/Button/AddRecordButton";
import UpdateExpenditure from "./UI/Modals/Update/UpdateExpenditure";
import DeleteRecord from "./UI/Modals/Delete/DeleteRecord";
import DeleteSuccessMessage from "./UI/Modals/Delete/DeleteSuccessMessage";
import RestoreRecord from "./UI/Modals/Restore/RestoreRecord";
import SuccessfulRestoreMessage from "./UI/Modals/Restore/RestoreSuccessMessage";
import DisplayUpdateSuccessMessage from "./UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";

const Expenditure = () => {
    const [expenditure, setExpenditure] = useState([]);
    const [newExpense, setNewExpense] = useState(false);
    const [filteredYear, setFilteredYear] = useState('');
    const [expenditureToReceiveAction, setExpenditureToReceiveAction] = useState(null);
    const [showAExpenditure, setShowExpenditure] = useState(false);
    const [editExpenditure, setEditExpenditure] = useState(false);
    const [successfulUpdate, setSuccessfulUpdate] = useState(false)
    const [deleteExpenditure, setDeleteExpenditure] = useState(false);
    const [restoreExpenditure, setRestoreExpenditure] = useState(false);
    const [successfulDelete, setSuccessfulDelete] = useState(false);
    const [successfulRestore, setSuccessfulRestore] = useState(false);

    const recordExpenseHandler = () => {
        setNewExpense(true);
    }    
    
    useEffect(() => {
        fetchExpenditureList();
    }, []);

    const addExpenditurehandler = (expenditureData) => {
        fetch("http://localhost:8000/api/v1/expenditure/", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(expenditureData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data),
                fetchExpenditureList();
            })
            .catch((err) => console.log(err));
    }
    
    const fetchExpenditureList = () => {
        fetch("http://localhost:8000/api/v1/expenditure")
            .then(res => res.json())
            .then(data => setExpenditure(data))
            .catch((err) => console.log(err));
    }
    
    const filterYearHandler = (e) => {
        setFilteredYear(e.target.value)
        console.log(e.target.value)
    }

    const filteredData = expenditure.filter( expense => {
        return expense.date.includes(filteredYear);
    })

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newExpense && <RecordExpense onAddExpenditure={addExpenditurehandler} close = {() => setNewExpense(false)} />}   
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Expenditure
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by date" 
                                    onChange={filterYearHandler}
                                />
                                <AddRecordButton onClick={recordExpenseHandler}>
                                    RECORD EXPENDITURE
                                </AddRecordButton>
                            </div>
                        </div>
                        {
                            editExpenditure && 
                            <UpdateExpenditure
                                expenditure={expenditureToReceiveAction}
                                dismissModal={() => setEditExpenditure(false)}
                                successMessage={() => setSuccessfulUpdate(true)}   
                                fetchExpenditure={() => fetchExpenditureList()}
                            />
                        }
                        {
                            successfulUpdate && 
                            <DisplayUpdateSuccessMessage
                                title={'EXPENDITURE'}
                                dismissSuccessMessage={() => setSuccessfulUpdate(false)}
                            />
                        }

                        {
                            deleteExpenditure && 
                            <DeleteRecord 
                                modelName={'expenditure'}
                                record={expenditureToReceiveAction}
                                dismissDeleteModal={() => setDeleteExpenditure(false)}
                                fetchModelData={() => fetchExpenditureList()}
                                setSuccessMessage={() => setSuccessfulDelete(true)} 
                            />
                        }
                        {successfulDelete && <DeleteSuccessMessage title={'EXPENDITURE'} dismissSuccessMessage={() => setSuccessfulDelete(false)} />}

                        {
                            restoreExpenditure && 
                            <RestoreRecord 
                                record={expenditureToReceiveAction}
                                modelName={'expenditure'}
                                dismissRestoreModal={() => setRestoreExpenditure(false)}
                                fetchModelData={() => fetchExpenditureList()}
                                successMessage={() => setSuccessfulRestore(true)}
                            />
                        }
                        {
                            successfulRestore && 
                            <SuccessfulRestoreMessage 
                                title={'EXPENDITURE'}
                                dismissSuccessMessage={() => setSuccessfulRestore(false)}
                            />
                        }
                        <div className="container px-4">
                            <ExpenditureTable 
                                allExpenditure = {filteredData} 
                                actionCallback={(expenditure) => setExpenditureToReceiveAction(expenditure)} 
                                showAExpenditure = {(() => setShowExpenditure(true))} 
                                editExpenditure = {(() => setEditExpenditure(true))} 
                                deleteExpenditure = {(() => setDeleteExpenditure(true))} 
                                restoreExpenditure = {(() => setRestoreExpenditure(true))} 
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Expenditure;