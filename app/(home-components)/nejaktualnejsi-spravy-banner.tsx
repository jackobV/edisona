import facebookLogo from "../(home-media)/fb-logo.svg"
import facebookLogoWhite from"../(home-media)/fb-logo-white.svg"
import Image from "next/image";

export default function NejaktualnejsiSpravyBanner(){
    return(
        <div>
            <button className="md:hidden flex flex-row w-full justify-around bg-gray-400 text-white md:max-w-sm mx-auto items-center py-2 rounded-lg px-6 drop-shadow-md max-w-sm"><Image src={facebookLogoWhite} alt={"hi"} className="w-6 h-6" /><p className="text-xs font-light">Nejaktuálnější zprávy najdete na Facebooku</p></button>
            <a href="https://www.facebook.com/edisonaskola" className="hidden md:flex flex-row w-full max-w-sm text-sm py-2 rounded-lg px-6 drop-shadow-md bg-gray-400 mx-auto text-white items-center gap-x-4"><Image src={facebookLogoWhite} alt={"fb logo"} className="w-6 h-6" /><p>Nejaktuálnější zprávy najdete na Facebooku</p></a>
        </div>
    )
}