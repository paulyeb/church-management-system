import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faRefresh } from "@fortawesome/free-solid-svg-icons";

const ExpenditureTable = ({ allExpenditure, editExpenditure, deleteExpenditure, restoreExpenditure, actionCallback }) => { 
    const editExpenditureHandler = (expenditure) => {
        actionCallback(expenditure);
        !expenditure.deleted_at && editExpenditure();
    };

    const deleteExpenditureHandler = (expenditure) => {
        actionCallback(expenditure);
        !expenditure.deleted_at && deleteExpenditure();
    };

    const restoreAttendanceHandler = (expenditure) => {
        actionCallback(expenditure);
        restoreExpenditure();
    };

    return (
        <table className="text-left my-6 w-full mx-auto">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 ">Date</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Amount</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Expense Type</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Comments</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                {allExpenditure.map(expenditure =>
                    <tr className="hover:bg-gray-100 border border-emerald-500" key={expenditure.id}>
                        <td className="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{expenditure.date}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{expenditure.amount}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{expenditure.type}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{expenditure.comments}</td>
                        <td className="px-4 py-2 text-emerald-600">
                            <div className="flex flex-row items-centre justify-start">
                                <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full" 
                                    onClick={() => editExpenditureHandler(expenditure)}
                                >
                                    <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}} />
                                </button>
                                {
                                    !expenditure.deleted_at ? 
                                        <button 
                                            className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                            onClick={() => deleteExpenditureHandler(expenditure)}
                                        >
                                            <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                                        </button> :
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5"
                                        onClick={() => restoreAttendanceHandler(expenditure)}>
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

export default ExpenditureTable;