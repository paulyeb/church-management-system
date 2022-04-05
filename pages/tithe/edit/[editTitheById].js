import MetaData from "../../../components/MetaData"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditTithe from "../../../components/UI/Modals/Update/EditTithe";
import EditSuccessMessage from "../../../components/UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";

const EditTithePage = () => {
    const [tithe, setTithe] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    
    let titheId = router.query.editTitheById;

    useEffect(() => {
        fetchdata();
    }, [titheId])
    
    console.log('tithe id before: ', titheId)
    const fetchdata = () => {
        if (!titheId) return;
        console.log('tithe id after: ', titheId)

        fetch(`http://localhost:8000/api/v1/tithes/${titheId}`)
            .then(res => res.json())
            .then(data => setTithe(data));
    }

    const updateTitheHandler = async (updatedTitheRecord) => {
        await fetch(`http://localhost:8000/api/v1/tithes/${titheId}`, {
            method: "PUT",
            body: JSON.stringify(updatedTitheRecord),
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
        <EditTithe onUpdateTithe={updateTitheHandler} data={tithe} />
        {success && <EditSuccessMessage title={'TITHE'} link={'/tithes'} />}
    </>
  );
}

export default EditTithePage;

