import koncepceFoto from "../../(sub-home-media)/koncepcefoto1.png"
import Image from "next/image";
export default function UvodniSlovoKoncepce(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-semibold text-3xl tracking-tight">Koncepce</h1>
                <p className="max-w-3xl pt-10 font-light text-gray-600 z-10">
                    Unikátnost přístupu ke vzdělávání v Edisoně spočívá v tom, že v souladu se soudobými poznatky o vzdělávání (konektivismus, humanistická teorie vzdělávání, konstruktivismus) nezůstáváme vymezeni pouze jedním pedagogickým rámcem, ale vytváříme synergický efekt kombinací různých v praxi ověřených a vyzkoušených vzdělávacích přístupů.
                </p>
                <div className="flex flex-row md:pt-20 md:justify-around w-full z-10">
                    <div className="">
                        <h2 className="font-semibold text-2xl tracking-tight pt-10 md:pt-0 text-left">Mezi tyto přístupy řadíme</h2>
                        <ul className="max-w-3xl pt-10 font-light text-gray-600 text-left list-disc px-4 z-10">
                            <li>
                                konstruktivistická didaktika
                            </li>
                            <li>
                                učení zprostředkované zkušeností
                            </li>
                            <li>
                                badatelsky orientovaná výuka
                            </li>
                            <li>
                                přírodní pedagogika spojená s učením venku
                            </li>
                            <li>
                                připravené prostředí s podnětným smyslovým materiálem
                            </li>
                            <li>
                                Hejného matematika
                            </li>
                            <li>
                                projektová výuka a “velké” otevřené otázky
                            </li>
                            <li>
                                podpora přirozené autonomie žáků s postupným přebíráním odpovědnosti (formativní přístup)
                            </li>
                            <li>
                                vlastní učební plán a individuální přístup pro žáky mimořádně nadané a pro žáky se SVP
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:flex flex-shrink border overflow-hidden rounded-lg md:max-w-lg lg:max-w-xl drop-shadow-md ">
                        <Image src={koncepceFoto} alt={"koncepce foto"} className="object-cover object-center h-fit" />
                    </div>
                </div>
            </div>
        </div>
    )
}