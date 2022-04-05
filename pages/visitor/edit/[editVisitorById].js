import MetaData from "../../../components/MetaData"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditVisitor from "../../../components/UI/Modals/Update/EditVisitor";
import EditSuccessMessage from "../../../components/UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";

const EditVisitorPage = () => {
    const [visitor, setVisitor] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    
    let visitorId = router.query.editVisitorById;

    useEffect(() => {
        fetchdata();
    }, [visitorId])
    
    console.log('visitor id before: ', visitorId)
    const fetchdata = () => {
        if (!visitorId) return;
        console.log('visitor id after: ', visitorId)

        fetch(`http://localhost:8000/api/v1/visitors/${visitorId}`)
            .then(res => res.json())
            .then(data => setVisitor(data));
    }

    const updateVisitorHandler = async (updatedVisitorDetails) => {
        await fetch(`http://localhost:8000/api/v1/visitors/${visitorId}`, {
            method: "PUT",
            body: JSON.stringify(updatedVisitorDetails),
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
        <EditVisitor onUpdateVisitor={updateVisitorHandler} data={visitor} />
        {success && <EditSuccessMessage title={'VISITOR'} link={'/visitors'} />}
    </>
  );
}

export default EditVisitorPage;

