import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";

const FamiliesTable = (props) => {

    return (
        <table className="text-left my-6 w-full mx-auto">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg w-10">Name</th>
                    <th className="border border-emerald-500 px-7 py-2 text-emerald-600 rounded-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.families.map( family => 
                <tr className="hover:bg-gray-100 border border-emerald-500" key={family.id}>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600 w-32">{family.name}</td>
                    <td className="px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                            <Link href={`show/family/${family.id}`}>
                                <a>     
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">
                                        <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/>
                                    </button>
                                </a>
                            </Link>
                            <Link href={`edit/family/${family.id}`}> 
                                <a>
                                <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">
                                    <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}} />
                                </button>
                                </a>
                            </Link> 
                            {!family.deleted_at ? <Link href={`delete/family/${family.id}`}>
                                <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">
                                    <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                                </button>
                            </Link> :
                            <Link href={`restore/family/${family.id}`}>
                                <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">
                                    <FontAwesomeIcon icon = {faTrashRestoreAlt} style={{width: '20px', color: 'black'}}/>
                                </button>
                            </Link>}
                        </div>
                    </td>
                </tr>)}
            </tbody>
        </table>
    );
}

export default FamiliesTable;