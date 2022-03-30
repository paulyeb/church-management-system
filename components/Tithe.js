import { useState, useEffect } from "react";
import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import TitheTable from "./UI/Tables/TitheTable";
import RecordTithe from "./UI/Modals/ModalForms.js/RecordTithe";
import AddRecordButton from "./UI/Button.js/AddRecordButton";


const Tithe = () => {
    const [newTithe, setNewTithe] = useState(false);

    const recordTitheHandler = () => {
        setNewTithe(true);
    }    
    
    const [allTithe, setAllTithe] = useState([]);

    useEffect(() => {
        fetchTithes();
    }, []);

    const saveTitheHandler = (titheData) => {
        fetch("http://localhost:8000/api/v1/tithes/", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(titheData),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data), 
                fetchTithes();
            })
    }

    const fetchTithes = () => {
        fetch("http://localhost:8000/api/v1/tithes")
            .then(res => res.json())
            .then(data => setAllTithe(data));
    }

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                    {newTithe && <RecordTithe onAddTithe={saveTitheHandler} close = {() => setNewTithe(false)} />}
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Tithes
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by date" 
                                />
                                <AddRecordButton onClick={recordTitheHandler}>
                                    RECORD TITHE
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                            <TitheTable allTithe = { allTithe } />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Tithe;