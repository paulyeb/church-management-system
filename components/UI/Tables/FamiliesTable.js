import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faRefresh } from "@fortawesome/free-solid-svg-icons";

const FamiliesTable = ({ families, showFamily, editFamily, deleteFamily, restoreFamily, actionCallback }) => {
    const showFamilyHandler = (family) => {
        actionCallback(family);
        !family.deleted_at && showFamily();
    };
    const editFamilyHandler = (family) => {
        actionCallback(family);
        !family.deleted_at && editFamily();
    };

    const deleteFamilyHandler = (family) => {
        actionCallback(family);
        !family.deleted_at && deleteFamily();
    };
    const restoreFamilyHandler = (family) => {
        actionCallback(family);
        restoreFamily();
    };

    return (
        <table className="text-left my-6 w-full mx-auto">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg w-10">Name</th>
                    <th className="border border-emerald-500 px-7 py-2 text-emerald-600 rounded-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                {families.map( family => 
                <tr className="hover:bg-gray-100 border border-emerald-500" key={family.id}>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600 w-32">{family.name}</td>
                    <td className="px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                            <button 
                                className="p-3 hover:bg-gray-300 hover:border-2 rounded-full"
                                onClick={() => showFamilyHandler(family)}>
                                <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/>
                            </button>
                            <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                onClick={() => editFamilyHandler(family)}
                            >
                                <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}} />
                            </button>
                            {
                                !family.deleted_at ? 
                                    <button 
                                        className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                        onClick={() => deleteFamilyHandler(family)}
                                    >
                                        <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                                    </button> :
                                <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5"
                                    onClick={() => restoreFamilyHandler(family)}>
                                    <FontAwesomeIcon icon = {faRefresh} style={{width: '20px', color: 'black'}}/>
                                </button>
                            }
                        </div>
                    </td>
                </tr>)}
            </tbody>
        </table>
    );
}

export default FamiliesTable;