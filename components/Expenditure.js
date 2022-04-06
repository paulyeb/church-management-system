import { useState, useEffect } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import ExpenditureTable from "./UI/Tables/ExpenditureTable";
import RecordExpense from "./UI/Modals/Create/RecordExpenditure";
import AddRecordButton from "./UI/Button/AddRecordButton";


const Expenditure = () => {
    const [expenditure, setExpenditure] = useState([]);
    const [newExpense, setNewExpense] = useState(false);
    const [filteredYear, setFilteredYear] = useState('');

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
            });
    }
    
    const fetchExpenditureList = () => {
        fetch("http://localhost:8000/api/v1/expenditure")
            .then(res => res.json())
            .then(data => setExpenditure(data));
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
                        <div className="container px-4">
                            <ExpenditureTable allExpenditure = {filteredData} />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Expenditure;