import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

const DeleteMemberById = () => {
    const router = useRouter();
    const [success, setSuccess] = useState('')
    const [data, setData] = useState(null);

    let seedId = router.query.deleteSeedById;

    useEffect(() => {
        fetchSeedById();
    }, [seedId]);

    console.log('seed id before: ', seedId)
    const fetchSeedById = () => {
        console.log('seed id after: ', seedId)
        if (!seedId) return;

        fetch(`http://localhost:8000/api/v1/seeds/${seedId}`)
            .then(response => response.json())
            .then(data => {setData(data)});
    }

    const deleteSeed = () => {
        fetch(`http://localhost:8000/api/v1/seeds/${seedId}/destroy`, {
            method: "DELETE",
            body: JSON.stringify(),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data), 
                setSuccess('Loading'), 
                console.log(success)});
    }
    return (
        <>
            {!data ? "Loading..." : success ? <div className="fixed inset-0 bg-gray-500 bg-opacity-20 overflow-y-auto h-full w-full">
                <div className="text-center relative top-40 mx-auto p-5 border 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-4/4 sm:w-1/4 xs:w-1/4 shadow-2xl rounded-2xl bg-white">
                    <div className="m-2">
                        SEED RECORD DELETED SUCCUSSFULLY
                    </div>
                    <div className="">
                        <Link href="/seeds">
                            <button 
                                className="text-white m-2 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                EXIT
                            </button>
                        </Link>
                    </div>
                </div>
            </div> :
            <div className="fixed inset-0 bg-gray-500 bg-opacity-20 overflow-y-auto h-full w-full">
                <div className=" text-center relative top-40 mx-auto p-5 border 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-4/4 sm:w-1/4 xs:w-1/4 shadow-2xl rounded-2xl bg-white">
                    <div className="m-2">
                        <div className=" text-gray-600 text-xl m-2">
                            <u>DELETE SEED</u>
                        </div>
                        ARE YOU SURE YOU WANT TO DELETE THIS RECORD?
                    </div>
                    <div className="">
                        
                            <button 
                                className="text-white m-2 bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" 
                                onClick={deleteSeed}
                            >
                                YES
                            </button>
                        
                        <Link href="/seeds">
                            <button 
                                className="text-white m-2 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                                NO
                            </button>
                        </Link>
                    </div>
                </div>
            </div> }
        </>
    )
}

export default DeleteMemberById;