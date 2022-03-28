import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen } from "@fortawesome/free-solid-svg-icons";

const RolesTable = () => {

    return (
        <table className="text-left my-6 w-full mx-auto">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg w-10">Name</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">Administrator</td>
                    <td className="px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">
                                <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/>
                            </button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">  
                                    <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}}/> 
                            </button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">
                                <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default RolesTable;