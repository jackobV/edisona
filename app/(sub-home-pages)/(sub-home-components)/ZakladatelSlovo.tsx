import Image from "next/image";
import zakladatelSlovo from "../(sub-home-media)/zakladatelslovofoto.png"
import zakladatelSlovoSmall from "../(sub-home-media)/zakladatelslovosmall.png"
export default function ZakladatelSlovo(){
    return(
        <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-2">
            <div className="flex flex-col bg-[#FED032] drop-shadow-md rounded-xl py-10 px-5 md:hidden">
                <div className=" font-light italic">
                    <p>“Uvědomujeme si potřebu fungujícího trojúhelníku důvěry od průvodců k dětem, od dětí k průvodcům, od rodičů k průvodcům, od průvodců k rodičům a také od dětí k rodičům a od rodičů k dětem. Z toho vycházejí i principy naší školy.“
                    </p>
                </div>
                <div className="flex flex-row pt-8 gap-x-3">
                    <div className="w-20 h-20 flex flex-col shrink-0 drop-shadow-md">
                        <Image src={zakladatelSlovoSmall} alt={"ZakladatelSlovo"} />
                    </div>
                    <div className=" flex flex-col gap-y-1">
                        <p className="font-bold ">Ing. Jan Sadil</p>
                        <p className="font-light text-sm">Zakladatel školy</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col relative isolate overflow-hidden  py-20 rounded-2xl w-full drop-shadow-md">
                <div className="absolute inset-0 -z-10 h-full w-full border     ">
                    <Image src={zakladatelSlovo} alt={"ZakladatelSlovo"} className="w-full h-full object-cover object-left-top" />
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col w-2/3"></div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col max-w-md">
                            <p>“Uvědomujeme si potřebu fungujícího trojúhelníku důvěry od průvodců k dětem, od dětí k průvodcům, od rodičů k průvodcům, od průvodců k rodičům a také od dětí k rodičům a od rodičů k dětem. Z toho vycházejí i principy naší školy.“
                            </p>
                            <p className="font-bold pt-4">Ing. Jan Sadil</p>
                            <p className="font-light text-sm py-2">Zakladatel školy</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}