import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import AttendanceTable from "./UI/Tables/AttendanceTable";
import AddRecordButton from "./UI/Button/AddRecordButton";
import RecordAttendanceForm from "./UI/Modals/Create/RecordAttendance";

import { useState, useEffect } from "react";

const Attendance = () => {
    const [attendances, setAttendances] = useState([]);
    const [newAttendance, setNewAttendance] = useState(false);
    const [filteredYear, setFilteredYear] = useState('');
    
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
            .then(data => {console.log(data), fetchAllAttendance()})
    }
    const fetchAllAttendance = () => {
        fetch("http://localhost:8000/api/v1/attendances/")
        .then(res => res.json())
        .then(data => setAttendances(data));
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
                        <div className="container px-4">
                            <AttendanceTable allAttendances={filteredData} />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Attendance;