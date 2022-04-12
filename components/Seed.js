import { useState, useEffect } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import SeedsTable from "./UI/Tables/SeedsTable";
import RecordSeed from "./UI/Modals/Create/RecordSeed";
import AddRecordButton from "./UI/Button/AddRecordButton";
import UpdateSeed from "./UI/Modals/Update/UpdateSeed";
import DisplayUpdateSuccessMessage from "./UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";
import DeleteRecord from "./UI/Modals/Delete/DeleteRecord";
import DeleteSuccessMessage from "./UI/Modals/Delete/DeleteSuccessMessage";
import RestoreRecord from "./UI/Modals/Restore/RestoreRecord";
import SuccessfulRestoreMessage from "./UI/Modals/Restore/RestoreSuccessMessage";

const Seed = () => {
    const [seeds, setSeed] = useState([]);
    const [newSeed, setNewSeed] = useState(false);
    const [filteredYear, setFilteredYear] = useState('');
    const [filteredMember, setFilteredMember] = useState('');
    const [seedToReceiveAction, setSeedToReceiveAction] = useState(null);
    const [showSeed, setShowSeed] = useState(false);
    const [editSeed, setEditSeed] = useState(false);
    const [successfulUpdate, setSuccessfulUpdate] = useState(false)
    const [deleteSeed, setDeleteSeed] = useState(false);
    const [restoreSeed, setRestoreSeed] = useState(false);
    const [successfulDelete, setSuccessfulDelete] = useState(false)
    const [successfulRestore, setSuccessfulRestore] = useState(false)

    const recordSeedHandler = () => {
        setNewSeed(true);
    }

    useEffect(() => {
        fetchSeeds();
    }, []);

    const saveSeedHandler = (seedData) => {
        fetch("http://localhost:8000/api/v1/seeds/", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(seedData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data), 
                fetchSeeds();
            })
    }

    const fetchSeeds = () => {
        fetch("http://localhost:8000/api/v1/seeds/")
            .then(res => res.json())
            .then(data => setSeed(data));
    }

    const filterMemberHandler = (e) => {
        setFilteredMember(e.target.value);
    }
    
    const filterYearHandler = (e) => {
        setFilteredYear(e.target.value);
    }
    
    const filteredData = filteredYear ? 
        seeds.filter( seed => {
            return seed.date.includes(filteredYear);
        }) : 
        filteredMember ? seeds.filter( seed => {
            return seed.user.name.includes(filteredMember);
        }) : 
    seeds
    
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10"    >
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newSeed && <RecordSeed onAddSeed={saveSeedHandler} close = {() => setNewSeed(false)} />}   
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Seeds
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
                                <AddRecordButton onClick={recordSeedHandler}>
                                    RECORD SEED
                                </AddRecordButton>
                            </div>
                        </div>
                        {
                            editSeed && 
                            <UpdateSeed 
                                seed={seedToReceiveAction}
                                dismissModal={() => setEditSeed(false)}
                                successMessage={() => setSuccessfulUpdate(true)}   
                                fetchSeeds={() => fetchSeeds()}
                            />
                        }
                        {
                            successfulUpdate && 
                            <DisplayUpdateSuccessMessage
                                title={'SEED'}
                                dismissSuccessMessage={() => setSuccessfulUpdate(false)}
                            />
                        }

                        {
                            deleteSeed && 
                            <DeleteRecord 
                                modelName={'seeds'}
                                record={seedToReceiveAction}
                                dismissDeleteModal={() => setDeleteSeed(false)}
                                fetchModelData={() => fetchSeeds()}
                                setSuccessMessage={() => setSuccessfulDelete(true)} 
                            />
                        }
                        {successfulDelete && <DeleteSuccessMessage title={'SEED'} dismissSuccessMessage={() => setSuccessfulDelete(false)} />}

                        {
                            restoreSeed && 
                            <RestoreRecord 
                                record={seedToReceiveAction}
                                modelName={'seeds'}
                                dismissRestoreModal={() => setRestoreSeed(false)}
                                fetchModelData={() => fetchSeeds()}
                                successMessage={() => setSuccessfulRestore(true)}
                            />
                        }
                        {
                            successfulRestore && 
                            <SuccessfulRestoreMessage 
                                title={'SEED'}
                                dismissSuccessMessage={() => setSuccessfulRestore(false)}
                            />
                        }

                        <div className="container px-4">
                            <SeedsTable 
                                allSeed = {filteredData} 
                                actionCallback={(seed) => setSeedToReceiveAction(seed)} 
                                showSeed = {(() => setShowSeed(true))} 
                                editSeed= {(() => setEditSeed(true))} 
                                deleteSeed = {(() => setDeleteSeed(true))} 
                                restoreSeed = {(() => setRestoreSeed(true))} 
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Seed;
