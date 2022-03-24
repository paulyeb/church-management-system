import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen } from "@fortawesome/free-solid-svg-icons";

const AttendanceTable = () => {
    const actions = [
        <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/>,
        <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}}/>,
        <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
    ];

    return (
        <table className="text-left my-6 w-full mx-auto shadow-sm">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 ">Date</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Men</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Women</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Children</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Visitors</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Comments</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className=" border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">23-02-2022</td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">23</td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">34</td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">15</td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">3</td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">{actions[0]}</button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{actions[1]}</button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{actions[2]}</button>
                        </div>
                    </td>
                </tr>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">{actions[0]}</button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{actions[1]}</button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{actions[2]}</button>
                        </div>
                    </td>
                </tr>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">{actions[0]}</button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{actions[1]}</button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{actions[2]}</button>
                        </div>
                    </td>
                </tr>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">{actions[0]}</button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{actions[1]}</button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{actions[2]}</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default AttendanceTable;