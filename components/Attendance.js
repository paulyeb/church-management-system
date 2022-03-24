import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import AttendanceTable from "./UI/Tables/AttendanceTable";
import RecordAttendanceForm from "./UI/Modals/ModalForms.js/RecordAttendance";

import { useState } from "react";
import AddRecordButton from "./UI/Button.js/AddRecordButton";

const Attendance = () => {
    const [newAttendance, setNewAttendance] = useState(false);

    const recordAttendanceHandler = () => {
        setNewAttendance(true);
    }

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start fixed w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newAttendance && <RecordAttendanceForm close = {() => setNewAttendance(false)} />}
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Attendance Records
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by date" 
                                />
                                <AddRecordButton onClick={recordAttendanceHandler}>
                                    RECORD ATTENDANCE
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                            <AttendanceTable />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Attendance;