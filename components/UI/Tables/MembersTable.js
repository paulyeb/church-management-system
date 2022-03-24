import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen } from "@fortawesome/free-solid-svg-icons";

const MembersTable = (props) => {

    const actions = [
        <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/>,
        <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}}/>,
        <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
    ];

    return ( 
        <table className="text-left my-6 w-full mx-auto">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 ">Name</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Phone</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Family</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.memberDetails.map( member => 
                        <tr className="hover:bg-gray-100 border border-emerald-500" key = {member.id}>          
                            <td className="px-4 py-2 text-emerald-600">{member.name}</td>
                            <td className="px-4 py-2 text-emerald-600">{member.phone_number}</td>
                            <td className="px-4 py-2 text-emerald-600">{member.family?.name}</td>
                            <td className="px-4 py-2 text-emerald-600">
                                <div className="flex flex-row items-centre justify-start">
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">{actions[0]}</button>
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{actions[1]}</button>
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{actions[2]}</button>
                                </div>
                            </td>
                        </tr>     
                        )
                    }
                <tr className="border border-emerald-500">
                    <td className="px-4 py-7 text-emerald-600"></td>
                </tr>
            </tbody>
        </table>
    );
}

export default MembersTable;