import { useState, useEffect } from "react";
import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";

import VisitorsTable from "./UI/Tables/VisitorsTable";
import NewVisitorForm from "./UI/Modals/Create/NewVisitorForm";
import AddRecordButton from "./UI/Button/AddRecordButton";
import UpdateVisitor from "./UI/Modals/Update/UpdateVisitor";
import DisplayUpdateSuccessMessage from "./UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";
import DeleteRecord from "./UI/Modals/Delete/DeleteRecord";
import DeleteSuccessMessage from "./UI/Modals/Delete/DeleteSuccessMessage";
import RestoreRecord from "./UI/Modals/Restore/RestoreRecord";
import SuccessfulRestoreMessage from "./UI/Modals/Restore/RestoreSuccessMessage";

const Visitors = () => {
    const [allVisitors, setAllVisitors] = useState([]);
    const [filteredName, setFilteredName] = useState('');
    const [filteredDate, setFilteredDate] = useState('');
    const [newVisitor, setNewVisitor] = useState(false);
    const [showVisitor, setShowVisitor] = useState(false);
    const [editVisitor, setEditVisitor] = useState(false);
    const [deleteVisitor, setDeleteVisitor] = useState(false);
    const [restoreVisitor, setRestoreVisitor] = useState(false);
    const [visitorToReceiveAction, setVisitorToReceiveAction] = useState(null);
    const [successfulDelete, setSuccessfulDelete] = useState(false);
    const [successfulUpdate, setSuccessfulUpdate] = useState(false);
    const [successfulRestore, setSuccessfulRestore] = useState(false);


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
        setFilteredName(e.target.value.toLowerCase());
    }

    const filteredDateHandler = (e) => {
        setFilteredDate(e.target.value);
    }

    const filteredData = filteredName ? 
        allVisitors.filter( visitor => {
            return visitor.name.toLowerCase().includes(filteredName);
            }
        ) : 
        filteredDate ? allVisitors.filter( visitor => {
            return visitor.date.includes(filteredDate);
            }
        ) : 
        allVisitors

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
                                    type="text" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by name" 
                                    onChange={filteredNameHandler}
                                />
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by date" 
                                    onChange={filteredDateHandler}
                                />
                                <AddRecordButton onClick={newVisitorHandler}>
                                    RECORD VISITOR
                                </AddRecordButton>
                            </div>
                        </div>
                        {
                            editVisitor && 
                            <UpdateVisitor 
                                visitor={visitorToReceiveAction}
                                dismissModal={() => setEditVisitor(false)}
                                successMessage={() => setSuccessfulUpdate(true)}   
                                fetchVisitors={() => fetchVisitors()}
                            />
                        }
                        {
                            successfulUpdate && 
                            <DisplayUpdateSuccessMessage
                                title={visitorToReceiveAction.name.toUpperCase()}
                                dismissSuccessMessage={() => setSuccessfulUpdate(false)}
                            />
                        }

                        {
                            deleteVisitor && 
                            <DeleteRecord 
                                modelName={'visitors'}
                                record={visitorToReceiveAction}
                                dismissDeleteModal={() => setDeleteVisitor(false)}
                                fetchModelData={() => fetchVisitors()}
                                setSuccessMessage={() => setSuccessfulDelete(true)} 
                            />
                        }
                        {successfulDelete && <DeleteSuccessMessage title={visitorToReceiveAction.name.toUpperCase()} dismissSuccessMessage={() => setSuccessfulDelete(false)} />}

                        {
                            restoreVisitor && 
                            <RestoreRecord 
                                record={visitorToReceiveAction}
                                modelName={'visitors'}
                                dismissRestoreModal={() => setRestoreVisitor(false)}
                                fetchModelData={() => fetchVisitors()}
                                successMessage={() => setSuccessfulRestore(true)}
                            />
                        }
                        {
                            successfulRestore && 
                            <SuccessfulRestoreMessage 
                                title={visitorToReceiveAction.name.toUpperCase()}
                                dismissSuccessMessage={() => setSuccessfulRestore(false)}
                            />
                        }
                        <div className="container px-4">
                          <VisitorsTable 
                            allVisitors={filteredData} 
                            showVisitor={() => setShowVisitor(true)}
                            editVisitor={() => setEditVisitor(true)}
                            deleteVisitor={() => setDeleteVisitor(true)}
                            restoreVisitor={() => setRestoreVisitor(true)}
                            actionCallback={(visitor) => setVisitorToReceiveAction(visitor)}
                        />  
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Visitors;