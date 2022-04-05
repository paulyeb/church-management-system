import MetaData from "../../../components/MetaData"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import EditSuccessMessage from "../../../components/UI/Modals/Update/SuccessMessage/DisplaySuccessMessage";
import ShowMemberDetails from "../../../components/UI/Modals/Read/ShowMember";

const ShowMemberPage = () => {
    const [member, setMember] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    
    let memberId = router.query.showMemberById;

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

    return (
      <>
        <MetaData />
        <ShowMemberDetails data={member} />
        {success && <EditSuccessMessage title={'MEMBER'} link={'/'} />}
    </>
  );
}

export default ShowMemberPage;

