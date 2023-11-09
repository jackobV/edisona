import Image from "next/image";
import icon1 from "../(sub-home-media)/(featureicons)/1.png"
import icon2 from "../(sub-home-media)/(featureicons)/5.png"
import icon3 from "../(sub-home-media)/(featureicons)/3.png"
import bezpeci from "../vizeskoly/(vize-skoly-media)/bezpeci.png"
import inspo from "../vizeskoly/(vize-skoly-media)/inspirativni.png"
import hra from "../vizeskoly/(vize-skoly-media)/hra.png"
import spolubyti from "../vizeskoly/(vize-skoly-media)/spolubyti.png"
import opravdovy from "../vizeskoly/(vize-skoly-media)/opravdovy.png"
import zapojeni from "../vizeskoly/(vize-skoly-media)/zapojeni.png"



const features = [
    {
        title: "Bezpečí",
        description: "Bezpečí chápeme ve smyslu vztahů založených na respektu, důvěře a otevřené komunikaci. Učíme se otevřeně a ohleduplně vymezovat hranice, vyjadřovat své potřeby a naslouchat druhým. Důležitou součástí výuky je práce s emocemi a rozvoj sociálních dovedností. . ",
        image: zapojeni,
        imageAlt: "Zapojení icon"
    },
    {
        title: "Inspirativní prostředí a vytváření příležitostí",
        description: "Věříme, že bezpečné a inspirativní prostředí podněcuje touhu zkoumat a hledat. Ukazujeme svět v souvislostech a v situacích reálného života. ",
        image: inspo,
        imageAlt: "inspo icon"
    },
    {
        title: "Hra a pohyb",
        description: "Umět si hrát považujeme za důležitou schopnost po celý život. Hra, podobně jako pohyb, vnáší do činností lehkost a radost, vede k rozvoji tvořivosti. ",
        image: hra,
        imageAlt: "hra icon"
    },
    {
        title: "Spolubytí a spolupráce",
        description: "Prostředí školy spoluutvářejí děti. Učí se pracovat v týmu a společně řešit konflikty a náročné situace.",
        image: spolubyti,
        imageAlt: "spolubyti icon"
    },
    {
        title: "Opravdový učitel",
        description: "Naši průvodci jsou pedagogové, kteří na sobě neustále pracují a rozvíjejí se. Podporujeme individualitu a zároveň usilujeme o sdílení inspirace v rámci týmu. Proto věnujeme dostatek času společnému rozvoji a tzv. měkkým dovednostem: nenásilné komunikaci či práci se stresem. Opravdový učitel je správným průvodcem žáka na jeho cestě za vzděláním.",
        image: opravdovy,
        imageAlt: "opravdovy icon"
    },
    {
        title: "Zapojení rodičů",
        description: "Partnerský přístup při spolupráci s rodiči vnímáme jako nezbytný předpoklad dobře fungující výchovy dětí. ",
        image: zapojeni,
        imageAlt: "zapojeni icon"
    },
]
export default function Principy(){
    return(
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-6xl lg:px-8">
            <div className="flex flex-col items-center pb-10">
                <h2 className="text-3xl font-semibold">PRINCIPY</h2>
                <p className="text-gray-500 text-center pt-10 max-w-3xl">Nezbytným předpokladem fungování nastavené koncepce je soustavná péče o bezpečné klima školy, inspirativní prostředí a kulturu založenou na důvěře, respektu a vzájemné spolupráci. Proto v Edisoně uplatňujeme tyto principy:
                </p>
            </div>
            {features.map((feature) => (
                <div>
                    <div className=" flex flex-col md:grid md:grid-cols-12 pb-10">
                        <div className="md:col-span-2">
                            <div className="flex flex-col h-full items-center justify-center">
                                <Image src={feature.image} alt={feature.imageAlt} className="object-cover w-20 h-20" />
                            </div>
                        </div>
                        <div className="md:col-span-8 md:col-start-3">
                            <div className="flex flex-col items-center text-center md:items-start md:text-start">
                                <h3 className="text-2xl font-semibold z-10">{feature.title}</h3>
                                <p className="text-gray-500 pt-3 z-10">{feature.description}</p>
                            </div>
                        </div>
                    </div>

                </div>


            ))}

        </div>
    )
}