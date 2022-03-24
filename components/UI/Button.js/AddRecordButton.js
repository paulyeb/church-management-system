const AddRecordButton = (props) => {
    return (
        <button 
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default AddRecordButton;