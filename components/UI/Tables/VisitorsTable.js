import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faRefresh } from "@fortawesome/free-solid-svg-icons";

const VisitorsTable = ({ allVisitors, showVisitor, editVisitor, deleteVisitor, restoreVisitor, actionCallback }) => {
    const showVisitorHandler = (visitor) => {
        actionCallback(visitor);
        !visitor.deleted_at && showVisitor();
    }

    const editVisitorHandler = (visitor) => {
        actionCallback(visitor);
        !visitor.deleted_at && editVisitor();
    }

    const deleteVisitorHandler = (visitor) => {
        actionCallback(visitor);
        !visitor.deleted_at && deleteVisitor();
    }

    const restoreVisitorHandler = (visitor) => {
        actionCallback(visitor);
        restoreVisitor();
    }

    return (
        <table className="text-left my-6 w-full mx-auto">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 ">Date</th>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Name</th>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Phone</th>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Purpose of Visit</th>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Comments</th>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                {allVisitors.map( visitor => 
                    <tr className="hover:bg-gray-100 border border-emerald-500" key={visitor.id}>
                        <td className="border border-emerald-500 px-4 py-4 text-emerald-600">{visitor.date}</td>
                        <td className="border border-emerald-500 px-4 py-4 text-emerald-600">{visitor.name}</td>
                        <td className="border border-emerald-500 px-4 py-4 text-emerald-600">{visitor.phone_number}</td>
                        <td className="border border-emerald-500 px-4 py-4 text-emerald-600">{visitor.purpose_of_visit}</td>
                        <td className="border border-emerald-500 px-4 py-4 text-emerald-600">{visitor.comments}</td>
                        <td className="px-4 py-2 text-emerald-600">
                            <div className="flex flex-row items-centre justify-start">                                
                                <button 
                                    className="p-3 hover:bg-gray-300 hover:border-2 rounded-full" 
                                    onClick={() => showVisitorHandler(visitor)}
                                >
                                    <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}} />
                                </button>   
                                <button 
                                    className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                    onClick={() => editVisitorHandler(visitor)}
                                >
                                    <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}} />
                                </button>   
                                {
                                    !visitor.deleted_at ? 
                                        <button 
                                            className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                            onClick={() => deleteVisitorHandler(visitor)}
                                        >
                                            <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                                        </button> :
                                    <button 
                                        className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                        onClick={() => restoreVisitorHandler(visitor)}
                                    >
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

export default VisitorsTable;