import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import FamiliesTable from "./UI/Tables/FamiliesTable";
import { useState, useEffect } from "react";
import NewFamilyForm from "./UI/Modals/ModalForms.js/NewFamilyForm";
import AddRecordButton from "./UI/Button.js/AddRecordButton";

const Families = () => {
    const [newFamily, setNewFamily] = useState(false);

    const newFamilyHandler = () => {
        setNewFamily(true);
    }
    const [allFamilies, setAllFamilies] = useState([]);

    useEffect(() => {
        fetchFamiliesData();
    }, []);

    const saveNewMemberHandler = (family) => {
        console.log(family);
        fetch("http://localhost:8000/api/v1/families/", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(family),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fetchFamiliesData();
        });    
    }
    
    const fetchFamiliesData = () => {
        fetch('http://localhost:8000/api/v1/families')
        .then(res => res.json())
        .then(data => setAllFamilies(data));
        
        // console.log(allFamilies);
    };
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        { newFamily && <NewFamilyForm onSaveNewFamily={saveNewMemberHandler} close = {() => setNewFamily(false)} /> }
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Families
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="search" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search" 
                                />
                                <AddRecordButton onClick={newFamilyHandler}>
                                    NEW FAMILY
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                            <FamiliesTable families={allFamilies} />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Families;