import Modal from "../Modal";

const NewMemberForm = (props) => {
    return (
        <Modal>
            <form>
                <p className="text-center text-gray-500 font-light text-3xl">New Member Form</p>
                <hr className=" my-3 mx-8"/>
                <div className="grid grid-cols-2 g-4 text-xl p-4 justify-items-center">
                    <div className="m-2">           
                        <input type="text" className="border-2 rounded w-64 md:w-80 font-light text-xl p-4 focus:outline-none text-gray-500" placeholder="NAME"/>
                    </div>

                    <div className="m-2">
                        <select className="border-2 rounded font-light text-xl p-4 focus:outline-none w-64 md:w-80  text-gray-500">
                            <option value="family" disabled selected hidden>FAMILY</option>    
                            <option className="text-gray-500" value="hope">HOPE</option>    
                            <option className="text-gray-500" value="love">LOVE</option>    
                            <option className="text-gray-500" value="peace">PEACE</option>    
                            <option className="text-gray-500" value="faith">FAITH</option>    
                        </select>      
                    </div>
                
                    <div className="m-2">
                        <input type="date" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"/>
                    </div>

                    <div className="m-2">
                        <input type="tel" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="TELEPHONE"/>
                    </div>
                
                    <div className="m-2">
                        <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500">
                                <option value="family" disabled selected hidden>GENDER</option>    
                                <option className="text-gray-500" value="male">MALE</option>    
                                <option className="text-gray-500" value="female">FEMALE</option>  
                        </select>  
                    </div>

                    <div className="m-2">
                        <input type="email" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"placeholder="EMAIL"/>
                    </div>
                
                    <div className="m-2">
                        <input type="text" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="PROFESSION" />
                    </div>

                    <div className="m-2">
                        <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500">
                                <option value="" disabled selected hidden>MARITAL STATUS</option>    
                                <option className="text-gray-500" value="married">MARRIED</option>    
                                <option className="text-gray-500" value="single">SINGLE</option>  
                        </select>  
                    </div>
                
                    <div className="m-2">
                        <input type="text" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="RESIDENCE"/>
                    </div>

                    <div className="m-2">
                        <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500">
                                <option value="" disabled selected hidden>MINISTRY</option>    
                                <option className="text-gray-500" value="men">MEN</option>    
                                <option className="text-gray-500" value="women">WOMEN</option>  
                                <option className="text-gray-500" value="youth">YOUTH</option>  
                        </select>  
                    </div>
                
                    <div className="m-2">
                        <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500">
                                <option value="department" disabled selected hidden>DEPARTMENT(S)</option>    
                                <option className="text-gray-500" value="prayer">PRAYER</option>    
                                <option className="text-gray-500" value="music">MUSIC</option>  
                                <option className="text-gray-500" value="finance">FINANCE</option>    
                                <option className="text-gray-500" value="protocol">PROTOCOL</option>  
                                <option className="text-gray-500" value="evangelism">EVANGELISM</option>    
                                <option className="text-gray-500" value="welfare">WELFARE</option>  
                                <option className="text-gray-500" value="technial">TECHNICAL</option> 
                        </select>  
                    </div>

                    <div className="m-2">
                        <input type="text" className="w-64 md:w-80 " />
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-centre justify-end ">
                        
                        <button className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 mx-2" onClick={props.close}>Cancel
                        </button>  

                        <button className="text-white bg-green-700 hover:bg-xl:w-96 green-80 0 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-xl:w-96 green-80 0 mx-2" onClick={props.close}>Save
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default NewMemberForm;