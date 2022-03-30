import { useState, useEffect } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import SeedsTable from "./UI/Tables/SeedsTable";
import RecordSeed from "./UI/Modals/ModalForms.js/RecordSeed";
import AddRecordButton from "./UI/Button.js/AddRecordButton";

const Seed = () => {
    const [newSeed, setNewSeed] = useState(false);

    const recordSeedHandler = () => {
        setNewSeed(true);
    }

    const [seed, setSeed] = useState([]);

    useEffect(() => {
        fetchSeeds();
    }, []);

    const saveSeedHandler = (seedData) => {
        fetch("http://localhost:8000/api/v1/seeds/", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(seedData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data), 
                fetchSeeds();
            })
    }

    const fetchSeeds = () => {
        fetch("http://localhost:8000/api/v1/seeds/")
            .then(res => res.json())
            .then(data => setSeed(data));
    }

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10"    >
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newSeed && <RecordSeed onAddSeed={saveSeedHandler} close = {() => setNewSeed(false)} />}   
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Seeds
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by date" 
                                />
                                <AddRecordButton onClick={recordSeedHandler}>
                                    RECORD SEED
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                            <SeedsTable allSeed = {seed} />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Seed;
