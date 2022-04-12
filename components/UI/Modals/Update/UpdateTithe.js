import { useState, useEffect } from "react";
import Backdrop from "../Backdrop";


const UpdateTithe = ({ tithe, dismissModal, successMessage, fetchTithes }) => {
    const [dateInput, setDateInput] = useState('');
    const [memberInput, setMemberInput] = useState('');
    const [amountInput, setAmountInput] = useState('');
    const [commentsInput, setCommentsInput] = useState('');

    useEffect(() => {
        getExistingTitheRecord(tithe);
    }, [tithe]);

    const getExistingTitheRecord = (tithe) => {
        if (!tithe) {
            return;
        }

        console.log(tithe)

        setDateInput(tithe.date);
        setMemberInput(tithe.user.name);
        setAmountInput(tithe.amount);
        setCommentsInput(tithe.comments);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        const updatedTitheRecord = {
            date: dateInput,
            member: memberInput,
            amount: amountInput,
            comments: commentsInput,
        }

        fetch(`http://localhost:8000/api/v1/tithes/${tithe.id}`,{
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(updatedTitheRecord),
            headers: {
                "Accept": "apllication/json",
                "Content-Type": "apllication/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dismissModal();
                successMessage();
                fetchTithes();

            })
    }
    
    return (
        tithe ? <Backdrop>
            <form onSubmit={submitFormHandler}>
                    <p className="text-center  font-light text-3xl">Update Tithe Record</p>
                    <hr className=" my-3 mx-12"/>
                    <div className="grid grid-cols-2 g-4 text-xl p-4 justify-items-center">
                        <div className="m-2">  
                            <div>
                                <label>Date</label>         
                            </div>
                            <input
                                type="date"
                                className="border-2 rounded w-64 md:w-80 font-light text-xl p-4 focus:outline-none text-gray-500" 
                                placeholder="DATE *"
                                value={dateInput}
                                onChange={(e) => setDateInput(e.target.value)}
                            />
                        </div>

                        <div className="m-2">
                            <div>
                                <label>Member</label>         
                            </div>
                            <input type="text" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"
                                value={memberInput}
                                onChange={e => setMemberInput(e.target.value)}
                            />
                        </div>
                    
                        <div className="m-2">
                            <div>
                                <label>Amount</label>         
                            </div>
                            <input type="number" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" 
                                value={amountInput}
                                onChange={e => setAmountInput(e.target.value)} 
                            />
                        </div>
                    
                        <div className="m-2">
                            <div>
                                <label>Comments</label>         
                            </div>
                            <input 
                                type="text" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"
                                value={commentsInput}
                                onChange={e => setCommentsInput(e.target.value)}
                            />
                        </div>
                        <div>

                        </div>

                        <div className="flex flex-row items-centre justify-end mt-4">
                            <button 
                                className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 mx-2" 
                                type="button"
                                onClick={dismissModal} 
                            >
                                Cancel
                            </button>  
                            <button 
                                className="text-white bg-green-700 hover:bg-xl:w-96 green-80 0 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-xl:w-96 green-80 0 mx-2" 
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </Backdrop>
        : <div>Loading member tithe, please wait...</div>
    )
}

export default UpdateTithe;
