import { useRef } from "react";

import Modal from "../Modal";

const NewMemberForm = (props) => {
    const nameInputRef = useRef();
    const familyInputRef = useRef();
    const dateOfBirthInputRef = useRef();
    const telephoneInputRef = useRef();
    const genderInputRef = useRef();
    const emailInputRef = useRef();
    const professionInputRef = useRef();
    const maritalStatusInputRef = useRef();
    const residenceInputRef = useRef();
    const ministryInputRef = useRef();
    const departmentInputRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault()

        const enteredMemberData = {
            id: Math.random().toString(),
            name: nameInputRef.current.value,
            phone: telephoneInputRef.current.value,
            family: familyInputRef.current.value,
            date_Of_Birth: dateOfBirthInputRef.current.value,
            gender: genderInputRef.current.value,
            email: emailInputRef.current.value.toLowerCase(),
            profession: professionInputRef.current.value,
            marital_Staus: maritalStatusInputRef.current.value,
            residence: residenceInputRef.current.value,
            ministry: ministryInputRef.current.value,
            department: departmentInputRef.current.value
        }
    
        props.onAddNewMember(enteredMemberData);
        
        console.log(enteredMemberData);
        
        nameInputRef.current.value = '';
        familyInputRef.current.value = '';
        dateOfBirthInputRef.current.value = '';
        telephoneInputRef.current.value = '';
        genderInputRef.current.value = '';
        emailInputRef.current.value = '';
        professionInputRef.current.value = '';
        maritalStatusInputRef.current.value = '';
        residenceInputRef.current.value = '';
        ministryInputRef.current.value = '';
        departmentInputRef.current.value = '';
     

        props.onClose();
    }

    return (
        <Modal>
            <form onSubmit={submitFormHandler}>
                <p className="text-center text-gray-500 font-light text-3xl">New Member Form</p>
                <hr className=" my-3 mx-12"/>
                <div className="grid grid-cols-2 g-4 text-xl p-4 justify-items-center">
                    <div className="m-2">           
                        <input type="text" className="border-2 rounded w-64 md:w-80 font-light text-xl p-4 focus:outline-none text-gray-500" placeholder="NAME *" ref={nameInputRef}  />
                    </div>

                    <div className="m-2">
                        <select className="border-2 rounded font-light text-xl p-4 focus:outline-none w-64 md:w-80  text-gray-500" ref={familyInputRef}>
                            <option disabled selected hidden>FAMILY</option>    
                            <option className="text-gray-500" value="Hope">Hope</option>    
                            <option className="text-gray-500" value="Love">Love</option>    
                            <option className="text-gray-500" value="Peace">Peace</option>    
                            <option className="text-gray-500" value="Faith">Faith</option>    
                        </select>      
                    </div>
                
                    <div className="m-2">
                        <input type="date" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" ref={dateOfBirthInputRef}/>
                    </div>

                    <div className="m-2">
                        <input type="tel" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="TELEPHONE *" ref={telephoneInputRef}/>
                    </div>
                
                    <div className="m-2">
                        <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" ref={genderInputRef}>
                                <option disabled selected hidden>GENDER</option>    
                                <option className="text-gray-500" value="Male">Male</option>    
                                <option className="text-gray-500" value="Female">Female</option>  
                        </select>  
                    </div>

                    <div className="m-2">
                        <input type="email" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"placeholder="EMAIL" ref={emailInputRef}/>
                    </div>
                
                    <div className="m-2">
                        <input type="text" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="PROFESSION" ref={professionInputRef} />
                    </div>

                    <div className="m-2">
                        <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" ref={maritalStatusInputRef}>
                                <option disabled selected hidden>MARITAL STATUS</option>    
                                <option className="text-gray-500" value="Married">Married</option>    
                                <option className="text-gray-500" value="Single">Single</option>  
                        </select>  
                    </div>
                
                    <div className="m-2">
                        <input type="text" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="RESIDENCE *" ref={residenceInputRef}/>
                    </div>

                    <div className="m-2">
                        <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" ref={ministryInputRef}>
                                <option disabled selected hidden>MINISTRY</option>    
                                <option className="text-gray-500" value="Men">Men</option>    
                                <option className="text-gray-500" value="Women">Women</option>  
                                <option className="text-gray-500" value="Youth">Youth</option>  
                        </select>  
                    </div>
                
                    <div className="m-2">
                        <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" ref={departmentInputRef}>
                                <option disabled selected hidden>DEPARTMENT(S)</option>    
                                <option className="text-gray-500" value="Prayer">Prayer</option>    
                                <option className="text-gray-500" value="Music">Music</option>  
                                <option className="text-gray-500" value="Finance">Finance</option>    
                                <option className="text-gray-500" value="Protocol">Protocol</option>  
                                <option className="text-gray-500" value="Evangelism">Evangelism</option>    
                                <option className="text-gray-500" value="Welfare">Welfare</option>  
                                <option className="text-gray-500" value="Technical">Technical</option> 
                        </select>  
                    </div>

                    <div className="m-2">
                        <input type="text" className="w-64 md:w-80 " />
                    </div>
                </div>
                <div>
                    <div className="flex flex-row items-centre justify-end ">
                        
                        <button className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 mx-2" type="button" onClick={props.onClose}>
                            Cancel
                        </button>  

                        <button className="text-white bg-green-700 hover:bg-xl:w-96 green-80 0 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-xl:w-96 green-80 0 mx-2" type="submit">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

export default NewMemberForm;