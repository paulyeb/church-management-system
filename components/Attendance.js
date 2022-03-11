import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import AttendanceTable from "./UI/Tables/AttendanceTable";
import RecordAttendanceForm from "./UI/Modals/ModalForms.js/RecordAttendance";

import { useState } from "react";

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
                                <button 
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={recordAttendanceHandler}
                                >
                                    RECORD ATTENDANCE
                                </button>
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