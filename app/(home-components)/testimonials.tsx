export default function Testimonials(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4 pb-2">
            <div className="flex flex-col bg-white rounded-xl overflow-hidden drop-shadow-md">
                <div className="bg-teal-800 flex flex-col items-center py-5">
                    <h2 className="text-white font-medium text-xl text-center">Rodiče o škole</h2>
                </div>
                <div className="flex flex-row items-center gap-x-4 px-2 pt-5 pb-8">
                    <div className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0">{"<"}</div>
                    <div className="flex flex-col">
                        <p className="text-sm font-thin text-gray-800 italic">
                            "Kruci hraje svém civilního má naskytne zpívat ji od kope sta u
                            mi cosi oč ah zub zloba pomstít. Jím bok si, udal, dojde pomenší phlox otevřte sedmého mě noční oceán, tajil osmý
                            schopen vobleky.“
                        </p>
                        <p className="font-bold text-sm pt-2">Petr, táta Julie ze 4. ročníku</p>
                    </div>
                    <div className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0">{">"}</div>
                </div>
                <div className="flex flex-row justify-center gap-x-3 pb-10">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <div className="w-2 h-2 border border-black rounded-full"></div>

                </div>
            </div>
        </div>
    )
}