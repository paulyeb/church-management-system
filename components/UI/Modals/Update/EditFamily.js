import { useState, useEffect } from "react";
import Link from "next/link";


const EditFamilyForm = ({ data, onUpdateFamilyName }) => {
    const [nameInput, setNameInput] = useState('');

    useEffect(() => {
        setExistingFamilyName(data);
    }, [data]);

    const setExistingFamilyName = (data) => {
        if (!data) {
            return;
        }

        setNameInput(data.name);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        const updatedFamilyName = {
            name: nameInput
        }
    
        onUpdateFamilyName(updatedFamilyName);

    }
    
    return (
        data ? <div className="fixed inset-0 bg-gray-500 bg-opacity-70 overflow-y-auto h-full w-full">
            <div className="relative top-10 text-gray-500 mx-auto p-5 border 2xl:w-2/4 xl:w-3/4 lg:w-3/4 md:w-4/4 sm:w-4/4 xs:w-2/4 shadow-2xl rounded-2xl bg-white">
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
                            
                            <Link href='/families'>
                                <button className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 mx-2" type="button" >
                                    Cancel
                                </button>  
                            </Link>

                            <button className="text-white bg-green-700 hover:bg-xl:w-96 green-80 0 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-xl:w-96 green-80 0 mx-2" type="submit">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>    
        </div>
        : <div>Loading family data, please wait...</div>
    )
}

export default EditFamilyForm;






































































// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// const EditMember = () => {
//     const [data, setData] = useState([]);
//     const router = useRouter();
//     const [allFamilies, setFamilies] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:8000/api/v1/families')
//         .then(res => res.json())
//         .then(data => setFamilies(data))
//     }, [])

//     const routerQuery = router.query.editMemberId;

//     useEffect(() => {
//         fetchdata();
//     }, [])

//     const fetchdata = () => {
//         fetch('http://localhost:8000/api/v1/users'+{routerQuery}+'show')
//         .then(res => res.json())
//         .then(data => setData(data));
//     }

//     return (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-70 overflow-y-auto h-full w-full">
//             <div className="relative top-10 mx-auto p-5 border 2xl:w-2/4 xl:w-3/4 lg:w-3/4 md:w-4/4 sm:w-4/4 xs:w-2/4 shadow-2xl rounded-2xl bg-white">
//                 <form method="post" action="http://localhost::8000/api/v1/" /*onSubmit={submitFormHandler}*/ >
//                     <p className="text-center text-gray-500 font-light text-3xl">New Member Form</p>
//                     <hr className=" my-3 mx-12"/>
//                     <div className="grid grid-cols-2 g-4 text-xl p-4 justify-items-center">
//                         <div className="m-2">           
//                             <input type="text" className="border-2 rounded w-64 md:w-80 font-light text-xl p-4 focus:outline-none text-gray-500" placeholder="NAME *" value={data.name}  />
//                         </div>

//                         <div className="m-2">
//                             <select className="border-2 rounded font-light text-xl p-4 focus:outline-none w-64 md:w-80  text-gray-500" value={data.family}>
//                                 <option disabled selected hidden>FAMILY</option>    
//                                 {/* <option className="text-gray-500" value="Hope">Hope</option>    
//                                 <option className="text-gray-500" value="Love">Love</option>    
//                                 <option className="text-gray-500" value="Peace">Peace</option>    
//                             <option className="text-gray-500" value="Faith">Faith</option>     */}
//                                 {
//                                     allFamilies.map(family => 
//                                         <option 
//                                         className="text-gray-500" 
//                                         value={data.family_id} 
//                                         key={family.id}
//                                     >
//                                         {family.name}
//                                     </option>)
//                                 }
//                             </select>      
//                         </div>
                    
//                         <div className="m-2">
//                             <input type="date" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" value={data.date_of_Birth}/>
//                         </div>

//                         <div className="m-2">
//                             <input type="tel" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="TELEPHONE *" value={data.phone_number}/>
//                         </div>
                    
