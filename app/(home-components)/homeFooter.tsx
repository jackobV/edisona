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
                        <a href="https://maps.app.goo.gl/szujZtp8WBuDVoZPA" className="underline pt-5">Zobrazit na mapě</a>
                    </div>
                    <div className="flex flex-col pt-5 md:pt-0">
                        <a href="tel:+420602462617" className="underline">+420 602 462 617</a>
                        <a href="mailto:pavla.sadilova@edisona.cz" className="underline pt-1">pavla.sadilova@edisona.cz</a>
                        <a href="https://www.facebook.com/edisonaskola" className="underline pt-5">Náš Facebook</a>
                    </div>
                    <div className="flex flex-col pt-5 md:pt-0">
                        <a className="underline" href="/urednideska">Úřední deska</a>
                    </div>
                    <div className="flex flex-row gap-x-1 items-center pt-5 md:pt-0 self-start">
                        <Image src={EdookitLogo} alt={"Edookit logo"} />
                        <a href="https://edisona-login.edookit.net/" className="underline">Edookit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}