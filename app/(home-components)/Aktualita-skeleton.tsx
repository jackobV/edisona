export default function AktualitaSkeleton(){
    return(
        <div className="bg-white py-6 px-4 rounded-2xl drop-shadow-md flex flex-col items-center max-w-sm w-full">
            <div className="flex flex-col w-full gap-y-2 pb-2">
                <div className="bg-gray-200 w-10/12 h-3"></div>
                <div className="bg-gray-200 w-1/3 h-3"></div>

            </div>
            <div className="aspect-[16/9] w-full bg-gray-200 animate-pulse"></div>
            <div className="flex flex-col w-full gap-y-2 py-2">
                <div className="bg-gray-200 w-9/12 h-2 animate-pulse"></div>
                <div className="bg-gray-200 w-10/12 h-2 animate-pulse"></div>
                <div className="bg-gray-200 w-1/3 h-2 animate-pulse"></div>

            </div>
            <div className="flex flex-col w-full gap-y-2 py-2">
                <div className="bg-gray-200 w-5/12 h-3 animate-pulse"></div>
            </div>
        </div>)
}