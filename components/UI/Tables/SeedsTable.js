const SeedsTable = () => {
    return (
        <table className="text-left my-6 w-full mx-auto">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 ">Date</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Member</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Amount</th>
                    <th className="border border-emerald-500 px-4 py-2 text-emerald-600 rounded-lg">Comments</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className=" border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                </tr>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                </tr>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="border-emerald-500 px-3 text-emerald-600 w-9"><input type="checkbox" /></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-2 text-emerald-600"></td>
                </tr>
            </tbody>
        </table>
    );
}

export default SeedsTable;