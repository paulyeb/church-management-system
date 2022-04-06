import { useState, useEffect } from "react";
import Link from "next/link";


const ShowFamily = ({ data }) => {
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
        getMemberData(data);
    }, [data]);

    const getMemberData = (data) => {
        if (!data) {
            return;
        }

        setNameInput(data.name.toUpperCase());
        // setFamilyInput(data.family.name);
        // setDateOfBirthInput(data.date_of_birth);
        // setTelephoneInput(data.phone_number);
        // setGenderInput(data.gender);
        // setEmailInput(data.email);
        // setProfessionInput(data.profession);
        // setMaritalStatusInput(data.marital_status);
        // setResidenceInput(data.residence);
        // setMinistryInput(data.ministry);
    }
    
    return (
        data ? <div className="fixed inset-0 bg-gray-500 bg-opacity-70 overflow-y-auto h-full w-full">
            <div className="relative top-10 mx-auto p-5 border 2xl:w-2/4 xl:w-3/4 lg:w-3/4 md:w-4/4 sm:w-4/4 xs:w-2/4 shadow-2xl rounded-2xl bg-white">
            <form disabled>
                    <p className="text-center text-gray-800 font-medium text-2xl">{`FAMILY NAME: ${nameInput}`}</p>
                        <div className="ml-16 font-medium text-1xl">
                            TOTAL MEMBERS: {data.user.length}
                        </div>
                    <hr className=" my-2 mx-12"/>
                    <div className="text-xl p-4 justify-items-start">
                        <div className="ml-11 font-medium text-1xl">
                            MEMBERS:
                        </div>
                        {
                            data.user.length === 0 
                                ? 
                                <div className="text-yellow-700 ml-11">
                                    THIS FAMILY HAS NO MEMBERS
                                </div> 
                                : 
                            data.user.map((user) => 
                                <div className="ml-11 my-1" key={user.id}>           
                                    {` ${user.name}`}
                                </div> 
                            )
                        }

                        <div className="flex flex-row items-centre justify-end p-2">  
                            <Link href='/families'>
                                <button className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 ml-40" type="button" >
                                    EXIT
                                </button>  
                            </Link>
                        </div>
                    </div>
                </form>
            </div>    
        </div>
        : <div>Loading FAMILY data, please wait...</div>
    )
}

export default ShowFamily;

