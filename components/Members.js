import { useState } from "react";
import Header from "./UI/Header";
import Card from "./UI/Card";
import Sidebar from "./UI/Sidebar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import MembersTable from "./UI/Tables/MembersTable";
import Backdrop from "./UI/Backdrop";

const HomePage = () => {
    const [newMember, setNewMember] = useState(false);

    const newMemberHandler = (event) => {
        event.preventDefault();

        setNewMember(true);
    }

    const churchMembers = [
        {
          name: 'Alfred Korankye',
          phone: '0233432432',
          family: 'Love',
          actions: [
                <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/>,
                <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}}/>,
                <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
            ]
        },
        {
          name: 'Osborn Amankwah',
          phone: '0245432892',
          family: 'Peace',
          actions: [
                <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/>,
                <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}}/>,
                <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
            ]
        },
        {
          name: 'Isaac Kusi',
          phone: '0542892432',
          family: 'Hope',
          actions: [
                <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/>,
                <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}}/>,
                <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
            ]
        },
        {
          name: 'William Morgan-Darko',
          phone: '0202348902',
          family: 'Faith',
          actions: [
                <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/>,
                <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}}/>,
                <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
            ]
        }
    ]
    
    const filterByNameHanlder = (e) => {
        const enteredName = e.target.value.toLowerCase().indexOf();
        // console.log(enteredName)
    
        const members = churchMembers.filter(member => member.name === enteredName)
    
        console.log(members)
    }

    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start fixed w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newMember && <Backdrop /> }
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Members
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="search" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by Name" 
                                    onInput={filterByNameHanlder}
                                />
                                <button 
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                                    type="button"
                                    onClick = {newMemberHandler} >
                                    NEW MEMBER
                                </button>
                            </div>
                        </div>
                        <div className="container px-4">
                            <MembersTable churchMembers = {churchMembers} />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default HomePage;