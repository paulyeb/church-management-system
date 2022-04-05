import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

import SuccessMessage from "../../../components/UI/Modals/Restore/SuccessMessage";
import RestoreRecord from "../../../components/UI/Modals/Restore/RestoreRecord";

const RestoreFamilyById = () => {
    const [success, setSuccess] = useState(false);
    const [familyName, setFamilyName] = useState('');
    const [data, setData] = useState(null);
    const router = useRouter();

    let familyId = router.query.restoreFamilyById;

    useEffect(() => {
        fetchFamilyById();
    }, [familyId, success]);

    console.log('family id before: ', familyId);

    const fetchFamilyById = () => {
        console.log('family id after: ', familyId)
        if (!familyId) return;

        fetch(`http://localhost:8000/api/v1/families/${familyId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setData(data), 
                setFamilyName(data.name.toUpperCase())
            });
    }

    const restoreFamilyHandler = () => {
        fetch(`http://localhost:8000/api/v1/families/${familyId}/restore`)
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
                    title={familyName}
                    link={'/families'}
                /> : 
                <RestoreRecord 
                    titile={familyName}
                    link={'/families'}
                    restoreRecord={restoreFamilyHandler}
                />
            }
        </>
    )
}

export default RestoreFamilyById;