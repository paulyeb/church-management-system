import { useState, useEffect } from "react";

const ShowMemberModal = ({ member, dismissModal }) => {
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
        fetchMemberData(member);
    }, [member]);

    const fetchMemberData = (member) => {
        if (!member || member.deleted_at) {
            return;
        }
        fetch(`http://localhost:8000/api/v1/users/${member.id}`)
        .then(res => res.json())
        .then(data => {
            setNameInput(data.name);
            setFamilyInput(data.family.name);
            setDateOfBirthInput(data.date_of_birth);
            setTelephoneInput(data.phone_number);
            setGenderInput(data.gender);
            setEmailInput(data.email);
            setProfessionInput(data.profession);
            setMaritalStatusInput(data.marital_status);
            setResidenceInput(data.residence);
            setMinistryInput(data.ministry);
        })
        .catch((err) => console.log(err));
    }
    
    return (
        member ? <div className="fixed inset-0 bg-gray-500 bg-opacity-70 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border 2xl:w-2/4 xl:w-3/4 lg:w-3/4 md:w-4/4 sm:w-4/4 xs:w-2/4 shadow-2xl rounded-2xl bg-white">
                <form disabled>
                    <p className="text-center font-medium text-3xl">Members Details</p>
                    <hr className=" my-3 mx-12"/>
                    <div className="grid grid-cols-2 g-4 text-xl p-4  font-medium justify-items-start">
                        <div className="m-2 p-2">           
                            {`Name: ${nameInput}`}
                        </div>

                        <div className="m-2 p-2">           
                            {`Family: ${familyInput}`}
                        </div>

                        <div className="m-2 p-2">           
                            {`Date Of Birth: ${dateOfBirthInput}`}
                        </div>

                        <div className="m-2 p-2">           
                            {`Phone Number: ${telephoneInput}`}
                        </div>

                        <div className="m-2 p-2">           
                            {`Gender: ${genderInput}`}
                        </div>

                        <div className="m-2 p-2">           
                            {`Email: ${emailInput}`}
                        </div>

                        <div className="m-2 p-2">           
                            {`Profession: ${professionInput}`}
                        </div>

                        <div className="m-2 p-2">           
                            {`Marital Status: ${maritalStatusInput}`}
                        </div>

                        <div className="m-2 p-2">           
                            {`Residence: ${residenceInput}`}
                        </div>

                        <div className="m-2 p-2">           
                            {`Ministry: ${ministryInput}`}
                        </div>
                    </div>
                       
                    <div className="flex flex-row items-centre justify-end mr-10 p-2">
                        <button 
                            className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 ml-40" type="button" onClick={dismissModal}
                        >
                            EXIT
                        </button>
                    </div>
                    
                </form>
            </div>    
        </div>
        : <div>Loading member details, please wait...</div>
    )
}

export default ShowMemberModal;

