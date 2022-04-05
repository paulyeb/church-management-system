import Link from "next/link";

const SuccessMessage = ({title, link}) => {
    return(
        <div className="fixed inset-0 bg-gray-500 bg-opacity-20 overflow-y-auto h-full w-full">
            <div className="text-center relative top-40 mx-auto p-5 border 2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-4/4 sm:w-1/4 xs:w-1/4 shadow-2xl rounded-2xl bg-white">
                <div className="m-2">
                    {title} DELETED SUCCUSSFULLY
                </div>
                <div className="">
                    <Link href={link}>
                        <button 
                            className="text-white m-2 bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-5 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            EXIT
                        </button>
                    </Link>
                </div>
            </div>
        </div> 
    )
}

export default SuccessMessage;