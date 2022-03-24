import { useState } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import ExpenditureTable from "./UI/Tables/ExpenditureTable";
import RecordExpense from "./UI/Modals/ModalForms.js/RecordExpenditure";
import AddRecordButton from "./UI/Button.js/AddRecordButton";

const Expenditure = () => {
    const [newExpense, setNewExpense] = useState(false);

    const recordExpenseHandler = () => {
        setNewExpense(true);
    }
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start fixed w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newExpense && <RecordExpense close = {() => setNewExpense(false)} />}   
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Expenditure
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by date" 
                                />
                                <AddRecordButton onClick={recordExpenseHandler}>
                                    RECORD EXPENDITURE
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                            <ExpenditureTable />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Expenditure;