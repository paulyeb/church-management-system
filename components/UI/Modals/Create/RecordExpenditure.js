import { useRef } from "react";

const RecordExpense = ({ close, onAddExpenditure}) => {
    const dateInputRef = useRef();
    const typeInputRef = useRef();
    const amountInputRef = useRef();
    const commentsInputRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault();

        const expenditureData = {
            date: dateInputRef.current.value,
            type: typeInputRef.current.value,
            amount: amountInputRef.current.value,
            comments: commentsInputRef.current.value,
        }

        onAddExpenditure(expenditureData);

        close();
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-70 overflow-y-auto h-full w-full">
            <div className="relative top-40 mx-auto p-5 border 2xl:w-2/5 xl:w-2/4 lg:w-2/4 md:w-3/4 sm:w-3/4  shadow-2xl rounded-2xl bg-white">
                <div>
                    <p className="text-center text-gray-500 font-light text-3xl">Record Expense</p>
                        <hr className=" mb-5 mt-2 mx-12"/>

                    <form onSubmit={submitFormHandler}>
                        <div className="m-4 text-center">
                            <input type="date" className="border-2 rounded font-light text-xl p-4 w-96  focus:outline-none text-gray-500" ref={dateInputRef} />
                        </div>
                        <div className="m-4 text-center">
                            <select className="border-2 rounded font-light text-xl p-4 focus:outline-none w-96 text-gray-500" ref={typeInputRef}>
                                <option value="family" disabled selected hidden>EXPENSE TYPE</option> 
                                <option value="General Expense">General Expense</option> 
                                <option value="Technical Expense">Technical Expense</option> 
                                <option value="Transportational Expense">Transportational Expense</option> 
                                <option value="Educational Expense">Educational Expense</option> 
                                <option value="Welfare Support">Welfare Support</option> 
                                <option value="Honararium">Honararium</option> 
                            </select>
                        </div>
                        <div className="m-4 text-center">
                            <input type="number" className="border-2 rounded font-light text-xl p-4 w-96  focus:outline-none text-gray-500" ref={amountInputRef} placeholder="AMOUNT" />
                        </div>
                        <div className="m-4 text-center">
                            <input type="text" className="border-2 rounded font-light text-xl p-4 w-96  focus:outline-none text-gray-500" ref={commentsInputRef} placeholder="COMMENTS" />
                        </div>

                        <div className="flex flex-row items-centre justify-end ">
                                    
                            <button className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 mx-2" onClick={close}>Cancel
                            </button>  

                            <button className="text-white bg-green-700 hover:bg-xl:w-96 green-80 0 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-xl:w-96 green-80 0 mx-2" type="submit">Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default RecordExpense;