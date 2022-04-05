import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const RestoreMemberById = () => {
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState('');
    const [data, setData] = useState(null);
    const router = useRouter();

    let titheId = router.query.restoreTitheById;

    useEffect(() => {
        fetchTitheById();
    }, [titheId, success]);

    console.log('tithe id before: ', titheId);

    const fetchTitheById = () => {
        console.log('tithe id after: ', titheId)
        if (!titheId) return;

        fetch(`http://localhost:8000/api/v1/tithes/${titheId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data),
                setData(data), 
                setName(data.user.name.toUpperCase())
            });
    }

    const restoreTithe = () => {
        fetch(`http://localhost:8000/api/v1/tithes/${titheId}/restore`)
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
                        TITHE RECORD RESTORED SUCCUSSFULLY
                    </div>
                    <div className="">
                        <Link href="/tithes">
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
                            <u>RESTORE {name}'S TITHE</u>
                        </div>
                        ARE YOU SURE YOU WANT TO RESTORE THIS RECORD? 
                    </div>
                    <div className="">
                        
                            <button 
                                className="text-white m-2 bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" 
                                onClick={restoreTithe}
                            >
                                YES
                            </button>
                        
                        <Link href="/tithes">
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

export default RestoreMemberById;