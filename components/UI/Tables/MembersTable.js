import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPen, faRefresh } from "@fortawesome/free-solid-svg-icons";

const MembersTable = ({memberDetails, showMember, editMember, deleteMember, restoreMember, actionCallback}) => {

    const showMemberHandler = (member) => {
        actionCallback(member);
        !member.deleted_at && showMember();
    };
    const editMemberHandler = (member) => {
        actionCallback(member);
        !member.deleted_at && editMember();
    };

    const deleteMemberHandler = (member) => {
        actionCallback(member);
        !member.deleted_at && deleteMember();
    };
    const restoreMemberHandler = (member) => {
        actionCallback(member);
        restoreMember();
    };

    return ( 
        <>
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
                { 
                    memberDetails.map( member => 
                        <tr className="hover:bg-gray-100 border border-emerald-500" key = {member.id}>          
                            <td className="px-4 py-2 text-emerald-600">{member.name}</td>
                            <td className="px-4 py-2 text-emerald-600">{member.phone_number}</td>
                            <td className="px-4 py-2 text-emerald-600">{member.family?.name}</td>
                            <td className="px-4 py-2 text-emerald-600">
                                <div className="flex flex-row items-centre justify-start">
                                    <button 
                                        className="p-3 hover:bg-gray-300 hover:border-2 rounded-full"
                                        onClick={() => showMemberHandler(member)}>
                                        <FontAwesomeIcon icon = {faEye} style={{width: '20px', color: 'black'}}/>
                                    </button>
                                    <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                        onClick={() => editMemberHandler(member)}
                                    >
                                        <FontAwesomeIcon icon = {faPen} style={{width: '20px', color: 'black'}} />
                                    </button>
                                    {
                                        !member.deleted_at ? 
                                            <button 
                                                className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5" 
                                                onClick={() => deleteMemberHandler(member)}
                                            >
                                                <FontAwesomeIcon icon = {faTrashCan} style={{width: '20px', color: 'black'}}/>
                                            </button> :
                                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5"
                                            onClick={() => restoreMemberHandler(member)}>
                                            <FontAwesomeIcon icon = {faRefresh} style={{width: '20px', color: 'black'}}/>
                                        </button>
                                    }
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
        </>
    );
}

export default MembersTable;