//                         <div className="m-2">
//                             <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" value={data.gender}>
//                                     <option disabled selected hidden>GENDER</option>    
//                                     <option className="text-gray-500" value="male">Male</option>    
//                                     <option className="text-gray-500" value="female">Female</option>  
//                             </select>  
//                         </div>

//                         <div className="m-2">
//                             <input type="email" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"placeholder="EMAIL" value={data.email}/>
//                         </div>
                    
//                         <div className="m-2">
//                             <input type="text" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="PROFESSION" value={data.profession} />
//                         </div>

//                         <div className="m-2">
//                             <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" value={data.marital_status}>
//                                     <option disabled selected hidden>MARITAL STATUS</option>    
//                                     <option className="text-gray-500" value="Married">Married</option>    
//                                     <option className="text-gray-500" value="Single">Single</option>  
//                             </select>  
//                         </div>
                    
//                         <div className="m-2">
//                             <input type="text" className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" placeholder="RESIDENCE *" value={data.residence}/>
//                         </div>

//                         <div className="m-2">
//                             <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" value={data.ministry}>
//                                     <option disabled selected hidden>MINISTRY</option>    
//                                     <option className="text-gray-500" value="Men">Men</option>    
//                                     <option className="text-gray-500" value="Women">Women</option>  
//                                     <option className="text-gray-500" value="Youth">Youth</option>  
//                             </select>  
//                         </div>
                    
//                         {/* <div className="m-2">
//                             <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" value={data.department}>
//                             <option disabled selected hidden>DEPARTMENT(S)</option>    
//                             <option className="text-gray-500" value="Prayer">Prayer</option>    
//                                     <option className="text-gray-500" value="Music">Music</option>  
//                                     <option className="text-gray-500" value="Finance">Finance</option>    
//                                     <option className="text-gray-500" value="Protocol">Protocol</option>  
//                                     <option className="text-gray-500" value="Evangelism">Evangelism</option>    
//                                     <option className="text-gray-500" value="Welfare">Welfare</option>  
//                                     <option className="text-gray-500" value="Technical">Technical</option> 
//                                     </select>  
//                                     </div>
                                    
//                                     <div className="m-2">
//                                     <select className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none w-5/5 text-gray-500" value={data.role}>
//                                     <option disabled selected hidden>ROLE(S)</option>    
//                                     <option className="text-gray-500" value="Prayer">Prayer Team Leader</option>    
//                                     <option className="text-gray-500" value="Music Director">Music Director</option>  
//                                     <option className="text-gray-500" value="Finance Secretary">Financial Secretary</option>    
//                                     <option className="text-gray-500" value="Head of Protocol">Head of Protocol</option>  
//                                     <option className="text-gray-500" value="Evangelism Coordinator">Evangelism Coordinator</option>    
//                                     <option className="text-gray-500" value="Bible Studies">Bibles Studies Coordinator</option>    
//                                     <option className="text-gray-500" value="Welfare Head">Welfare Head</option>  
//                                     <option className="text-gray-500" value="Technical Head">Technical Head</option> 
//                                     <option className="text-gray-500" value="Family Head">Family Head</option> 
//                             </select>  
//                         </div> */}
//                     </div>
//                     <div>
//                         <div className="flex flex-row items-centre justify-end ">
                            
//                             <button className="text-white bg-pink-700 hover:bg-xl:w-96 pink-80 0 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-pink-500 dark:hover:bg-pink-700 dark:focus:ring-xl:w-96 pink-80 0 mx-2" type="button" /*onClick={props.onClose}*/ 
//                             >
//                                 Cancel
//                             </button>  

//                             <button className="text-white bg-green-700 hover:bg-xl:w-96 green-80 0 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-xl:w-96 green-80 0 mx-2" type="submit">
//                                 Save
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>    
//         </div>
//     )
// }

// export default EditMember;