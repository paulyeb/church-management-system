import MetaData from "../../../components/MetaData"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ShowFamily from "../../../components/UI/Modals/Read/ShowFamily";

const ShowFamilyPage = () => {
    const [family, setFamily] = useState(null);
    const router = useRouter();
    
    let familyId = router.query.showFamilyById;

    useEffect(() => {
        fetchdata();
    }, [familyId])
    
    console.log('family id before: ', familyId)
    const fetchdata = () => {
        if (!familyId) return;
        console.log('family id after: ', familyId)

        fetch(`http://localhost:8000/api/v1/families/${familyId}`)
            .then(res => res.json())
            .then(data => {
                setFamily(data),
                console.log(data.user)
            }
        );
    }

    return (
      <>
        <MetaData />
        <ShowFamily data={family} />
     </>
  );
}

export default ShowFamilyPage;

