import PavlaSadilkova from "../(home-media)/pavla_sadilova.png"
import dominikalarge from "../../(sub-home-media)/Dominikalarge.jpg"
import Image from "next/image";
import krouzkyslovo from "./(media)/krouzkyslovo.png"
export default function Krouzkyslovo(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-2 ">
            <div className="flex flex-col bg-[#DB574E] drop-shadow-md rounded-xl py-10 px-5 md:hidden">
                <div className="text-white font-light italic">
                    <p>“Velký důraz klademe na hudební vkus a individualitu každého dítěte. Proto je hra na klavír i zpěv popových a muzikálových písní pro děti zábavnější a přínosnější.”
                    </p>
                </div>
                <div className="flex flex-row pt-8 gap-x-3">
                    <div className="w-20 h-20 flex flex-col shrink-0 drop-shadow-md">
                        <Image src={krouzkyslovo} alt={"Mgr. Denisa Sládečková (Tichavová)"} className="rounded-full overflow-hidden h-20 w-20" />
                    </div>
                    <div className="text-white flex flex-col gap-y-1">
                        <p className="font-bold ">Dominika Čompová
                        </p>
                        <p className="font-light text-sm">lektorka klavíru a zpěvu </p>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col relative isolate overflow-hidden  py-20 rounded-2xl w-full drop-shadow-md">
                <div className="absolute inset-0 -z-10 h-full w-full border     ">
                    <Image src={dominikalarge} alt={"PavlaTestimonial"} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-row">
                    <div className="w-1/2"></div>
                    <div className="flex flex-col w-full pl-10">
                        <div className="flex flex-col max-w-md">
                            <p>“Velký důraz klademe na hudební vkus a individualitu každého dítěte. Proto je hra na klavír i zpěv popových a muzikálových písní pro děti zábavnější a přínosnější.”
                            </p>
                            <p className="font-bold pt-4">Dominika Čompová</p>
                            <p className="font-light text-sm py-2">lektorka klavíru a zpěvu</p>
                            <a href="/koncepce" className="w-fit bg-white w-fit text-black py-2 px-5 rounded-xl font-medium tracking-tight drop-shadow-md">Více o koncepci školy</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}