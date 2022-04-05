import { useState, useEffect } from "react";
import Link from "next/link";


const ShowMemberDetails = ({ data }) => {
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
        getMemberData(data);
    }, [data]);

    const getMemberData = (data) => {
        if (!data) {
            return;
        }

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
    }

    const fetchAllFamilies = () => {
        fetch('http://localhost:8000/api/v1/families')
            .then(res => res.json())
            .then(data => setFamilies(data))
    };
    
    return (
        data ? <div className="fixed inset-0 bg-gray-500 bg-opacity-70 overflow-y-auto h-full w-full">
            <div className="relative top-10 mx-auto p-5 border 2xl:w-2/4 xl:w-3/4 lg:w-3/4 md:w-4/4 sm:w-4/4 xs:w-2/4 shadow-2xl rounded-2xl bg-white">
            <form disabled>
                    <p className="text-center font-light text-3xl">Member's Details</p>
                    <hr className=" my-3 mx-12"/>
                    <div className="grid grid-cols-2 g-4 text-xl p-4 justify-items-start">
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

                        <div></div>
                       
                        <div className="flex flex-row items-centre justify-end p-2">
                            
                            <Link href='/'>
                                <button className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 ml-40" type="button" >
                                    BACK
                                </button>  
                            </Link>
                        </div>
                    </div>
                </form>
            </div>    
        </div>
        : <div>Loading member data, please wait...</div>
    )
}

export default ShowMemberDetails;

