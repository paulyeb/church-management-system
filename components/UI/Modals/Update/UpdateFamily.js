import { useState, useEffect } from "react";
import Backdrop from "../Backdrop";

const UpdateFamilyModal = ({ family, dismissModal, successMessage, fetchFamilies }) => {
    const [nameInput, setNameInput] = useState('');

    useEffect(() => {
        setExistingFamilyName(family);
    }, [family]);

    const setExistingFamilyName = (family) => {
        if (!family) {
            return;
        }

        setNameInput(family.name);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
        
        const updatedFamilyName = {
            name: nameInput
        }

        fetch(`http://localhost:8000/api/v1/families/${family.id}`, {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(updatedFamilyName),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data), 
                fetchFamilies(),
                dismissModal(), 
                successMessage() 
            })
            .catch((err) => console.log(err));

    }
    
    return (
        family ? <Backdrop>
            <form onSubmit={submitFormHandler}>
                    <p className="text-center text-gray-500 font-light text-3xl">Update Family Name</p>
                    <hr className=" my-3 mx-12"/>
                    <div className="grid grid-cols-2 g-4 text-xl p-4 justify-items-center">
                        <div className="m-2">
                            <div>
                                <label>NAME</label>     
                            </div>      
                            <input
                                type="text"
                                className="border-2 rounded w-64 md:w-80 font-light text-xl p-4 focus:outline-none text-gray-500" 
                                placeholder="NAME *"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                            />
                        </div>
                    </div>
                        
                    <div>
                        <div className="flex flex-row items-centre justify-end ">
                            <button className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 mx-2" type="button" onClick={dismissModal}>
                                Cancel
                            </button> 
                            <button className="text-white bg-green-700 hover:bg-xl:w-96 green-80 0 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-xl:w-96 green-80 0 mx-2" type="submit">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </Backdrop>
        : <div>Loading family data, please wait...</div>
    )
}

export default UpdateFamilyModal;
