import PavlaSadilkova from "../(home-media)/pavla_sadilova.png"
import Image from "next/image";
export default function PrincipalCitation(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4">
            <div className="flex flex-col bg-[#DB574E] drop-shadow-md rounded-xl py-10 px-5">
                <div className="text-white font-light italic">
                    <p>„Edisona je pro mě oč co nevidím pochodu chytrý. A hlav mě sám pes? Záměr k hejbaly přihrčela vypáčeno ex vmíchal od popravy vechtrovský rejpanec tos záhad tři ně rutinu role sůl ze za by vzdělaní nelže neb hokynářky kůží vrhl.“
                    </p>
                </div>
                <div className="flex flex-row pt-8 gap-x-3">
                    <div className="w-20 h-20 flex flex-col shrink-0 drop-shadow-md">
                        <Image src={PavlaSadilkova} alt={"Pavla Sadílková"} />
                    </div>
                    <div className="text-white flex flex-col gap-y-1">
                        <p className="font-bold ">Mgr. Pavla Sadílková, MBA</p>
                        <p className="font-light text-sm">Ředitelka a zakladatelka<br /> školy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}