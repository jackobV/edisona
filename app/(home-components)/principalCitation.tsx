import PavlaSadilkova from "../(home-media)/pavla_sadilova.png"
import Image from "next/image";
import PavlaTestimonial from "../(home-media)/pavlatestimonial.png"
export default function PrincipalCitation(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-2 ">
            <div className="flex flex-col bg-[#DB574E] drop-shadow-md rounded-xl py-10 px-5 md:hidden">
                <div className="text-white font-light italic">
                    <p>“Učíme zážitkem a aktivně. Probouzíme a podporujeme v dětech zvědavost a vedeme je k odpovědnosti za své učení. Vedeme je k sobě samým. Učí se komunikovat, pracovat v týmu, debatovat a řešit konflikty.”
                    </p>
                </div>
                <div className="flex flex-row pt-8 gap-x-3">
                    <div className="w-20 h-20 flex flex-col shrink-0 drop-shadow-md">
                        <Image src={PavlaSadilkova} alt={"Pavla Sadílková"} />
                    </div>
                    <div className="text-white flex flex-col gap-y-1">
                        <p className="font-bold ">Mgr. Pavla Sadilová, MBA</p>
                        <p className="font-light text-sm">Ředitelka a zakladatelka<br /> školy</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col relative isolate overflow-hidden text-white py-20 rounded-2xl w-full drop-shadow-md">
                <div className="absolute inset-0 -z-10 h-full w-full border     ">
                    <Image src={PavlaTestimonial} alt={"PavlaTestimonial"} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col w-2/3"></div>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col max-w-md">
                            <p>“Učíme zážitkem a aktivně. Probouzíme a podporujeme v dětech zvědavost a vedeme je k odpovědnosti za své učení. Vedeme je k sobě samým. Učí se komunikovat, pracovat v týmu, debatovat a řešit konflikty.”
                            </p>
                            <p className="font-bold pt-4">Mgr. Pavla Sadilová, MBA</p>
                            <p className="font-light text-sm py-2">Ředitelka a zakladatelka školy</p>
                            <a href="/koncepce" className="w-fit bg-white w-fit text-black py-2 px-5 rounded-xl font-medium tracking-tight drop-shadow-md">Více o koncepci školy</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}