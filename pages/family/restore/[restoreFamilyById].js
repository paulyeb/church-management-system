import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const RestoreFamilyById = () => {
    const [success, setSuccess] = useState(false);
    const [familyName, setFamilyName] = useState('');
    const [data, setData] = useState(null);
    const router = useRouter();

    let familyId = router.query.restoreFamilyById;

    useEffect(() => {
        fetchFamilyById();
    }, [familyId, success]);

    console.log('family id before: ', familyId);

    const fetchFamilyById = () => {
        console.log('family id after: ', familyId)
        if (!familyId) return;

        fetch(`http://localhost:8000/api/v1/families/${familyId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setData(data), 
                setFamilyName(data.name.toUpperCase())
            });
    }

    const restoreFamily = () => {
        fetch(`http://localhost:8000/api/v1/families/${familyId}/restore`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setSuccess(true);
            });

        if (!data) return;

        console.log(success);
    }

    return (
        <>
            {!data ? "Loading..." : success ? <div className="fixed inset-0 bg-gray-500 bg-opacity-20 overflow-y-auto h-full w-full">
                <div className="text-center relative top-40 mx-auto p-5 border 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-4/4 sm:w-1/4 xs:w-1/4 shadow-2xl rounded-2xl bg-white">
                    <div className="m-2">
                        FAMILY RESTORED SUCCUSSFULLY
                    </div>
                    <div className="">
                        <Link href="/families">
                            <button 
                                className="text-white m-2 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                Exit
                            </button>
                        </Link>
                    </div>
                </div>
            </div> :
            <div className="fixed inset-0 bg-gray-500 bg-opacity-20 overflow-y-auto h-full w-full">
                <div className="relative top-40 mx-auto p-5 text-center border 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-4/4 sm:w-1/4 xs:w-1/4 shadow-2xl rounded-2xl bg-white">
                    <div className="m-2">
                        <div className=" text-gray-600 text-xl m-2">
                            <u>RESTORE {familyName}</u>
                        </div>
                        ARE YOU SURE YOU WANT TO RESTORE THIS RECORD? 
                    </div>
                    <div className="">
                        
                            <button 
                                className="text-white m-2 bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" 
                                onClick={restoreFamily}
                            >
                                YES
                            </button>
                        
                        <Link href="/families">
                            <button 
                                className="text-white m-2 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                NO
                            </button>
                        </Link>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default RestoreFamilyById;