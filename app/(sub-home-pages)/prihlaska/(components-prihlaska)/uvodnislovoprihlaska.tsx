import koncepceFoto from "../../(sub-home-media)/koncepcefoto1.png"
import Image from "next/image";
export default function Uvodnislovoprihlaska(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-semibold text-3xl tracking-tight">Přihláška</h1>
                <p className="max-w-lg pt-10 font-light text-gray-600 z-10 ">
                    Máte zájem o přestup či zápis Vašeho dítěte? Vyplňte nám prosím níže uvedený formulář. Ozveme se Vám.
                </p>
            </div>
        </div>
    )
}