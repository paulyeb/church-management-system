import { useState, useEffect } from "react";
import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";

import VisitorsTable from "./UI/Tables/VisitorsTable";
import NewVisitorForm from "./UI/Modals/Create/NewVisitorForm";
import AddRecordButton from "./UI/Button/AddRecordButton";

const Visitors = () => {
    const [allVisitors, setAllVisitors] = useState([]);
    const [filteredName, setFilteredName] = useState('');
    const [newVisitor, setNewVisitor] = useState(false);


    const newVisitorHandler = () => {
        setNewVisitor(true);
    }

    useEffect(() => {
        fetchVisitors();
    }, [])

    const saveVisitorHandler = (visitor) => {
        console.log(visitor);
        fetch("http://localhost:8000/api/v1/visitors/", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(visitor),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data),
                fetchVisitors();
            })
    }

    const fetchVisitors = () => {
        fetch("http://localhost:8000/api/v1/visitors")
            .then(res => res.json())
            .then(data => setAllVisitors(data))
    }

    const filteredNameHandler = (e) => {
        setFilteredName(e.target.value);
    }

    const filteredData = allVisitors.filter( visitor => {
        return visitor.name.includes(filteredName);
    })

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                    {newVisitor && <NewVisitorForm onAddVisitor={saveVisitorHandler} close = {() => setNewVisitor(false)} />}
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Visitors
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by name" 
                                    onChange={filteredNameHandler}
                                />
                                <AddRecordButton onClick={newVisitorHandler}>
                                    RECORD VISITOR
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                          <VisitorsTable allVisitors={filteredData} />  
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Visitors;