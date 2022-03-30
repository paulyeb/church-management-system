import { useState } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import DepartmentsTable from "./UI/Tables/DepartmentsTable";
import NewDepartmentForm from "./UI/Modals/ModalForms.js/NewDepartmentForm";

const Departments = () => {
    const [newDepartment, setNewDepartment] = useState(false);

    const newDepartmentHandler = () => {
        setNewDepartment(true);
    }
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        { newDepartment && <NewDepartmentForm close = {() => setNewDepartment(false)} /> }
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Departments
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="search" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search" 
                                />
                                <button 
                                    className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={newDepartmentHandler}
                                >
                                    NEW DEPARTMENT
                                </button>
                            </div>
                        </div>
                        <div className="container px-4">
                            <DepartmentsTable />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Departments;