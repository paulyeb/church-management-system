import { useState } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import RolesTable from "./UI/Tables/RolesTable";
import NewRoleForm from "./UI/Modals/Create/NewRoleForm";
import AddRecordButton from "./UI/Button/AddRecordButton";

const Roles = () => {
    const [newRole, setNewRole] = useState(false);

    const newRoleHandler = () => {
        setNewRole(true);
    }
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        { newRole && <NewRoleForm close = {() => setNewRole(false)} /> }
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Roles
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="search" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search" 
                                />
                                <AddRecordButton onClick={newRoleHandler}>
                                    NEW ROLE
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                            <RolesTable />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Roles;