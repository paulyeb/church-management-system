import { Fragment } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Offering = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex flex-row items-centre justify-start fixed w-screen h-screen bg-gray-100 leading-10">
                <Sidebar />
                <div className="m-2 p-5 h-screen w-full">
                    <Card>
                        <div className="flex flex-row items-centre justify-between p-4">
                            <div className="font-bold">
                            Offerings
                            </div>
                            <div className="mx-4">
                            <input type="date" className="border-2 rounded p-1 mx-2 focus:outline-none" placeholder="Search by date" />
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
                                RECORD OFFERING
                            </button>
                            </div>
                        </div>
                        <div className="container px-4">
                            <table class="text-left my-6 w-full mx-auto">
                            <thead>
                                <tr>
                                    <th class="border border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></th>
                                    <th class="border border-emerald-500 px-4 py-4 text-emerald-600 ">Date</th>
                                    <th class="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Type</th>
                                    <th class="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Amount</th>
                                    <th class="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover:bg-gray-100 border border-emerald-500">
                                    <td class=" border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                </tr>
                                <tr class="hover:bg-gray-100 border border-emerald-500">
                                    <td class="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                </tr>
                                <tr className="hover:bg-gray-100 border border-emerald-500">
                                    <td class="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                    <td class="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            </div>
        </Fragment>
    );
}

export default Offering;