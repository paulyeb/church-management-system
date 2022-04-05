import { useState, useEffect } from "react";
import Link from "next/link";


const EditAttendance = ({ data, onUpdateAttendance }) => {
    const [dateInput, setDateInput] = useState('');
    const [menInput, setMenInput] = useState('');
    const [womenInput, setWomenInput] = useState('');
    const [childrenInput, setChildrenInput] = useState('');
    const [visitorsInput, setVisitorsInput] = useState('');
    const [commentsInput, setCommentsInput] = useState('');

    useEffect(() => {
        setExistingAttendanceData(data);
    }, [data]);

    const setExistingAttendanceData = (data) => {
        if (!data) {
            return;
        }

        console.log(data)

        setDateInput(data.body.date);
        setMenInput(data.body.men);
        setWomenInput(data.body.women);
        setChildrenInput(data.body.children);
        setVisitorsInput(data.body.visitors);
        setCommentsInput(data.body.comments);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        const updatedAttendanceRecord = {
            date: dateInput,
            men: menInput,
            women: womenInput,
            children: childrenInput,
            visitors: visitorsInput,
            comments: commentsInput,
        }
    
        onUpdateAttendance(updatedAttendanceRecord);
    }
    
    return (
        data ? <div className="fixed inset-0 bg-gray-500 bg-opacity-70 overflow-y-auto h-full w-full">
            <div className="relative text-gray-500 top-10 mx-auto p-5 border 2xl:w-2/4 xl:w-3/4 lg:w-3/4 md:w-4/4 sm:w-4/4 xs:w-2/4 shadow-2xl rounded-2xl bg-white">
            <form onSubmit={submitFormHandler}>
                    <p className="text-center  font-light text-3xl">Update Attendance Record</p>
                    <hr className=" my-3 mx-12"/>
                    <div className="grid grid-cols-2 g-4 text-xl p-4 justify-items-center">
                        <div className="m-2">  
                            <div>
                                <label>Date</label>         
                            </div>
                            <input
                                type="date"
                                className="border-2 rounded w-64 md:w-80 font-light text-xl p-4 focus:outline-none text-gray-500" 
                                placeholder="DATE *"
                                value={dateInput}
                                onChange={(e) => setDateInput(e.target.value)}
                            />
                        </div>
                    
                        <div className="m-2">
                            <div>
                                <label>Men</label>         
                            </div>
                            <input type="number" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500" 
                                value={menInput}
                                onChange={e => setMenInput(e.target.value)} 
                            />
                        </div>

                        <div className="m-2">
                            <div>
                                <label>Women</label>         
                            </div>
                            <input type="number" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"
                                value={womenInput}
                                onChange={e => setWomenInput(e.target.value)}
                            />
                        </div>

                        <div className="m-2">
                            <div>
                                <label>Children</label>         
                            </div>
                            <input 
                                type="number" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"
                                value={childrenInput}
                                onChange={e => setChildrenInput(e.target.value)}
                            />
                        </div>
                    
                        <div className="m-2">
                            <div>
                                <label>Visitors</label>         
                            </div>
                            <input type="number" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"
                                value={visitorsInput} 
                                onChange={e => setVisitorsInput(e.target.value)}
                            />
                        </div>
                    
                        <div className="m-2">
                            <div>
                                <label>Comments</label>         
                            </div>
                            <input 
                                type="text" 
                                className="border-2 rounded font-light text-xl p-4 w-64 md:w-80  focus:outline-none text-gray-500"
                                value={commentsInput}
                                onChange={e => setCommentsInput(e.target.value)}
                            />
                        </div>
                        <div>

                        </div>

                        <div className="flex flex-row items-centre justify-end mt-4">
                            
                            <Link href='/attendances'>
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
        : <div>Loading member data, please wait...</div>
    )
}

export default EditAttendance;
