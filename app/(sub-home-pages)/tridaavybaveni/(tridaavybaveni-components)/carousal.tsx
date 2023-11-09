"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import carousalOne from "../../(sub-home-media)/carousalOne.png"
import {useCallback, useEffect} from "react";
export default function TridaAVybaveniCarousal(){
    const [emblaRef, emblaApi] = useEmblaCarousel()
    useEffect(()=>{
        if(emblaApi){
            console.log(emblaApi.slideNodes())
        }
    },[emblaApi])
    const scrollNext = useCallback(
        ()=> emblaApi && emblaApi.scrollNext(),
        [emblaApi]
    )
    const scrollPrev = useCallback(
        ()=> emblaApi && emblaApi.scrollPrev(),
        [emblaApi]
    )
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    <div className="flex-[0_0_100%] min-w-0">
                        <div className="flex flex-col bg-[#DB574E] rounded-2xl overflow-hidden drop-shadow-md">
                            <div className="relative flex flex-row items-center">
                                <div className="absolute z-20 pl-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollPrev}>
                                        {"<"}
                                    </button>
                                </div>
                                <Image src={carousalOne} alt={"carousal one"} className="rounded-b-xl drop-shadow-md object-cover" />
                                <div className="z-10 absolute w-full flex flex-col items-end pr-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollNext}>
                                        {">"}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row px-4 md:px-10 py-4 md:py-7 gap-x-5 md:items-center">
                                <div className="text-white shrink-0 font-medium">Učebna 3.trojročí</div>
                                <div className="hidden md:flex self-stretch w-[2px] bg-white"></div>
                                <div className="text-white font-light text-sm">
                                    V budově se nacházejí tři kmenové třídy a třída pro 9. ročník. Při rozdělení žáků do menších skupin lze využít zázemí dvou menších učeben. Třídy jsou zařízeny novým nábytkem a jsou vybaveny televizí umožňující snadné zobrazení a sdílení výukových materiálů. K dispozici je řada pomůcek ke vzdělávání, včetně 3D tiskárny. Veškeré prostory jsou v dosahu školní wifi. Chodby jsou plné knih, k zapůjčení jsou deskové hry i billiard a stolní tenis. V ateliéru bohatě vybaveném pro kreativní činnost máme i keramický kruh a novou pec, v hudebně nechybí piano a akustické hudební nástroje.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[0_0_100%] min-w-0">
                        <div className="flex flex-col bg-[#DB574E] rounded-2xl overflow-hidden drop-shadow-md">
                            <div className="relative flex flex-row items-center">
                                <div className="absolute z-20 pl-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollPrev}>
                                        {"<"}
                                    </button>
                                </div>
                                <Image src={carousalOne} alt={"carousal one"} className="rounded-b-xl drop-shadow-md object-cover" />
                                <div className="z-10 absolute w-full flex flex-col items-end pr-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollNext}>
                                        {">"}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row px-4 md:px-10 py-4 md:py-7 gap-x-5 md:items-center">
                                <div className="text-white shrink-0 font-medium">Učebna 5.trojročí</div>
                                <div className="hidden md:flex self-stretch w-[2px] bg-white"></div>
                                <div className="text-white font-light text-sm">
                                    V budově se nacházejí tři kmenové třídy a třída pro 9. ročník. Při rozdělení žáků do menších skupin lze využít zázemí dvou menších učeben. Třídy jsou zařízeny novým nábytkem a jsou vybaveny televizí umožňující snadné zobrazení a sdílení výukových materiálů. K dispozici je řada pomůcek ke vzdělávání, včetně 3D tiskárny. Veškeré prostory jsou v dosahu školní wifi. Chodby jsou plné knih, k zapůjčení jsou deskové hry i billiard a stolní tenis. V ateliéru bohatě vybaveném pro kreativní činnost máme i keramický kruh a novou pec, v hudebně nechybí piano a akustické hudební nástroje.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[0_0_100%] min-w-0">
                        <div className="flex flex-col bg-[#DB574E] rounded-2xl overflow-hidden drop-shadow-md">
                            <div className="relative flex flex-row items-center">
                                <div className="absolute z-20 pl-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollPrev}>
                                        {"<"}
                                    </button>
                                </div>
                                <Image src={carousalOne} alt={"carousal one"} className="rounded-b-xl drop-shadow-md object-cover" />
                                <div className="z-10 absolute w-full flex flex-col items-end pr-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollNext}>
                                        {">"}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row px-4 md:px-10 py-4 md:py-7 gap-x-5 md:items-center">
                                <div className="text-white shrink-0 font-medium">Učebna 9.trojročí</div>
                                <div className="hidden md:flex self-stretch w-[2px] bg-white"></div>
                                <div className="text-white font-light text-sm">
                                    V budově se nacházejí tři kmenové třídy a třída pro 9. ročník. Při rozdělení žáků do menších skupin lze využít zázemí dvou menších učeben. Třídy jsou zařízeny novým nábytkem a jsou vybaveny televizí umožňující snadné zobrazení a sdílení výukových materiálů. K dispozici je řada pomůcek ke vzdělávání, včetně 3D tiskárny. Veškeré prostory jsou v dosahu školní wifi. Chodby jsou plné knih, k zapůjčení jsou deskové hry i billiard a stolní tenis. V ateliéru bohatě vybaveném pro kreativní činnost máme i keramický kruh a novou pec, v hudebně nechybí piano a akustické hudební nástroje.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full items-center pt-5">
                <div className="flex flex-row gap-x-2">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 border-2 border-black rounded-full"></div>
                    <div className="w-2 h-2 border-2 border-black rounded-full"></div>
                    <div className="w-2 h-2 border-2 border-black rounded-full"></div>
                    <div className="w-2 h-2 border-2 border-black rounded-full"></div>
                </div>
            </div>
        </div>
    )
}