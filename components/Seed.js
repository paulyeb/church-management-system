import { useState } from "react";

import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import SeedsTable from "./UI/Tables/SeedsTable";
import RecordSeed from "./UI/Modals/ModalForms.js/RecordSeed";

const Seed = () => {
    const [newSeed, setNewSeed] = useState(false);

    const recordSeedHandler = () => {
        setNewSeed(true);
    }
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start fixed w-screen h-screen bg-gray-100 leading-10"    >
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        {newSeed && <RecordSeed close = {() => setNewSeed(false)} />}   
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
                                <button 
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={recordSeedHandler}
                                >
                                    RECORD SEED
                                </button>
                            </div>
                        </div>
                        <div className="container px-4">
                            <SeedsTable />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Seed;
