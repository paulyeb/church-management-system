const RestoreRecord = ({ fetchModelData, record, modelName, dismissRestoreModal, successMessage }) => {
    const restoreRecordById = () => {
        fetch(`http://localhost:8000/api/v1/${modelName}/${record.id}/restore`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                dismissRestoreModal();
                successMessage();
                fetchModelData();
            });
    }
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-20 overflow-y-auto h-full w-full">
            <div className="relative top-40 mx-auto font-medium p-5 text-center border 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-4/4 sm:w-1/4 xs:w-1/4 shadow-2xl rounded-2xl bg-white">
                <div className="m-2">
                    <div className=" text-gray-600 text-xl m-2 font-medium">
                        <u>RESTORE</u>
                    </div>
                    ARE YOU SURE YOU WANT TO RESTORE THIS RECORD {record.name ? `: ${record.name}` : null}? 
                </div>
                <div>
                    <button 
                        className="text-white m-2 bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" 
                        onClick={restoreRecordById}
                    >
                        YES
                    </button>
                    <button 
                        className="text-white m-2 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
                        onClick={dismissRestoreModal}
                    >
                        NO
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RestoreRecord;