import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp, faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Header from "./UI/Header";
import Card from "./UI/Card";
import Sidebar from "./UI/Sidebar";

import MembersTable from "./UI/Tables/MembersTable";
import NewMemberForm from "./UI/Modals/Create/NewMemberForm";
import AddRecordButton from "./UI/Button/AddRecordButton";

const HomePage = () => {
    const [allMembers, setAllMembers] = useState([]);
    const [filteredName, setFilteredName] = useState('');
    const [newMemberForm, setNewMemberForm] = useState(false);
    const [ascendButton, setAscendButton] = useState(true);
    const [descendButton, setDescendButton] = useState(false);
    const [membersInAscendingOrder, setMembersInAscendingOrder] = useState('');
    const [membersInDescendingInOrder, setMembersInDescendingOrder] = useState('');

    useEffect(() => {
        fetchMembersData();
    }, []);

    const newMemberHandler = (members) => {
        // console.log(members);
        fetch("http://localhost:8000/api/v1/users/", {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(members),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fetchMembersData();
        });    
    }
    
    const fetchMembersData = () => {
        fetch('http://localhost:8000/api/v1/users')
        .then(res => res.json())
        .then(data => {setAllMembers(data), console.log(data)});
        
        // console.log(allMembers);
    };
    
    const newMemberFormHandler = (event) => {
        event.preventDefault();
        
        setNewMemberForm(true);
    }
    
    const filterByNameHandler = (e) => {
        setFilteredName(e.target.value);
    }

    console.log(allMembers.name);

    // console.log(filteredAndSortedData);

    const ascendHandler = () => {
        setMembersInAscendingOrder(allMembers.sort());
        setDescendButton(true);
        setAscendButton(false);
    }

    const descendHandler = () => {
        setMembersInDescendingOrder(allMembers.sort().reverse());
        setAscendButton(true);
        setDescendButton(false);
    }

    const filteredAndSortedData = 
        membersInAscendingOrder ? 
        membersInAscendingOrder :
        membersInDescendingInOrder ? 
        membersInDescendingInOrder : 
        allMembers.filter( member => {
            return member.name.includes(filteredName)
        } 
    )

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newMemberForm && <NewMemberForm onAddNewMember={newMemberHandler} onClose={() => setNewMemberForm(false)} /> }
                        
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                                Members
                            </div>
                            <div className="mx-4" >
                                { ascendButton && <span className="inline-flex">
                                    Sort
                                    <button onClick={ascendHandler}>
                                        <FontAwesomeIcon 
                                            icon = {faArrowUp} 
                                            style={{width: '20px', color: 'black', marginInline: '10px'}}
                                        />
                                    </button>
                                </span>}
                                        
                                {descendButton && <span className="inline-flex">
                                    Sort
                                    <button onClick={descendHandler}>
                                        <FontAwesomeIcon 
                                            icon = {faArrowDown} 
                                            style={{width: '20px', color: 'black', marginInline: '10px'}}
                                        />
                                    </button>
                                </span>}

                                <input 
                                    type="search" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by Name"
                                    onChange={filterByNameHandler}
                                />
                                <AddRecordButton onClick = {newMemberFormHandler}>
                                    NEW MEMBER
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                            <MembersTable memberDetails = {filteredAndSortedData} />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default HomePage;