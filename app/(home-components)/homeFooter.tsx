import EdookitLogo from "../(home-media)/Edookit.png"
import Image from "next/image";
export default function HomeFooter(){
    return(
        <div className="bg-black text-white ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4">
                <div className="flex flex-col md:flex-row md:justify-around pt-8 text-sm md:pb-20">
                    <div className="flex flex-col">
                        <h3 className="font-semibold tracking-tight text-base">Základní škola Edisona</h3>
                        <p className="pt-1">Bítovská 1122/5, Praha 4</p>
                        <a className="underline pt-5">Zobrazit na mapě</a>
                    </div>
                    <div className="flex flex-col pt-5 md:pt-0">
                        <a className="underline">+420 602 462 617</a>
                        <a className="underline pt-1">pavla.sadilkova@edisona.cz</a>
                        <a className="underline pt-5">Náš Facebook</a>
                    </div>
                    <div className="flex flex-col pt-5 md:pt-0">
                        <a className="underline" href="/urednideska">Úřední deska</a>
                        <a className="underline pt-1">Organizace školního roku</a>
                        <a className="underline pt-1">Školská rada</a>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center pt-5 md:pt-0 self-start">
                        <Image src={EdookitLogo} alt={"Edookit logo"} />
                        <p className="underline">Edookit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}