const Backdrop = ({children}) => {
return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-70 overflow-y-auto h-full w-full">
        <div 
            className="relative text-gray-500 top-20 mx-auto p-5 border 2xl:w-2/4 xl:w-3/4 lg:w-3/4 md:w-4/4 sm:w-4/4 xs:w-2/4 shadow-2xl rounded-2xl bg-white">
                {children}
        </div>
    </div>
)
}

export default Backdrop;