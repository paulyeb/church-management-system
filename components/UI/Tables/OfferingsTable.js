import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faRefresh } from "@fortawesome/free-solid-svg-icons";

const OfferingsTable = ({ offerings, showOffering, editOffering, deleteOffering, restoreOffering, actionCallback }) => {
    const showOfferingHandler = (offering) => {
        actionCallback(offering);
        !offering.deleted_at && showOffering();
    };

    const editOfferingHandler = (offering) => {
        actionCallback(offering);
        !offering.deleted_at && editOffering();
    };

    const deleteOfferingHandler = (offering) => {
        actionCallback(offering);
        !offering.deleted_at && deleteOffering();
    };

    const restoreOfferingHandler = (offering) => {
        actionCallback(offering);
        restoreOffering();
    };
    return (
        <table className="text-left my-6 w-full mx-auto">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 ">Date</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Type</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Amount</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Comments</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                {offerings.map( offering => 
                    <tr className="hover:bg-gray-100 border border-emerald-500" key={offering.id}>
                        <td className="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{offering.date}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{offering.type}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{offering.amount}</td>
                        <td className="border border-emerald-500 px-4 py-2 text-emerald-600">{offering.comments}</td>
                        <td className="px-4 py-2 text-emerald-600">
                            <div className="flex flex-row items-centre justify-start">
                                <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                    onClick={() => showOfferingHandler(offering)}
                                >
                                    <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}} />
                                </button>
                                <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                    onClick={() => editOfferingHandler(offering)}
                                >
                                    <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}} />
                                </button>
                                {
                                    !offering.deleted_at ? 
                                        <button 
                                            className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                            onClick={() => deleteOfferingHandler(offering)}
                                        >
                                            <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                                        </button> :
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5"
                                        onClick={() => restoreOfferingHandler(offering)}>
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

export default OfferingsTable;