import { useState, useEffect } from "react";
import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import AttendanceTable from "./UI/Tables/AttendanceTable";
import AddRecordButton from "./UI/Button/AddRecordButton";
import RecordAttendanceForm from "./UI/Modals/Create/RecordAttendance";

import UpdateAttendance from "./UI/Modals/Update/UpdateAttendance";
import DisplayUpdateSuccessMessage from "./UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";
import DeleteRecord from "./UI/Modals/Delete/DeleteRecord";
import DeleteSuccessMessage from "./UI/Modals/Delete/DeleteSuccessMessage";
import RestoreRecord from "./UI/Modals/Restore/RestoreRecord";
import SuccessfulRestoreMessage from "./UI/Modals/Restore/RestoreSuccessMessage";

const Attendance = () => {
    const [attendances, setAttendances] = useState([]);
    const [newAttendance, setNewAttendance] = useState(false);
    const [filteredYear, setFilteredYear] = useState('');
    const [attendanceToReceiveAction, setAttendanceToReceiveAction] = useState(null);
    const [showAttendance, setShowAttendance] = useState(false);
    const [editAttendance, setEditAttendance] = useState(false);
    const [successfulUpdate, setSuccessfulUpdate] = useState(false)
    const [deleteAttendance, setDeleteAttendance] = useState(false);
    const [restoreAttendance, setRestoreAttendance] = useState(false);
    const [successfulDelete, setSuccessfulDelete] = useState(false)
    const [successfulRestore, setSuccessfulRestore] = useState(false)
    
    const recordAttendanceHandler = () => {
        setNewAttendance(true);
    }
    
    useEffect(() => {
        fetchAllAttendance();
    }, []);
    
    const saveAttendanceHandler = (attendanceRecord) => {
        fetch("http://localhost:8000/api/v1/attendances/", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(attendanceRecord),
            headers: {
                "Accept": "application/json",
                "Content-Type": "appliction/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data), 
                fetchAllAttendance();
            })
            .catch((err) => console.log(err));
    }

    const fetchAllAttendance = () => {
        fetch("http://localhost:8000/api/v1/attendances/")
        .then(res => res.json())
        .then(data => setAttendances(data))
        .catch((err) => console.log(err));
    }
    
    const filterYearHandler = (e) => {
        setFilteredYear(e.target.value)
        console.log(e.target.value)
    }

    const filteredData = attendances.filter( attendance => {
        return attendance.date.includes(filteredYear);
    })

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newAttendance && <RecordAttendanceForm onAddAttendance={saveAttendanceHandler} close = {() => setNewAttendance(false)} />}
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Attendance Records
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by date"
                                    onChange={filterYearHandler} 
                                />
                                <AddRecordButton onClick={recordAttendanceHandler}>
                                    RECORD ATTENDANCE
                                </AddRecordButton>
                            </div>
                        </div>
                        {
                            editAttendance && 
                            <UpdateAttendance 
                                attendance={attendanceToReceiveAction}
                                dismissModal={() => setEditAttendance(false)}
                                successMessage={() => setSuccessfulUpdate(true)}   
                                fetchAttendances={() => fetchAllAttendance()}
                            />
                        }
                        {
                            successfulUpdate && 
                            <DisplayUpdateSuccessMessage
                                title={'ATTENDANCE'}
                                dismissSuccessMessage={() => setSuccessfulUpdate(false)}
                            />
                        }

                        {
                            deleteAttendance && 
                            <DeleteRecord 
                                modelName={'attendances'}
                                record={attendanceToReceiveAction}
                                dismissDeleteModal={() => setDeleteAttendance(false)}
                                fetchModelData={() => fetchAllAttendance()}
                                setSuccessMessage={() => setSuccessfulDelete(true)} 
                            />
                        }
                        {successfulDelete && <DeleteSuccessMessage title={'ATTENDANCE'} dismissSuccessMessage={() => setSuccessfulDelete(false)} />}

                        {
                            restoreAttendance && 
                            <RestoreRecord 
                                record={attendanceToReceiveAction}
                                modelName={'attendances'}
                                dismissRestoreModal={() => setRestoreAttendance(false)}
                                fetchModelData={() => fetchAllAttendance()}
                                successMessage={() => setSuccessfulRestore(true)}
                            />
                        }
                        {
                            successfulRestore && 
                            <SuccessfulRestoreMessage 
                                title={'ATTENDANCE'}
                                dismissSuccessMessage={() => setSuccessfulRestore(false)}
                            />
                        }
                        <div className="container px-4">
                            <AttendanceTable 
                                allAttendances={filteredData}
                                actionCallback={(attendance) => setAttendanceToReceiveAction(attendance)} 
                                showAttendance = {(() => setShowAttendance(true))} 
                                editAttendance = {(() => setEditAttendance(true))} 
                                deleteAttendance = {(() => setDeleteAttendance(true))} 
                                restoreAttendance = {(() => setRestoreAttendance(true))} 
                            />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Attendance;