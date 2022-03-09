const VisitorsTable = () => {
    return (
        <table className="text-left my-6 w-full mx-auto">
            <thead>
                <tr>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 ">Date</th>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Name</th>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Phone</th>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Purpose of Visit</th>
                    <th className="border border-emerald-500 px-4 py-4 text-emerald-600 rounded-lg">Comments</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                </tr>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                </tr>
                <tr className="hover:bg-gray-100 border border-emerald-500">
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                    <td className="border border-emerald-500 px-4 py-4 text-emerald-600"></td>
                </tr>
            </tbody>
        </table>
    );
}

export default VisitorsTable;