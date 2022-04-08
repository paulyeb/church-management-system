import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";

const AttendanceTable = ({ allAttendances }) => {

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
                {allAttendances.map(attendance => 
                    <tr className="hover:bg-gray-100 border border-emerald-500" key={attendance.id}>
                        <td className="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{attendance.date}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{attendance.men}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{attendance.women}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{attendance.children}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{attendance.visitors}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{attendance.comments}</td>
                        <td className="px-4 py-2 text-emerald-600">
                            <div className="flex flex-row items-centre justify-start">
                                <Link href={`edit/attendance/${attendance.id}`}> 
                                    <a>
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">
                                        <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}} />
                                    </button>
                                    </a>
                                </Link> 
                                {!attendance.deleted_at ? <Link href={`delete/attendance/${attendance.id}`}>
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">
                                        <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                                    </button>
                                </Link> :
                                <Link href={`restore/attendance/${attendance.id}`}>
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">
                                        <FontAwesomeIcon icon = {faTrashRestoreAlt} style={{width: '20px', color: 'black'}}/>
                                    </button>
                                </Link>}
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default AttendanceTable;