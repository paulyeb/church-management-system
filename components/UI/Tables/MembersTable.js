const MembersTable = (props) => {
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
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="px-4 py-2 text-emerald-600">{props.churchMembers[0].name}</td>
                    <td className="px-4 py-2 text-emerald-600">{props.churchMembers[0].phone}</td>
                    <td className="px-4 py-2 text-emerald-600">{props.churchMembers[0].family}</td>
                    <td className="px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">{props.churchMembers[0].actions[0]}</button>
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{props.churchMembers[0].actions[1]}</button>
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{props.churchMembers[0].actions[2]}</button>
                        </div>
                    </td>
                </tr>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="px-4 py-2 text-emerald-600"> {props.churchMembers[1].name}</td>
                    <td className="px-4 py-2 text-emerald-600"> {props.churchMembers[1].phone}</td>
                    <td className="px-4 py-2 text-emerald-600"> {props.churchMembers[1].family}</td>
                    <td className="px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">{props.churchMembers[1].actions[0]}</button>
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{props.churchMembers[1].actions[1]}</button>
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{props.churchMembers[1].actions[2]}</button>
                        </div>
                    </td>
                </tr>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="px-4 py-2 text-emerald-600">{props.churchMembers[2].name}</td>
                    <td className="px-4 py-2 text-emerald-600">{props.churchMembers[2].phone}</td>
                    <td className="px-4 py-2 text-emerald-600">{props.churchMembers[2].family}</td>
                    <td className="px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">{props.churchMembers[2].actions[0]}</button>
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{props.churchMembers[2].actions[1]}</button>
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{props.churchMembers[2].actions[2]}</button>
                        </div>
                    </td>
                </tr>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="px-4 py-2 text-emerald-600">{props.churchMembers[3].name}</td>
                    <td className="px-4 py-2 text-emerald-600">{props.churchMembers[3].phone}</td>
                    <td className="px-4 py-2 text-emerald-600">{props.churchMembers[3].family}</td>
                    <td className="px-4 py-2 text-emerald-600">
                        <div className="flex flex-row items-centre justify-start">
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full">{props.churchMembers[3].actions[0]}</button>
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{props.churchMembers[3].actions[1]}</button>
                        <button className="p-3 hover:bg-gray-300 hover:border-2 rounded-full ml-5">{props.churchMembers[3].actions[2]}</button>
                        </div>
                    </td>
                </tr>
                <tr className="border border-emerald-500">
                    <td className="px-4 py-7 text-emerald-600"></td>
                </tr>
            </tbody>
        </table>
    );
}

export default MembersTable;