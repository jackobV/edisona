import PavlaSadilkova from "../(home-media)/pavla_sadilova.png"
import Image from "next/image";
import krouzkyslovo from "../../krouzky/(components)/(media)/krouzkyslovo.png"
import koncepceslovolarge from "../(koncepce-components)/(koncepce-media)/koncepceslovolarge.png"
import koncepceslovosmall from "../(koncepce-components)/(koncepce-media)/koncepceslovo.png"

export default function SlovoPruvodce(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-2 ">
            <div className="flex flex-col bg-[#DB574E] drop-shadow-md rounded-xl py-10 px-5 md:hidden">
                <div className="text-white font-light italic">
                    <p>“Učíme zážitkem a aktivně. Probouzíme a podporujeme v dětech zvědavost a vedeme je k odpovědnosti za své učení. Vedeme je k sobě samým. Učí se komunikovat, pracovat v týmu, debatovat a řešit konflikty.”
                    </p>
                </div>
                <div className="flex flex-row pt-8 gap-x-3">
                    <div className="w-20 h-20 flex flex-col shrink-0 drop-shadow-md">
                        <Image src={koncepceslovosmall} alt={"Mgr. Denisa Sládečková (Tichavová)"} className="rounded-full overflow-hidden h-20 w-20" />
                    </div>
                    <div className="text-white flex flex-col gap-y-1">
                        <p className="font-bold ">Mgr. Denisa Sládečková (Tichavová)
                        </p>
                        <p className="font-light text-sm">Průvodkyně II. trojročí, výchovná poradkyně </p>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col relative isolate overflow-hidden  py-20 rounded-2xl w-full drop-shadow-md">
                <div className="absolute inset-0 -z-10 h-full w-full border     ">
                    <Image src={koncepceslovolarge} alt={"PavlaTestimonial"} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-row">
                    <div className="w-2/3"></div>
                    <div className="flex flex-col w-full pl-10">
                        <div className="flex flex-col max-w-md">
                            <p>“Učíme zážitkem a aktivně. Probouzíme a podporujeme v dětech zvědavost a vedeme je k odpovědnosti za své učení. Vedeme je k sobě samým. Učí se komunikovat, pracovat v týmu, debatovat a řešit konflikty.”
                            </p>
                            <p className="font-bold pt-4">Mgr. Denisa Sládečková (Tichavová)</p>
                            <p className="font-light text-sm py-2">Průvodkyně II. trojročí, výchovná poradkyně</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}