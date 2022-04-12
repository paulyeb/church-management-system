import { useState, useEffect } from "react";
import Backdrop from "../Backdrop";

const UpdateVisitor = ({ visitor, dismissModal, successMessage, fetchVisitors }) => {
    const [dateInput, setDateInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [purposeInput, setPurposeInput] = useState('');
    const [commentsInput, setCommentsInput] = useState('');

    useEffect(() => {
        getExistingVisitorData(visitor);
    }, [visitor]);

    const getExistingVisitorData = (visitor) => {
        if (!visitor) {
            return;
        }

        console.log(visitor)

        setDateInput(visitor.date);
        setNameInput(visitor.name);
        setPhoneInput(visitor.phone_number);
        setPurposeInput(visitor.purpose_of_visit);
        setCommentsInput(visitor.comments);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        const updatedVisitorRecord = {
            date: dateInput,
            name: nameInput,
            phone_number: phoneInput,
            purpose_of_visit: purposeInput,
            comments: commentsInput,
        }
    
        fetch(`http://localhost:8000/api/v1/visitors/${visitor.id}`, {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(updatedVisitorRecord),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dismissModal();
                successMessage();
                fetchVisitors();
            })
    }
    
    return (
        visitor ? <Backdrop>
            <form onSubmit={submitFormHandler}>
                    <p className="text-center  font-light text-3xl">Update Visitor Record</p>
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
                                <label>Name</label>         
                            </div>
                            <input type="text" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" 
                                value={nameInput}
                                onChange={e => setNameInput(e.target.value)} 
                            />
                        </div>

                        <div className="m-2">
                            <div>
                                <label>Phone Number</label>         
                            </div>
                            <input type="tel" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"
                                value={phoneInput}
                                onChange={e => setPhoneInput(e.target.value)}
                            />
                        </div>

                        <div className="m-2">
                            <div>
                                <label>Pupose of Visit</label>         
                            </div>
                            <input 
                                type="text" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"
                                value={purposeInput}
                                onChange={e => setPurposeInput(e.target.value)}
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

                        <div>
                            
                        </div>
                        <div className="flex flex-row items-centre justify-end ">
                            <button 
                                className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 mx-2" 
                                type="button" 
                                onClick={dismissModal}
                            >
                                Cancel
                            </button>  
                            <button className="text-white bg-green-700 hover:bg-xl:w-96 green-80 0 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-xl:w-96 green-80 0 mx-2" type="submit">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </Backdrop>
        : <div>Loading visitor data, please wait...</div>
    )
}

export default UpdateVisitor;
