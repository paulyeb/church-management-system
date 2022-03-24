import { useState } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import OfferingsTable from "./UI/Tables/OfferingsTable";
import RecordOffering from "./UI/Modals/ModalForms.js/RecordOffering";
import AddRecordButton from "./UI/Button.js/AddRecordButton";



const Offering = () => {
    const [newOffering, setNewOffering] = useState(false);

    const recordOfferingHandler = () => {
        setNewOffering(true);
    }
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start fixed w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newOffering && <RecordOffering close = {() => setNewOffering(false)} />}
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
                           <OfferingsTable /> 
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Offering;