import Image from "next/image";
import zakladatelSlovo from "../../(sub-home-media)/zakladatelslovofoto.png"
import zakladatelSlovoSmall from "../../(sub-home-media)/zakladatelslovosmall.png"
export default function KoncepceTestimonialSlovo(){
    return(
        <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-2 ">
            <div className="flex flex-col bg-[#FED032] drop-shadow-md rounded-xl pb-10 px-5 md:hidden">
                <div className=" font-light italic">
                    <p>„Učíme děti, jak pracovat se stresem, porozumět svým emocím, nenechat se pohltit svými myšlenkami a být tady a teď. Vedeme je k seberozvoji, osvojujeme si techniky mindfulness a dbáme na osobní pohodu jedince, tzv. welbeing.“
                    </p>
                </div>
                <div className="flex flex-row pt-8 gap-x-3">
                    <div className="w-20 h-20 flex flex-col shrink-0 drop-shadow-md">
                        <Image src={zakladatelSlovoSmall} alt={"ZakladatelSlovo"} />
                    </div>
                    <div className=" flex flex-col gap-y-1">
                        <p className="font-bold ">Mgr. Denisa Tichavová</p>
                        <p className="font-light text-sm">Průvodkyně II. trojročí, výchovná poradkyně</p>
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
                            <p>„Edisona je pro mě oč co nevidím pochodu chytrý. A hlav mě sám pes? Záměr k hejbaly přihrčela vypáčeno ex vmíchal od popravy vechtrovský rejpanec tos záhad tři ně rutinu role sůl ze za by vzdělaní nelže neb hokynářky kůží vrhl.“
                            </p>
                            <p className="font-bold pt-4">Mgr. Pavla Sadílková, MBA</p>
                            <p className="font-light text-sm py-2">Ředitelka a zakladatelka školy</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}