import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import SuccessMessage from "../../../components/UI/Modals/Restore/SuccessMessage";
import RestoreRecord from "../../../components/UI/Modals/Restore/RestoreRecord";

const RestoreMemberById = () => {
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState('');
    const [data, setData] = useState(null);
    const router = useRouter();

    let titheId = router.query.restoreTitheById;

    useEffect(() => {
        fetchTitheById();
    }, [titheId, success]);

    console.log('tithe id before: ', titheId);

    const fetchTitheById = () => {
        console.log('tithe id after: ', titheId)
        if (!titheId) return;

        fetch(`http://localhost:8000/api/v1/tithes/${titheId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setData(data), 
                setName(data.user.name.toUpperCase())
            });
    }

    const restoreTitheHandler = () => {
        fetch(`http://localhost:8000/api/v1/tithes/${titheId}/restore`)
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
                    title={'TITHE'}
                    link={'/tithes'}
                /> : 
                <RestoreRecord 
                    titile={'TITHE'}
                    link={'/tithes'}
                    restoreRecord={restoreTitheHandler}
                />
            }
        </>
    )
}

export default RestoreMemberById;