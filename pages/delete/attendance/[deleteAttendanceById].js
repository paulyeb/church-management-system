import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import DeleteRecord from "../../../components/UI/Modals/Delete/DeleteRecord";
import SuccessMessage from "../../../components/UI/Modals/Delete/SuccessMessage";

const DeleteAttendanceById = () => {
    const router = useRouter();
    const [success, setSuccess] = useState(''); 
            
    const [data, setData] = useState(null);

    let attendanceId = router.query.deleteAttendanceById;

    useEffect(() => {
        fetchAttendanceById();
    }, [attendanceId]);

    console.log('attendance id before: ', attendanceId)
    const fetchAttendanceById = () => {
        console.log('attendance id after: ', attendanceId)
        if (!attendanceId) return;

        fetch(`http://localhost:8000/api/v1/attendances/${attendanceId}`)
            .then(response => response.json())
            .then(data => {setData(data)});
    }

    const deleteAttendanceHandler = () => {
        fetch(`http://localhost:8000/api/v1/attendances/${attendanceId}/destroy`, {
            method: "DELETE",
            body: JSON.stringify(),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data), 
                setSuccess('Loading'), 
                console.log(success)});
    }
    return (
        <>
            {
                !data ? "Loading..." : success ? 
                <SuccessMessage 
                    title={'ATTENDANCE'} 
                    link={'/attendances'} 
                /> : 
                <DeleteRecord 
                    deleteRecord={deleteAttendanceHandler}
                    title={'ATTENDANCE'} 
                    link={'/attendances'} 
                /> 
            }
        </>
    )
}

export default DeleteAttendanceById;