import MetaData from "../../../components/MetaData"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditAttendance from "../../../components/UI/Modals/Update/EditAttendance";
import EditSuccessMessage from "../../../components/UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";

const EditAttendancePage = () => {
    const [attendance, setAttendance] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    
    let attendanceId = router.query.editAttendanceById;

    useEffect(() => {
        fetchdata();
    }, [attendanceId])
    
    console.log('attendance id before: ', attendanceId)
    const fetchdata = () => {
        if (!attendanceId) return;
        console.log('attendance id after: ', attendanceId)

        fetch(`http://localhost:8000/api/v1/attendances/${attendanceId}`)
            .then(res => res.json())
            .then(data => setAttendance(data));
    }

    const updateAttendanceHandler = async (updatedAttendanceRecord) => {
        await fetch(`http://localhost:8000/api/v1/attendances/${attendanceId}`, {
            method: "PUT",
            body: JSON.stringify(updatedAttendanceRecord),
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setSuccess(true);
            console.log(data); 
            fetchdata();
        })
        .catch(error => console.log('error: ', error))
    }

    return (
      <>
        <MetaData />
        <EditAttendance onUpdateAttendance={updateAttendanceHandler} data={attendance} />
        {success && <EditSuccessMessage title={'ATTENDANCE'} link={'/attendances'} />}
    </>
  );
}

export default EditAttendancePage;

