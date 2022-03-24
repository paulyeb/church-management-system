import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import VisitorsTable from "./UI/Tables/VisitorsTable";
import NewVisitorForm from "./UI/Modals/ModalForms.js/NewVisitorForm";
import { useState } from "react";
import AddRecordButton from "./UI/Button.js/AddRecordButton";

const Visitors = () => {
    const [newVisitor, setNewVisitor] = useState(false);

    const newVisitorHandler = () => {
        setNewVisitor(true);
    }
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start fixed w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                    {newVisitor && <NewVisitorForm close = {() => setNewVisitor(false)} />}
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Visitors
                            </div>
                            <div className="mx-4">
                                <input 
                                    type="date" 
                                    className="border-2 rounded p-1 mx-2 focus:outline-none" 
                                    placeholder="Search by name" 
                                />
                                <AddRecordButton onClick={newVisitorHandler}>
                                    RECORD VISITOR
                                </AddRecordButton>
                            </div>
                        </div>
                        <div className="container px-4">
                          <VisitorsTable />  
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Visitors;