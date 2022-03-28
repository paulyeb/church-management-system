import MetaData from "../../components/MetaData";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditMember from "../../components/UI/Modals/EditEntries.js/EditMember";
import EditSuccessMessage from "../../components/UI/Modals/EditEntries.js/EditSuccessMessage";

const EditMemberPage = () => {
    const [member, setMember] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    
    let memberId = router.query.editMemberById;

    useEffect(() => {
        fetchdata();
    }, [memberId])
    
    console.log('member id before: ', memberId)
    const fetchdata = () => {
        if (!memberId) return;
        console.log('member id after: ', memberId)

        fetch(`http://localhost:8000/api/v1/users/${memberId}`)
            .then(res => res.json())
            .then(data => setMember(data));
    }

    const updateMemberHandler = (updatedMemberDetails) => {
        fetch(`http://localhost:8000/api/v1/users/${memberId}`, {
            method: "PUT",
            body: JSON.stringify(updatedMemberDetails),
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data); 
            fetchdata();
        })
        .catch(error => console.log('error: ', error))
    }

    return (
      <>
        <MetaData />
        <EditMember onUpdateMember={updateMemberHandler} data={member} onClose={() => setSuccess(true)} />
        {success && <EditSuccessMessage />}
    </>
  );
}

export default EditMemberPage;

