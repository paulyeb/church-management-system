import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Card from "./UI/Card";
import VisitorsTable from "./UI/Tables/VisitorsTable";

const Visitors = () => {
    return (
        <>
            <Header />
            <div className="flex flex-row items-centre justify-start fixed w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
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
                                <button 
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    RECORD VISITOR
                                </button>
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