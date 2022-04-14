import { useRef, useEffect, useState } from "react";

const NewMemberForm = (props) => {
    const [allFamilies, setFamilies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/families')
        .then(res => res.json())
        .then(data => setFamilies(data))
        .catch((err) => console.log(err))
    }, [])


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
    // const departmentInputRef = useRef();
    // const roleInputRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault();

        const enteredMemberData = {
            name: nameInputRef.current.value,
            phone_number: telephoneInputRef.current.value,
            family_id: familyInputRef.current.value,
            date_of_birth: dateOfBirthInputRef.current.value,
            gender: genderInputRef.current.value,
            email: emailInputRef.current.value.toLowerCase(),
            profession: professionInputRef.current.value,
            marital_status: maritalStatusInputRef.current.value,
            residence: residenceInputRef.current.value,
            ministry: ministryInputRef.current.value,
            // department: departmentInputRef.current.value,
            // role: roleInputRef.current.value
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
        // departmentInputRef.current.value = '';
        // roleInputRef.current.value = '';
     

        props.onClose();
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-70 overflow-y-auto h-full w-full">
            <div className="relative top-10 mx-auto p-5 border 2xl:w-2/4 xl:w-3/4 lg:w-3/4 md:w-4/4 sm:w-4/4 xs:w-2/4 shadow-2xl rounded-2xl bg-white">
                <form method="post" action="http://localhost::8000/api/v1/" onSubmit={submitFormHandler}>
                    <p className="text-center text-gray-500 font-light text-3xl">New Member Form</p>
                    <hr className=" my-3 mx-12"/>
                    <div className="grid grid-cols-2 g-4 text-xl p-4 justify-items-center">
                        <div className="m-2">           
                            <input type="text" className="border-2 rounded w-64 md:w-80 font-light text-xl p-4 focus:outline-none text-gray-500" placeholder="NAME *" ref={nameInputRef} required  />
                        </div>

                        <div className="m-2">
                            <select className="border-2 rounded font-light text-xl p-4 focus:outline-none w-64 md:w-80  text-gray-500" ref={familyInputRef} required >
                                <option disabled selected hidden>FAMILY</option>    
                                {/* <option className="text-gray-500" value="Hope">Hope</option>    
                                <option className="text-gray-500" value="Love">Love</option>    
                                <option className="text-gray-500" value="Peace">Peace</option>    
                                <option className="text-gray-500" value="Faith">Faith</option>     */}
                                {
                                    allFamilies.map(family => 
                                    <option 
                                        className="text-gray-500" 
                                        value={family.id} 
                                        key={family.id}
                                    >
                                        {family.name}
                                    </option>)
                                }
                            </select>      
                        </div>
                    
                        <div className="m-2">
                            <input type="date" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" ref={dateOfBirthInputRef} required />
                        </div>

                        <div className="m-2">
                            <input type="tel" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="TELEPHONE *" ref={telephoneInputRef} required />
                        </div>
                    
                        <div className="m-2">
                            <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" ref={genderInputRef} required >
                                    <option disabled selected hidden>GENDER</option>    
                                    <option className="text-gray-500" value="Male">Male</option>    
                                    <option className="text-gray-500" value="Female">Female</option>  
                            </select>  
                        </div>

                        <div className="m-2">
                            <input type="email" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"placeholder="EMAIL" ref={emailInputRef} required />
                        </div>
                    
                        <div className="m-2">
                            <input type="text" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="PROFESSION" ref={professionInputRef} required />
                        </div>

                        <div className="m-2">
                            <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" ref={maritalStatusInputRef} required>
                                    <option disabled selected hidden>MARITAL STATUS</option>    
                                    <option className="text-gray-500" value="Married">Married</option>    
                                    <option className="text-gray-500" value="Single">Single</option>  
                            </select>  
                        </div>
                    
                        <div className="m-2">
                            <input type="text" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="RESIDENCE *" ref={residenceInputRef} required />
                        </div>

                        <div className="m-2">
                            <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" ref={ministryInputRef} required >
                                    <option disabled selected hidden>MINISTRY</option>    
                                    <option className="text-gray-500" value="Men">Men</option>    
                                    <option className="text-gray-500" value="Women">Women</option>  
                                    <option className="text-gray-500" value="Youth">Youth</option>  
                            </select>  
                        </div>
                    
                        {/* <div className="m-2">
                            <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" ref={departmentInputRef} required >
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
                            <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" ref={roleInputRef} required >
                                    <option disabled selected hidden>ROLE(S)</option>    
                                    <option className="text-gray-500" value="Prayer">Prayer Team Leader</option>    
                                    <option className="text-gray-500" value="Music Director">Music Director</option>  
                                    <option className="text-gray-500" value="Finance Secretary">Financial Secretary</option>    
                                    <option className="text-gray-500" value="Head of Protocol">Head of Protocol</option>  
                                    <option className="text-gray-500" value="Evangelism Coordinator">Evangelism Coordinator</option>    
                                    <option className="text-gray-500" value="Bible Studies">Bibles Studies Coordinator</option>    
                                    <option className="text-gray-500" value="Welfare Head">Welfare Head</option>  
                                    <option className="text-gray-500" value="Technical Head">Technical Head</option> 
                                    <option className="text-gray-500" value="Family Head">Family Head</option> 
                            </select>  
                        </div> */}
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
            </div>    
        </div>
    )
}

export default NewMemberForm;

// data: {
//     family: {
//         id: 1
//         name: Love,
//     }
// }