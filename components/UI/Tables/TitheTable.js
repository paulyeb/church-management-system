import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faRefresh } from "@fortawesome/free-solid-svg-icons";

const TitheTable = ({ allTithe, editTithe, deleteTithe, restoreTithe, actionCallback }) => {
    const editTitheHandler = (tithe) => {
        actionCallback(tithe);
        !tithe.deleted_at && editTithe();
    };

    const deleteTitheHandler = (tithe) => {
        actionCallback(tithe);
        !tithe.deleted_at && deleteTithe();
    };

    const restoreTitheHandler = (tithe) => {
        actionCallback(tithe);
        restoreTithe();
    };

    console.log('all tithe, ', allTithe)
    if (!allTithe.length) {
        return <p>Loading...</p>
    }

    return (
        <table className="text-left my-6 w-full mx-auto">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 ">Date</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Member</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Amount</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Comments</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                {allTithe.filter(tithe => tithe.user).map( tithe => 
                    <tr className="hover:bg-gray-100 border border-emerald-500" key={tithe.id}>
                        <td className="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{tithe.date}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{tithe.user.name}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{tithe.amount}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{tithe.comments}</td>
                        <td className="px-4 py-2 text-emerald-600">
                            <div className="flex flex-row items-centre justify-start">
                                <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full" 
                                    onClick={() => editTitheHandler(tithe)}
                                >
                                    <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}} />
                                </button>
                                {
                                    !tithe.deleted_at ? 
                                        <button 
                                            className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                            onClick={() => deleteTitheHandler(tithe)}
                                        >
                                            <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                                        </button> :
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5"
                                        onClick={() => restoreTitheHandler(tithe)}>
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

export default TitheTable;