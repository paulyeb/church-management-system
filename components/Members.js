import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Header from "./UI/Header";
import Card from "./UI/Card";
import Sidebar from "./UI/Sidebar";

import MembersTable from "./UI/Tables/MembersTable";
import NewMemberForm from "./UI/Modals/Create/NewMemberForm";
import AddRecordButton from "./UI/Button/AddRecordButton";
import DeleteRecord from "./UI/Modals/Delete/DeleteRecord";
import DeleteSuccessMessage from "./UI/Modals/Delete/DeleteSuccessMessage";
import UpdateMemberModal from "./UI/Modals/Update/UpdateMemberModal";
import DisplayUpdateSuccessMessage from "./UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";
import ShowMemberModal from "./UI/Modals/Read/ShowMemberModal";
import RestoreRecord from "./UI/Modals/Restore/RestoreRecord";
import SuccessfulRestoreMessage from "./UI/Modals/Restore/RestoreSuccessMessage";

const HomePage = () => {
    const [allMembers, setAllMembers] = useState([]);
    const [filteredMembers, setFilteredMembers] = useState([]);
    const [filteredName, setFilteredName] = useState('');
    const [newMemberForm, setNewMemberForm] = useState(false);
    const [showMember, setShowMember] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [restoreModal, setRestoreModal] = useState(false);
    const [successfulUpdate, setSuccessfulUpdate] = useState(false);
    const [successfulDelete, setSuccessfulDelete] = useState(false);
    const [successfulRestore, setSuccessfulRestore] = useState(false);
    const [ascendButton, setAscendButton] = useState(true);
    const [descendButton, setDescendButton] = useState(false);
    const [memberToReceiveAction, setMemberToReceiveAction] = useState(null);

    useEffect(() => {
        fetchMembersData();
    }, []);

    const newMemberHandler = (members) => {
        // console.log(members);
        fetch("https://faithhouse-backend.herokuapp.com/api/v1/users/", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(members),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fetchMembersData();
        })
        .catch((err) => console.log(err));    
    }
    
    const fetchMembersData = () => {
        fetch('http://localhost:8000/api/v1/users')
            .then(res => res.json())
            .then(data => {
                setAllMembers(data);
                setFilteredMembers(data);
                console.log(data);
            })
            .catch((err) => console.log(err));
        
        // console.log(allMembers);
    };
    
    const newMemberFormHandler = (event) => {
        event.preventDefault();
        
        setNewMemberForm(true);
    }

    const filterByNameHandler = (e) => {
        setFilteredName(e.target.value.toLowerCase());
        setFilteredMembers(allMembers.filter(member => member.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    // console.log(filteredAndSortedData);

    const ascendHandler = () => {
        setFilteredMembers(allMembers.filter(member => member.name.toLowerCase().includes(filteredName)).sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        }));
        console.log('ascending', allMembers)
        setDescendButton(true);
        setAscendButton(false);
    }

    const descendHandler = () => {
        setFilteredMembers(allMembers.filter(member => member.name.toLowerCase().includes(filteredName)).sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
            } else if (b.name.toLowerCase() < a.name.toLowerCase()) {
                return -1;
            } else {
                return 0;
            }
        }));
        console.log('descending: ', allMembers)
        setAscendButton(true);
        setDescendButton(false);
    }

    return (
        <div className="container">
            <Header />
            <div className="flex flex-row items-centre justify-start overflow-x-scroll w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {
                            newMemberForm && 
                            <NewMemberForm 
                                onAddNewMember={newMemberHandler} 
                                onClose={() => setNewMemberForm(false)} 
                            /> 
                        }
                        {
                            showMember &&
                            <ShowMemberModal 
                                member={memberToReceiveAction}
                                dismissModal={() => setShowMember(false)}
                            />
                        }
                        {
                            updateModal && 
                            <UpdateMemberModal 
                                member={memberToReceiveAction}
                                dismissModal={() => setUpdateModal(false)}
                                setSuccess={() => setSuccessfulUpdate(true)}
                                fetchMembersData={fetchMembersData} 
                             />
                        }
                        { successfulUpdate && 
                            <DisplayUpdateSuccessMessage
                                title={`${memberToReceiveAction.name.toUpperCase()}'S`}
                                dismissSuccessMessage={() => setSuccessfulUpdate(false)} 
                            />
                        }

                        {
                            deleteModal &&
                            <DeleteRecord 
                                modelName={'users'}
                                record={memberToReceiveAction} 
                                dismissDeleteModal={() => setDeleteModal(false)} 
                                setSuccessMessage={() => setSuccessfulDelete(true)}
                                fetchModelData={() => fetchMembersData()} 
                            /> 
                        
                        }
                        { successfulDelete && <DeleteSuccessMessage 
                            title={`${memberToReceiveAction.name.toUpperCase()}'S`}
                            dismissSuccessMessage={() => setSuccessfulDelete(false)} /> }

                        {
                            restoreModal &&
                            <RestoreRecord 
                                record={memberToReceiveAction} 
                                modelName={'users'}
                                dismissRestoreModal={() => setRestoreModal(false)} 
                                successMessage={() => setSuccessfulRestore(true)}
                                fetchModelData={() => fetchMembersData()} 
                            /> 
                        
                        }
                        { successfulRestore && 
                            <SuccessfulRestoreMessage 
                                title={`${memberToReceiveAction.name.toUpperCase()}'S`} 
                                dismissSuccessMessage={() => setSuccessfulRestore(false)} 
                            /> 
                        }

                        
                        <div className="md:flex flex-row items-centre justify-center justify-between p-4">
                            <div className="font-bold">
                                Members
                            </div>
                            <div className="mx-4" >
                                { ascendButton && <span className="inline-flex">
                                    Sort
                                    <button onClick={ascendHandler}>
                                        <FontAwesomeIcon 
                                            icon = {faArrowUp} 
                                            style={{width: '20px', color: 'black', marginInline: '10px'}}
                                        />
                                    </button>
                                </span>}
                                        
                                {descendButton && <span className="inline-flex">
                                    Sort
                                    <button onClick={descendHandler}>
                                        <FontAwesomeIcon 
                                            icon = {faArrowDown} 
                                            style={{width: '20px', color: 'black', marginInline: '10px'}}
                                        />
                                    </button>
                                </span>}

                                <input 
                                    type="search" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by Name"
                                    onChange={filterByNameHandler}
                                />
                                <AddRecordButton onClick = {newMemberFormHandler}>
                                    NEW MEMBER
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                            <MembersTable
                                memberDetails={filteredMembers}
                                actionCallback={(member) => setMemberToReceiveAction(member)}
                                showMember={() => setShowMember(true)}
                                editMember={() => setUpdateModal(true)}
                                deleteMember={() => setDeleteModal(true)}
                                restoreMember={() => setRestoreModal(true)}
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default HomePage;