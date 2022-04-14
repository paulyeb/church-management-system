import { useState, useEffect } from "react";
import Backdrop from "../Backdrop";


const UpdateMemberModal = ({ member, dismissModal, setSuccess, fetchMembersData }) => {
    const [allFamilies, setFamilies] = useState([]);

    const [nameInput, setNameInput] = useState('');
    const [familyInput, setFamilyInput] = useState('');
    const [dateOfBirthInput, setDateOfBirthInput] = useState('');
    const [telephoneInput, setTelephoneInput] = useState('');
    const [genderInput, setGenderInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [professionInput, setProfessionInput] = useState('');
    const [maritalStatusInput, setMaritalStatusInput] = useState('');
    const [residenceInput, setResidenceInput] = useState('');
    const [ministryInput, setMinistryInput] = useState('');

    useEffect(() => {
        fetchAllFamilies();
    }, []);

    useEffect(() => {
        setExistingMemberData(member);
    }, [member]);

    const setExistingMemberData = (member) => {
        if (!member) {
            return;
        }

        setNameInput(member.name);
        setFamilyInput(member.family_id);
        setDateOfBirthInput(member.date_of_birth);
        setTelephoneInput(member.phone_number);
        setGenderInput(member.gender);
        setEmailInput(member.email);
        setProfessionInput(member.profession);
        setMaritalStatusInput(member.marital_status);
        setResidenceInput(member.residence);
        setMinistryInput(member.ministry);
    }

    const fetchAllFamilies = () => {
        fetch('http://localhost:8000/api/v1/families')
            .then(res => res.json())
            .then(data => setFamilies(data))
            .catch((err) => console.log(err));
    };

    const submitFormHandler = (e) => {
        e.preventDefault();

        const updatedMemberData = {
            name: nameInput,
            phone_number: telephoneInput,
            family_id: familyInput,
            date_of_birth: dateOfBirthInput,
            gender: genderInput,
            email: emailInput.toLowerCase(),
            profession: professionInput,
            marital_status: maritalStatusInput,
            residence: residenceInput,
            ministry: ministryInput,
            // department: departmentInputRef.current.value,
            // role: roleInputRef.current.value
        }
    
        fetch(`http://localhost:8000/api/v1/users/${member.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMemberData),
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            fetchMembersData();
            console.log(data); 
            dismissModal();
            setSuccess(true);
        })
        .catch((err) => console.log(err))
    }
    
    return (
        member ? <Backdrop>

            <form onSubmit={submitFormHandler}>
                    <p className="text-center text-gray-500 font-medium text-3xl">Update Members Details</p>
                    <hr className=" my-3 mx-12"/>
                    <div className="grid grid-cols-2 g-4 text-xl p-4 justify-items-center">
                        <div className="m-2">           
                            <input
                                type="text"
                                className="border-2 rounded w-64 md:w-80 font-medium text-xl p-4 focus:outline-none text-gray-500" 
                                placeholder="NAME *"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                            />
                        </div>

                        <div className="m-2">
                            <select
                                className="border-2 rounded font-medium text-xl p-4 focus:outline-none w-64 md:w-80  text-gray-500"
                                value={familyInput}
                                onChange={e => setFamilyInput(e.target.value)}
                            >
                                <option disabled selected hidden>FAMILY</option>    
                                {
                                    allFamilies.map(family => 
                                        <option 
                                            className="text-gray-500" 
                                            value={family.id} 
                                            key={family.id}
                                        >
                                            {family.name}
                                        </option>
                                    )
                                }
                            </select>      
                        </div>
                    
                        <div className="m-2">
                            <input type="date" 
                                className="border-2 rounded font-medium text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" 
                                value={dateOfBirthInput}
                                onChange={e => setDateOfBirthInput(e.target.value)} 
                            />
                        </div>

                        <div className="m-2">
                            <input type="tel" 
                                className="border-2 rounded font-medium text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="TELEPHONE *" 
                                value={telephoneInput}
                                onChange={e => setTelephoneInput(e.target.value)}
                            />
                        </div>
                    
                        <div className="m-2">
                            <select 
                                className="border-2 rounded font-medium text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" 
                                value={genderInput}
                                onChange={e => setGenderInput(e.target.value)}
                            >
                                    <option disabled selected hidden>GENDER</option>    
                                    <option className="text-gray-500" value="male">Male</option>    
                                    <option className="text-gray-500" value="female">Female</option>  
                            </select>  
                        </div>

                        <div className="m-2">
                            <input 
                                type="email" 
                                className="border-2 rounded font-medium text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"
                                placeholder="EMAIL" 
                                value={emailInput}
                                onChange={e => setEmailInput(e.target.value)}
                            />
                        </div>
                    
                        <div className="m-2">
                            <input type="text" 
                                className="border-2 rounded font-medium text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="PROFESSION" 
                                value={professionInput} 
                                onChange={e => setProfessionInput(e.target.value)}
                                />
                        </div>

                        <div className="m-2">
                            <select 
                                className="border-2 rounded font-medium text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" 
                                value={maritalStatusInput}
                                onChange={e => setMaritalStatusInput(e.target.value)}
                            >
                                    <option disabled selected hidden>MARITAL STATUS</option>    
                                    <option className="text-gray-500" value="Married">Married</option>    
                                    <option className="text-gray-500" value="Single">Single</option>  
                            </select>  
                        </div>
                    
                        <div className="m-2">
                            <input 
                                type="text" 
                                className="border-2 rounded font-medium text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" 
                                placeholder="RESIDENCE *"  
                                value={residenceInput}
                                onChange={e => setResidenceInput(e.target.value)}
                            />
                        </div>

                        <div className="m-2">
                            <select 
                                className="border-2 rounded font-medium text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" 
                                value={ministryInput}
                                onChange={e => setMinistryInput(e.target.value)}
                            >
                                    <option disabled selected hidden>MINISTRY</option>    
                                    <option className="text-gray-500" value="Men">Men</option>    
                                    <option className="text-gray-500" value="Women">Women</option>  
                                    <option className="text-gray-500" value="Youth">Youth</option>  
                            </select>  
                        </div>
                    
                        {/* <div className="m-2">
                            <select className="border-2 rounded font-medium text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" value={departmentInput}>
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
                            <select className="border-2 rounded font-medium text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" value={member.role} ref={roleInputRef}>
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
        : <div>Loading member data, please wait...</div>
    )
}

export default UpdateMemberModal;
