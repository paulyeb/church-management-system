import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import SuccessMessage from "../../../components/UI/Modals/Restore/SuccessMessage";
import RestoreRecord from "../../../components/UI/Modals/Restore/RestoreRecord";

const RestoreAttendanceById = () => {
    const [success, setSuccess] = useState(false);
    const [data, setData] = useState(null);
    const router = useRouter();

    let attendanceId = router.query.restoreAttendanceById;

    useEffect(() => {
        fetchAttendanceById();
    }, [attendanceId, success]);

    console.log('attendance id before: ', attendanceId);

    const fetchAttendanceById = () => {
        console.log('attendance id after: ', attendanceId)
        if (!attendanceId) return;

        fetch(`http://localhost:8000/api/v1/attendances/${attendanceId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setData(data)
            });
    }

    const restoreAttendanceHandler = () => {
        fetch(`http://localhost:8000/api/v1/attendances/${attendanceId}/restore`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setSuccess(true);
            });

        if (!data) return;

        console.log(success);
    }

    return (
        <>
            {
                !data ? "Loading..." : success ? 
                <SuccessMessage 
                    title={'ATTENDANCE'}
                    link={'/attendances'}
                /> : 
                 <RestoreRecord 
                    titile={'ATTENDANCE'}
                    link={'/attendances'}
                    restoreRecord={restoreAttendanceHandler}
                />
            }
        </>
    )
}

export default RestoreAttendanceById;