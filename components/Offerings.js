import { useState, useEffect } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import OfferingsTable from "./UI/Tables/OfferingsTable";
import RecordOffering from "./UI/Modals/Create/RecordOffering";
import AddRecordButton from "./UI/Button/AddRecordButton";
import UpdateOffering from "./UI/Modals/Update/UpdateOffering";
import DisplayUpdateSuccessMessage from "./UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";
import DeleteRecord from "./UI/Modals/Delete/DeleteRecord";
import DeleteSuccessMessage from "./UI/Modals/Delete/DeleteSuccessMessage";
import RestoreRecord from "./UI/Modals/Restore/RestoreRecord";
import SuccessfulRestoreMessage from "./UI/Modals/Restore/RestoreSuccessMessage";

const Offering = () => {
    const [offerings, setOfferings] = useState([]);
    const [newOffering, setNewOffering] = useState(false);
    const [filteredYear, setFilteredYear] = useState('');
    const [offeringToReceiveAction, setOfferingToReceiveAction] = useState(null);
    const [showOffering, setShowOffering] = useState(false);
    const [editOffering, setEditOffering] = useState(false);
    const [successfulUpdate, setSuccessfulUpdate] = useState(false)
    const [deleteOffering, setDeleteOffering] = useState(false);
    const [restoreOffering, setRestoreOffering] = useState(false);
    const [successfulDelete, setSuccessfulDelete] = useState(false)
    const [successfulRestore, setSuccessfulRestore] = useState(false)

    const recordOfferingHandler = () => {
        setNewOffering(true);
    }

    useEffect(() => {
        fetchOfferings();
    }, []);

    const addOfferinghandler = (offeringData) => {
        fetch("http://localhost:8000/api/v1/offerings", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(offeringData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data),
                fetchOfferings();
            });
    }
    
    const fetchOfferings = () => {
        fetch("http://localhost:8000/api/v1/offerings")
            .then(res => res.json())
            .then(data => setOfferings(data));
    }

    
    const filterYearHandler = (e) => {
        setFilteredYear(e.target.value)
        console.log(e.target.value)
    }
    
    const filteredData = offerings.filter( offering => {
        return offering.date.includes(filteredYear);
    })
    
    
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newOffering && <RecordOffering onAddOffering={addOfferinghandler} close = {() => setNewOffering(false)} />}
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Offerings
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by date" 
                                    onChange={filterYearHandler}
                                    />
                                <AddRecordButton onClick={recordOfferingHandler}>
                                    RECORD OFFERING
                                </AddRecordButton>
                            </div>
                        </div>
                        {
                            editOffering && 
                            <UpdateOffering 
                                offering={offeringToReceiveAction}
                                dismissModal={() => setEditOffering(false)}
                                successMessage={() => setSuccessfulUpdate(true)}   
                                fetchOfferings={() => fetchOfferings()}
                            />
                        }
                        {
                            successfulUpdate && 
                            <DisplayUpdateSuccessMessage
                                title={'OFFERING'}
                                dismissSuccessMessage={() => setSuccessfulUpdate(false)}
                            />
                        }

                        {
                            deleteOffering && 
                            <DeleteRecord 
                                modelName={'offerings'}
                                record={offeringToReceiveAction}
                                dismissDeleteModal={() => setDeleteOffering(false)}
                                fetchModelData={() => fetchOfferings()}
                                setSuccessMessage={() => setSuccessfulDelete(true)} 
                            />
                        }
                        {successfulDelete && <DeleteSuccessMessage title={'OFFERING'} dismissSuccessMessage={() => setSuccessfulDelete(false)} />}

                        {
                            restoreOffering && 
                            <RestoreRecord 
                                record={offeringToReceiveAction}
                                modelName={'offerings'}
                                dismissRestoreModal={() => setRestoreOffering(false)}
                                fetchModelData={() => fetchOfferings()}
                                successMessage={() => setSuccessfulRestore(true)}
                            />
                        }
                        {
                            successfulRestore && 
                            <SuccessfulRestoreMessage 
                                title={'OFFERING'}
                                dismissSuccessMessage={() => setSuccessfulRestore(false)}
                            />
                        }
                        <div className="container px-4">
                           <OfferingsTable 
                                offerings = {filteredData} 
                                actionCallback={(offering) => setOfferingToReceiveAction(offering)} 
                                showOffering = {(() => setShowOffering(true))} 
                                editOffering= {(() => setEditOffering(true))} 
                                deleteOffering = {(() => setDeleteOffering(true))} 
                                restoreOffering = {(() => setRestoreOffering(true))} 
                           /> 
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Offering;