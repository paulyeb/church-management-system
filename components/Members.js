import { useState } from "react";
import Header from "./UI/Header";
import Card from "./UI/Card";
import Sidebar from "./UI/Sidebar";

import MembersTable from "./UI/Tables/MembersTable";
import NewMemberForm from "./UI/Modals/ModalForms.js/NewMemberForm";

const ALL_MEMBERS = [
    {
      id: 1,
      name: 'Alfred Korankye',
      phone: '0233432432',
      family: 'Love'
    },
    {
      id: 2,
      name: 'Osborn Amankwah',
      phone: '0245432892',
      family: 'Peace'
    },
    {
      id: 3,
      name: 'Isaac Kusi',
      phone: '0542892432',
      family: 'Hope'
    },
    {
      id: 4,
      name: 'William Morgan-Darko',
      phone: '0202348902',
      family: 'Faith'
    }
]

const HomePage = () => {
    const [allMembers, setAllMembers] = useState(ALL_MEMBERS);

    const [newMemberForm, setNewMemberForm] = useState(false);

    const newMemberFormHandler = (event) => {
        event.preventDefault();
        
        setNewMemberForm(true);
    }

    const newMemberHandler = (members) => {
        setAllMembers(prevMembers => {
            return [members, ...prevMembers];
        });

        console.log()
    }

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start fixed w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newMemberForm && <NewMemberForm onAddNewMember={newMemberHandler} onClose={() => setNewMemberForm(false)} /> }
                        
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Members
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="search" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by Name"
                                />
                                <button 
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                                    type="button"
                                    onClick = {newMemberFormHandler} >
                                    NEW MEMBER
                                </button>
                            </div>
                        </div>
                        <div className="container px-4">
                            <MembersTable memberDetails = {allMembers} />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default HomePage;