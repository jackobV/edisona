"use client"
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import RodiceOSkole from "../(home-media)/rodiceOSkole.png"
import {useCallback, useEffect, useState} from "react";
export interface testimonialsText{
    testimonials:Array<string>;
}
export default function Testimonials(){
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [emblaRef2, emblaApi2] = useEmblaCarousel()
    const [activeVal,setActiveVal] = useState(0);
    useEffect(()=>{
        if(emblaApi){
            console.log(activeVal)

        }
    },[emblaApi])
    const scrollNext = useCallback(
        ()=> {
            if(emblaApi){
                emblaApi.scrollNext()
                const newActive = activeVal +1
                setActiveVal((prevVal) => prevVal + 1)
            }
        },
        [emblaApi]
    )
    const scrollPrev = useCallback(
        ()=> {
            if(emblaApi){
                emblaApi.scrollPrev()
                const newActive = activeVal -1
                setActiveVal(newActive)
            }
        },
        [emblaApi]
    )
    useEffect(()=>{
        if(emblaApi){
            console.log(emblaApi2?.slideNodes())
        }
    },[emblaApi2])
    const scrollNext2 = useCallback(
        ()=> emblaApi && emblaApi2?.scrollNext(),
        [emblaApi2]
    )
    const scrollPrev2 = useCallback(
        ()=> emblaApi && emblaApi2?.scrollPrev(),
        [emblaApi2]
    )

    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-4 pb-2">
            <div className="flex flex-col bg-white rounded-xl overflow-hidden drop-shadow-md md:hidden" >
                <div className="relative isolate overflow-hidden flex flex-col items-center py-5 h-full overflow-hidden">
                    <div className="absolute inset-0 -z-10 h-full w-full object-cover ">
                        <Image src={RodiceOSkole} alt={"rodiče o škole"} className="object-cover"/>
                    </div>
                    <h2 className="text-white font-medium text-xl text-center">Rodiče o škole</h2>
                </div>
                <div className="overflow-hidden z-10" ref={emblaRef2}>
                    <div className="flex">
                        <div className="flex-[0_0_100%] min-w-0">
                            <div className="flex flex-row items-center h-full gap-x-4 px-2 pt-5 pb-8">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollPrev2}>{"<"}</button>
                                <div className="flex flex-col h-full">
                                    <p className="text-sm font-thin text-gray-800 italic justify-between">
                                        Jsme moc rádi, že našim dětem můžeme nabídnout školu, kde je vedou k sebevědomí a jistotě i k tomu, že vyjádřit své názory a pocity je úplně v pořádku. Sice se to v dnešní společnosti hodně posouvá, není to ovšem ještě na mnoha školách pravidlem. Velice si vážíme přirozeného způsobu komunikace jak s dětmi, tak s rodiči. Ukazovat dětem, že vše je řešitelné, je pro nás mnohem důležitější než cpát do nich mraky informací.
                                    </p>
                                    <p className="font-bold text-sm pt-2">Rodič žáka třetího ročníku</p>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollNext2}>{">"}</button>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] min-w-0">
                            <div className="flex flex-row items-center gap-x-4 px-2 pt-5 pb-8 h-full">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollPrev2}>{"<"}</button>
                                <div className="flex flex-col h-full justify-between">
                                    <p className="text-sm font-thin text-gray-800 italic">
                                        Edisona umožňuje, aby mé děti získaly kompetence potřebné pro život, naučily se pracovat se vztahy k ostatním lidem i v rámci skupiny a měly znalosti o světě v širokých souvislostech. Jsem rád, že je jim to díky Edisoně dostupné.
                                    </p>
                                    <p className="font-bold text-sm pt-2">Rodič žáka sedmého ročníku</p>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollNext2}>{">"}</button>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] min-w-0">
                            <div className="flex flex-row items-center h-full gap-x-4 px-2 pt-5 pb-8">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollPrev2}>{"<"}</button>
                                <div className="flex flex-col justify-between h-full">
                                    <p className="text-sm font-thin text-gray-800 italic">
                                        Tuto školu bych přála zažít každému dítěti. Rozvíjení osobnosti, sebevědomí a znalosti získané nejen za lavicí. Tady neznají děti stres a průvodci (učitelé) jsou jim oporou. Děkujeme, že můžeme být součástí Edisony.
                                    </p>
                                    <p className="font-bold text-sm pt-2">Rodič žáka osmého ročníku</p>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollNext2}>{">"}</button>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] min-w-0">
                            <div className="flex flex-row items-center h-full gap-x-4 px-2 pt-5 pb-8">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollPrev2}>{"<"}</button>
                                <div className="flex flex-col justify-between  h-full">
                                    <p className="text-sm font-thin text-gray-800 italic">
                                        Naše děti jsou v Edisoně v bezpečném a podnětném prostředí. Edisona má významný vliv nejen na naše děti, ale i na nás rodiče. Přispěla k našemu seberozvoji i k poznání nových přátel.

                                    </p>
                                    <p className="font-bold text-sm pt-2">Rodič žáků sedmého ročníku</p>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollNext2}>{">"}</button>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] min-w-0">
                            <div className="flex flex-row items-center h-full gap-x-4 px-2 pt-5 pb-8">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollPrev2}>{"<"}</button>
                                <div className="flex flex-col justify-between h-full">
                                    <p className="text-sm font-thin text-gray-800 italic">
                                        Edisona je naší dceři nejlepší pomocnou rukou, která ji doprovází na cestě ke hledání svého potenciálu. Servíruje jí nové znalosti a dovednosti v úměrně míře. Neměli jsme tedy na konci školního roku doma znechucenou ani přetíženou prvňačku, zato máme natěšenou budoucí druhačku, která se těší zpátky do školy. </p>
                                    <p className="font-bold text-sm pt-2">Rodič žáka prvního trojročí</p>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollNext2}>{">"}</button>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] min-w-0">
                            <div className="flex flex-row h-full items-center gap-x-4 px-2 pt-5 pb-8">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollPrev2}>{"<"}</button>
                                <div className="flex flex-col h-full justify-between">
                                    <p className="text-sm font-thin text-gray-800 italic">
                                        V prostředí školy se setkala i s úskalími a trápením. Ale s důvěrou a prakticky ihned jsme si vždy (rodina a vedení školy) dokázali problém pojmenovat. Velmi si vážím toho, jak profesionálně se vždy nastavilo řešení vzájemnou komunikací. Strkání hlavy do písku před věcmi, které potřebují řešení, tady nenajdete.</p>
                                    <p className="font-bold text-sm pt-2">Rodič žáka prvního trojročí</p>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollNext2}>{">"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col relative isolate overflow-hidden text-white py-10 rounded-2xl drop-shadow-md">
                <div className="absolute inset-0 -z-10 h-full w-full ">
                    <Image src={RodiceOSkole} alt={"rodiče o škole"} className="h-full"/>
                </div>
                <h2 className=" font-medium text-3xl text-center">Rodiče o škole</h2>
                <div className="overflow-hidden z-10" ref={emblaRef}>
                    <div className="flex">
                        <div className="flex-[0_0_100%] min-w-0">
                            <div className="flex flex-row w-full justify-around pt-12 items-center">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0 text-black" onClick={scrollPrev}>{"<"}</button>
                                <div className="flex flex-row gap-x-14">
                                    <div className="flex flex-col">
                                        <p className=" font-light italic max-w-md">
                                            Jsme moc rádi, že našim dětem můžeme nabídnout školu, kde je vedou k sebevědomí a jistotě i k tomu, že vyjádřit své názory a pocity je úplně v pořádku. Sice se to v dnešní společnosti hodně posouvá, není to ovšem ještě na mnoha školách pravidlem. Velice si vážíme přirozeného způsobu komunikace jak s dětmi, tak s rodiči. Ukazovat dětem, že vše je řešitelné, je pro nás mnohem důležitější než cpát do nich mraky informací.
                                        </p>
                                        <p className="font-bold text-sm pt-2">Rodič žáka třetího ročníku</p>

                                    </div>
                                    <div className="flex flex-col">
                                        <p className=" font-light italic max-w-md">
                                            Edisona umožňuje, aby mé děti získaly kompetence potřebné pro život, naučily se pracovat se vztahy k ostatním lidem i v rámci skupiny a měly znalosti o světě v širokých souvislostech. Jsem rád, že je jim to díky Edisoně dostupné.
                                        </p>
                                        <p className="font-bold text-sm pt-2">Rodič žáka sedmého ročníku</p>

                                    </div>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0 text-black" onClick={scrollNext}>{">"}</button>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] min-w-0">
                            <div className="flex flex-row w-full justify-around pt-12 items-center">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0 text-black" onClick={scrollPrev}>{"<"}</button>
                                <div className="flex flex-row gap-x-14">
                                    <div className="flex flex-col">
                                        <p className=" font-light italic max-w-md">
                                            Tuto školu bych přála zažít každému dítěti. Rozvíjení osobnosti, sebevědomí a znalosti získané nejen za lavicí. Tady neznají děti stres a průvodci (učitelé) jsou jim oporou. Děkujeme, že můžeme být součástí Edisony.
                                        </p>
                                        <p className="font-bold text-sm pt-2">Rodič žáka osmého ročníku</p>

                                    </div>
                                    <div className="flex flex-col">
                                        <p className=" font-light italic max-w-md">
                                            Naše děti jsou v Edisoně v bezpečném a podnětném prostředí. Edisona má významný vliv nejen na naše děti, ale i na nás rodiče. Přispěla k našemu seberozvoji i k poznání nových přátel.
                                        </p>
                                        <p className="font-bold text-sm pt-2">Rodič žáků sedmého ročníku</p>

                                    </div>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0 text-black" onClick={scrollNext}>{">"}</button>
                            </div>
                        </div>

                        <div className="flex-[0_0_100%] min-w-0">
                            <div className="flex flex-row w-full justify-around pt-12 items-center">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0 text-black" onClick={scrollPrev}>{"<"}</button>
                                <div className="flex flex-row gap-x-14">
                                    <div className="flex flex-col">
                                        <p className=" font-light italic max-w-md">
                                            Edisona je naší dceři nejlepší pomocnou rukou, která ji doprovází na cestě ke hledání svého potenciálu. Servíruje jí nové znalosti a dovednosti v úměrně míře. Neměli jsme tedy na konci školního roku doma znechucenou ani přetíženou prvňačku, zato máme natěšenou budoucí druhačku, která se těší zpátky do školy. </p>
                                        <p className="font-bold text-sm pt-2">Rodič žáka prvního trojročí</p>

                                    </div>
                                    <div className="flex flex-col">
                                        <p className=" font-light italic max-w-md">
                                            V prostředí školy se setkala i s úskalími a trápením. Ale s důvěrou a prakticky ihned jsme si vždy (rodina a vedení školy) dokázali problém pojmenovat. Velmi si vážím toho, jak profesionálně se vždy nastavilo řešení vzájemnou komunikací. Strkání hlavy do písku před věcmi, které potřebují řešení, tady nenajdete.</p>
                                        <p className="font-bold text-sm pt-2">Rodič žáka prvního trojročí</p>

                                    </div>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0 text-black" onClick={scrollNext}>{">"}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}