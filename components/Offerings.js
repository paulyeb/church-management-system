import { useState, useEffect } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import OfferingsTable from "./UI/Tables/OfferingsTable";
import RecordOffering from "./UI/Modals/Create/RecordOffering";
import AddRecordButton from "./UI/Button/AddRecordButton";



const Offering = () => {
    const [newOffering, setNewOffering] = useState(false);

    const recordOfferingHandler = () => {
        setNewOffering(true);
    }

    const [offerings, setOfferings] = useState([]);

    useEffect(() => {
        fetchOfferings();
    }, []);

    const addOfferinghandler = (offeringData) => {
        fetch("http://localhost:8000/api/v1/offerings", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(offeringData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data),
                fetchOfferings();
            });
    }
    
    const fetchOfferings = () => {
        fetch("http://localhost:8000/api/v1/offerings")
            .then(res => res.json())
            .then(data => setOfferings(data));
    }

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newOffering && <RecordOffering onAddOffering={addOfferinghandler} close = {() => setNewOffering(false)} />}
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Offerings
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by date" 
                                />
                                <AddRecordButton onClick={recordOfferingHandler}>
                                    RECORD OFFERING
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                           <OfferingsTable offerings = {offerings} /> 
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Offering;