import { useState, useEffect } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import SeedsTable from "./UI/Tables/SeedsTable";
import RecordSeed from "./UI/Modals/Create/RecordSeed";
import AddRecordButton from "./UI/Button/AddRecordButton";

const Seed = () => {
    const [seeds, setSeed] = useState([]);
    const [newSeed, setNewSeed] = useState(false);
    const [filteredYear, setFilteredYear] = useState('');

    const recordSeedHandler = () => {
        setNewSeed(true);
    }

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

    
    const filterYearHandler = (e) => {
        setFilteredYear(e.target.value)
        console.log(e.target.value)
    }
    
    const filteredData = seeds.filter( seed => {
        return seed.date.includes(filteredYear);
    })
    
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
                                    onChange={filterYearHandler}
                                />
                                <AddRecordButton onClick={recordSeedHandler}>
                                    RECORD SEED
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                            <SeedsTable allSeed = {filteredData} />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Seed;
