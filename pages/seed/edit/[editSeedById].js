import MetaData from "../../../components/MetaData"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditSeed from "../../../components/UI/Modals/Update/EditSeed";
import EditSuccessMessage from "../../../components/UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";

const EditTithePage = () => {
    const [seed, setSeed] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    
    let seedId = router.query.editSeedById;

    useEffect(() => {
        fetchdata();
    }, [seedId])
    
    console.log('seed id before: ', seedId)
    const fetchdata = () => {
        if (!seedId) return;
        console.log('seed id after: ', seedId)

        fetch(`http://localhost:8000/api/v1/seeds/${seedId}`)
            .then(res => res.json())
            .then(data => setSeed(data));
    }

    const updateSeedHandler = async (updatedSeedRecord) => {
        await fetch(`http://localhost:8000/api/v1/seeds/${seedId}`, {
            method: "PUT",
            body: JSON.stringify(updatedSeedRecord),
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
        <EditSeed onUpdateSeed={updateSeedHandler} data={seed} />
        {success && <EditSuccessMessage title={'SEED'} link={'/seeds'} />}
    </>
  );
}

export default EditTithePage;

