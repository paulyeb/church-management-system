import { useState, useEffect } from "react";
import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import TitheTable from "./UI/Tables/TitheTable";
import RecordTithe from "./UI/Modals/Create/RecordTithe";
import AddRecordButton from "./UI/Button/AddRecordButton";
import UpdateTithe from "./UI/Modals/Update/UpdateTithe";
import DisplayUpdateSuccessMessage from "./UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";
import DeleteRecord from "./UI/Modals/Delete/DeleteRecord";
import DeleteSuccessMessage from "./UI/Modals/Delete/DeleteSuccessMessage";
import RestoreRecord from "./UI/Modals/Restore/RestoreRecord";
import SuccessfulRestoreMessage from "./UI/Modals/Restore/RestoreSuccessMessage";


const Tithe = () => {
    const [allTithe, setAllTithe] = useState([]);
    const [newTithe, setNewTithe] = useState(false);
    const [filteredYear, setFilteredYear] = useState('');
    const [filteredMember, setFilteredMember] = useState('');
    const [titheToReceiveAction, setTitheToReceiveAction] = useState(null);
    const [showTithe, setShowTithe] = useState(false);
    const [editTithe, setEditTithe] = useState(false);
    const [successfulUpdate, setSuccessfulUpdate] = useState(false)
    const [deleteTithe, setDeleteTithe] = useState(false);
    const [restoreTithe, setRestoreTithe] = useState(false);
    const [successfulDelete, setSuccessfulDelete] = useState(false)
    const [successfulRestore, setSuccessfulRestore] = useState(false)

    const recordTitheHandler = () => {
        setNewTithe(true);
    }    
    
    useEffect(() => {
        fetchTithes();
    }, []);

    const saveTitheHandler = (titheData) => {
        fetch("http://localhost:8000/api/v1/tithes/", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(titheData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data), 
                fetchTithes();
            })
    }

    const fetchTithes = () => {
        fetch("http://localhost:8000/api/v1/tithes")
            .then(res => res.json())
            .then(data => setAllTithe(data));
    }
    
    const filterMemberHandler = (e) => {
        setFilteredMember(e.target.value);
    }

    const filterYearHandler = (e) => {
        setFilteredYear(e.target.value)
        console.log(e.target.value)
    }
    
    const filteredData = filteredYear ? 
            allTithe.filter( tithe => {
                return tithe.date.includes(filteredYear);
                }
            ) : 
        filteredMember ? allTithe.filter( tithe => {
            return tithe.user.name.includes(filteredMember)
            }
        ) : allTithe
    
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                    {newTithe && <RecordTithe onAddTithe={saveTitheHandler} close = {() => setNewTithe(false)} />}
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Tithes
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="text" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by member" 
                                    onChange={filterMemberHandler}
                                />
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by date" 
                                    onChange={filterYearHandler}
                                />
                                <AddRecordButton onClick={recordTitheHandler}>
                                    RECORD TITHE
                                </AddRecordButton>
                            </div>
                        </div>
                        {
                            editTithe && 
                            <UpdateTithe 
                                tithe={titheToReceiveAction}
                                dismissModal={() => setEditTithe(false)}
                                successMessage={() => setSuccessfulUpdate(true)}   
                                fetchTithes={() => fetchTithes()}
                            />
                        }
                        {
                            successfulUpdate && 
                            <DisplayUpdateSuccessMessage
                                title={'TITHE'}
                                dismissSuccessMessage={() => setSuccessfulUpdate(false)}
                            />
                        }

                        {
                            deleteTithe && 
                            <DeleteRecord 
                                modelName={'tithes'}
                                record={titheToReceiveAction}
                                dismissDeleteModal={() => setDeleteTithe(false)}
                                fetchModelData={() => fetchTithes()}
                                setSuccessMessage={() => setSuccessfulDelete(true)} 
                            />
                        }
                        {successfulDelete && <DeleteSuccessMessage title={'TITHE'} dismissSuccessMessage={() => setSuccessfulDelete(false)} />}

                        {
                            restoreTithe && 
                            <RestoreRecord 
                                record={titheToReceiveAction}
                                modelName={'tithes'}
                                dismissRestoreModal={() => setRestoreTithe(false)}
                                fetchModelData={() => fetchTithes()}
                                successMessage={() => setSuccessfulRestore(true)}
                            />
                        }
                        {
                            successfulRestore && 
                            <SuccessfulRestoreMessage 
                                title={'TITHE'}
                                dismissSuccessMessage={() => setSuccessfulRestore(false)}
                            />
                        }

                        <div className="container px-4">
                            <TitheTable 
                                allTithe = { filteredData } 
                                actionCallback={(offering) => setTitheToReceiveAction(offering)} 
                                showTithe = {(() => setShowTithe(true))} 
                                editTithe= {(() => setEditTithe(true))} 
                                deleteTithe = {(() => setDeleteTithe(true))} 
                                restoreTithe = {(() => setRestoreTithe(true))} 
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Tithe;