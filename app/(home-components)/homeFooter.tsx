import EdookitLogo from "../(home-media)/Edookit.png"
import Image from "next/image";
export default function HomeFooter(){
    return(
        <div className="bg-black text-white mx-auto max-w-7xl px-6 lg:px-8 pb-4">
            <div className="flex flex-col pt-8 text-sm">
                <div className="flex flex-col">
                    <h3 className="font-semibold tracking-tight text-base">Základní škola Edisona</h3>
                    <p className="pt-1">Bítovská 1122/5, Praha 4</p>
                    <a className="underline pt-5">Zobrazit na mapě</a>
                </div>
                <div className="flex flex-col pt-5">
                    <a className="underline">+420 602 462 617</a>
                    <a className="underline pt-1">pavla.sadilkova@edisona.cz</a>
                    <a className="underline pt-5">Náš Facebook</a>
                </div>
                <div className="flex flex-col pt-5">
                    <a className="underline">Dokumenty předpisy a GDPR</a>
                    <a className="underline pt-1">Organizace školního roku</a>
                    <a className="underline pt-1">Školská rada</a>
                </div>
                <div className="flex flex-row gap-x-1 items-center pt-5">
                    <Image src={EdookitLogo} alt={"Edookit logo"} />
                    <p className="underline">Edookit</p>
                </div>
            </div>
        </div>
    )
}