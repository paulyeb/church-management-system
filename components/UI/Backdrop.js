import { useState } from "react";
import { useEffect } from "react";

const Backdrop = () => {
    const [modalOpen, setModalClosed] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        
        setModalClosed(false);
    }
    
return ( 
    modalOpen && <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <div class="relative top-20 mx-auto p-5 border w-1/3 shadow-lg rounded-md bg-white">
           <form>
               <div className="flex flex-row items-centre justify-around">
                    <div>           
                        <label htmlFor="">Name</label>
                        <input type="text" className="border-2 rounded p-1 mx-2 focus:outline-none"/>
                    </div>
                    <div>           
                        <label htmlFor="">Name</label>
                        <input type="text" className="border-2 rounded p-1 mx-2 focus:outline-none"/>
                    </div>
               </div>
               <div className="flex flex-row items-centre justify-around">
                    <div>           
                        <label htmlFor="">Name</label>
                        <input type="text" className="border-2 rounded p-1 mx-2 focus:outline-none"/>
                    </div>
                    <div>           
                        <label htmlFor="">Name</label>
                        <input type="text" className="border-2 rounded p-1 mx-2 focus:outline-none"/>
                    </div>
                </div>
                <div>
                    <button 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={submitHandler}
                    >
                        Save
                    </button>
               </div>
            </form> 
        </div>    
    </div>
    );
}

export default Backdrop;