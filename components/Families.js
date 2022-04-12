import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import FamiliesTable from "./UI/Tables/FamiliesTable";
import { useState, useEffect } from "react";
import NewFamilyForm from "./UI/Modals/Create/NewFamilyForm";
import AddRecordButton from "./UI/Button/AddRecordButton";
import DeleteRecord from "./UI/Modals/Delete/DeleteRecord";
import UpdateFamilyModal from "./UI/Modals/Update/UpdateFamily";
import DisplayUpdateSuccessMessage from "./UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";
import DeleteSuccessMessage from "./UI/Modals/Delete/DeleteSuccessMessage";
import RestoreRecord from "./UI/Modals/Restore/RestoreRecord";
import SuccessfulRestoreMessage from "./UI/Modals/Restore/RestoreSuccessMessage";
import ShowFamilyModal from "./UI/Modals/Read/ShowFamilyModal";

const Families = () => {
    const [allFamilies, setAllFamilies] = useState([]);
    const [filteredFamily, setFilteredFamily] = useState('');
    const [newFamily, setNewFamily] = useState(false);
    const [familyToReceiveAction, setFamilyToReceiveAction] = useState(null);
    const [showFamily, setShowFamily] = useState(false);
    const [editFamily, setEditFamily] = useState(false);
    const [successfulUpdate, setSuccessfulUpdate] = useState(false)
    const [deleteFamily, setDeleteFamily] = useState(false);
    const [successfulDelete, setSuccessfulDelete] = useState(false)
    const [restoreFamily, setRestoreFamily] = useState(false);
    const [successfulRestore, setSuccessfulRestore] = useState(false)

    const newFamilyHandler = () => {
        setNewFamily(true);
    }

    useEffect(() => {
        fetchFamiliesData();
    }, []);

    const saveNewMemberHandler = (family) => {
        console.log(family);
        fetch("http://localhost:8000/api/v1/families/", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(family),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fetchFamiliesData();
        });    
    }
    
    const fetchFamiliesData = () => {
        fetch('http://localhost:8000/api/v1/families')
        .then(res => res.json())
        .then(data => setAllFamilies(data));
    };

    const filteredFamilyHandler = (e) => {
        setFilteredFamily(e.target.value.toLowerCase());
    }

    const filteredData = allFamilies.filter( family => {
        return family.name.toLowerCase().includes(filteredFamily);
    })

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        { newFamily && <NewFamilyForm onSaveNewFamily={saveNewMemberHandler} close = {() => setNewFamily(false)} /> }
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Families
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="search" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by name"
                                    onChange={filteredFamilyHandler} 
                                />
                                <AddRecordButton onClick={newFamilyHandler}>
                                    NEW FAMILY
                                </AddRecordButton>
                            </div>
                        </div>
                        {
                            showFamily && 
                            <ShowFamilyModal 
                                family={familyToReceiveAction}
                                dismissModal={() => setShowFamily(false)}
                            />
                        }
                        {
                            editFamily && 
                            <UpdateFamilyModal 
                                family={familyToReceiveAction}
                                dismissModal={() => setEditFamily(false)}
                                successMessage={() => setSuccessfulUpdate(true)}
                                fetchFamilies={() => fetchFamiliesData()}
                            />
                        }
                        {
                            successfulUpdate && 
                            <DisplayUpdateSuccessMessage 
                                title={`FAMILY NAME`}
                                dismissSuccessMessage={() => setSuccessfulUpdate(false)}
                            />
                        }
                        {
                            deleteFamily &&
                            <DeleteRecord 
                                modelName={'families'}
                                record={familyToReceiveAction} 
                                dismissDeleteModal={() => setDeleteFamily(false)} 
                                setSuccessMessage={() => setSuccessfulDelete(true)}
                                fetchModelData={() => fetchFamiliesData()} 
                            /> 
                        
                        }
                        { successfulDelete && <DeleteSuccessMessage 
                            title={`${familyToReceiveAction.name.toUpperCase()} FAMILY`}
                            dismissSuccessMessage={() => setSuccessfulDelete(false)} /> 
                        }
                        
                        {
                            restoreFamily &&
                            <RestoreRecord 
                                record={familyToReceiveAction} 
                                modelName={'families'}
                                dismissRestoreModal={() => setRestoreFamily(false)} 
                                successMessage={() => setSuccessfulRestore(true)}
                                fetchModelData={() => fetchFamiliesData()} 
                            /> 
                        
                        }
                        { successfulRestore && 
                            <SuccessfulRestoreMessage 
                                title={`${familyToReceiveAction.name.toUpperCase()} FAMILY `} 
                                dismissSuccessMessage={() => setSuccessfulRestore(false)} 
                            /> 
                        }

                        <div className="container px-4">
                            <FamiliesTable families={filteredData} 
                                actionCallback={(member) => setFamilyToReceiveAction(member)} 
                                showFamily={() => setShowFamily(true)}
                                editFamily={() => setEditFamily(true)} 
                                deleteFamily={() => setDeleteFamily(true)} 
                                restoreFamily={() => setRestoreFamily(true)} 
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Families;