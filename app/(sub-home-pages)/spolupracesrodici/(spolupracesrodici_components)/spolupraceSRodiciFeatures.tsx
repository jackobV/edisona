import cafe from "../../(sub-home-media)/(spolupracesrodiciFeaturesIcons)/edisonaCafe.png"
import tripartita from "../../(sub-home-media)/(spolupracesrodiciFeaturesIcons)/tripartita.png"
import dilna from "../../(sub-home-media)/(spolupracesrodiciFeaturesIcons)/dilna.png"
import slavnosti from "../../(sub-home-media)/(spolupracesrodiciFeaturesIcons)/slavnosti.png"
import kurzy from "../../(sub-home-media)/(spolupracesrodiciFeaturesIcons)/vzdelavacikurzy.png"
import dobrovolnictvi from "../../(sub-home-media)/(spolupracesrodiciFeaturesIcons)/dobrovolnictvi.png"
import krouzky from "../../(sub-home-media)/(spolupracesrodiciFeaturesIcons)/krouzky.png"
import vylety from "../../(sub-home-media)/(spolupracesrodiciFeaturesIcons)/vylety.png"
import dnyotevrenychdveri from "../../(sub-home-media)/(spolupracesrodiciFeaturesIcons)/door.png"
import rodice from "../../(sub-home-media)/(spolupracesrodiciFeaturesIcons)/parents.png"

import Image from "next/image";

export default function SpolupraceSRodiciFeatures(){
    const features = [
        {
            image: cafe,
            title: "Edisona café",
            text: "Neformální rodičovské kavárny připravené dětmi"
        },
        {
            image: tripartita,
            title: "Tripartity",
            text: "Rodičovské schůzky ve složení rodič / dítě / průvodce"
        },
        {
            image: dilna,
            title: "Dílny pro žáky i dospělé",
            text: "Vánoční, velikonoční a jiné dílny"
        },

        {
            image: slavnosti,
            title: "Slavnosti",
            text: "Slavnostní zahájení a ukončení školního roku"
        },
        {
            image: dnyotevrenychdveri,
            title: "Dny otevřených dveří",
            text: "Přijďte se podívat, jak to u nás vypadá"
        },
        {
            image: kurzy,
            title: "Vzdělávací kurzy pro dospělé",
            text: "Dobrovolnická činnost dle potřeb Edisony, např. montování nábytku společně s dětmi, či společné vaření"
        },
        {
            image: dobrovolnictvi,
            title: "Dobrovolnictví",
            text: "Montování nábytku s dětmi a další společné aktivity"
        },
        {
            image: krouzky,
            title: "Kroužky a pracovní zkušenosti",
            text: "Odpolední kroužky či návštěvy na pracovišti rodičů"
        },
        {
            image: rodice,
            title: "Rada rodičů",
            text: "Pravidelné schůzky rodičů s vedením školy"
        },



    ]
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-y-2">
                {features.map((item,featureIdx) => (
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                        <div className="col-start-6 col-span-2 flex flex-col items-center overflow-hidden py-2">
                            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl z-10">
                                <Image src={item.image} alt={item.title} className="w-20 h-20 z-10" />
                            </div>
                        </div>
                        <div
                            className={classNames(
                                featureIdx % 2 === 0 ? 'lg:col-start-8  ' : 'lg:col-start-2 ',
                                'flex-auto lg:row-start-1 col-span-4 h-full py-2'
                            )}
                        >
                            <div className={classNames(
                                featureIdx % 2 === 0 ? 'items-start ' : 'items-end text-end',
                                'flex flex-col gap-y-2'
                            )}>
                                <h3 className="text-xl font-semibold z-10">
                                    {item.title}
                                </h3>
                                <p className="text-gray-800 z-10">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}