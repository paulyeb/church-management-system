import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faRefresh } from "@fortawesome/free-solid-svg-icons";

const SeedsTable = ({ allSeed, showSeed, editSeed, deleteSeed, restoreSeed, actionCallback }) => {
    const showSeedHandler = (seed) => {
        actionCallback(seed);
        !seed.deleted_at && showSeed();
    };

    const editSeedHandler = (seed) => {
        actionCallback(seed);
        !seed.deleted_at && editSeed();
    };

    const deleteSeedHandler = (seed) => {
        actionCallback(seed);
        !seed.deleted_at && deleteSeed();
    };

    const restoreSeedHandler = (seed) => {
        actionCallback(seed);
        restoreSeed();
    };

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
                {allSeed.map( seed => <tr className="hover:bg-gray-100 border border-emerald-500" key={seed.id}>
                    <td className="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{seed.date}</td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{seed.user.name}</td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{seed.amount}</td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{seed.comments}</td>
                    <td className="px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                onClick={() => showSeedHandler(seed)}
                            >
                                <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}} />
                            </button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                onClick={() => editSeedHandler(seed)}
                            >
                                <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}} />
                            </button>
                            {
                                !seed.deleted_at ? 
                                    <button 
                                        className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                        onClick={() => deleteSeedHandler(seed)}
                                    >
                                        <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                                    </button> :
                                <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5"
                                    onClick={() => restoreSeedHandler(seed)}>
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

export default SeedsTable;