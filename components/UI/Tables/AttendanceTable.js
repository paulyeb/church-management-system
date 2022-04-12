import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faRefresh } from "@fortawesome/free-solid-svg-icons";

const AttendanceTable = ({ allAttendances, editAttendance, deleteAttendance, restoreAttendance, actionCallback }) => {
    const editAttendanceHandler = (attendance) => {
        actionCallback(attendance);
        !attendance.deleted_at && editAttendance();
    };

    const deleteAttendanceHandler = (attendance) => {
        actionCallback(attendance);
        !attendance.deleted_at && deleteAttendance();
    };
    const restoreAttendanceHandler = (attendance) => {
        actionCallback(attendance);
        restoreAttendance();
    };

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
                                <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                    onClick={() => editAttendanceHandler(attendance)}
                                >
                                    <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}} />
                                </button>
                                {
                                    !attendance.deleted_at ? 
                                        <button 
                                            className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                            onClick={() => deleteAttendanceHandler(attendance)}
                                        >
                                            <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                                        </button> :
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5"
                                        onClick={() => restoreAttendanceHandler(attendance)}>
                                        <FontAwesomeIcon icon = {faRefresh} style={{width: '20px', color: 'black'}}/>
                                    </button>
                                }
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default AttendanceTable;