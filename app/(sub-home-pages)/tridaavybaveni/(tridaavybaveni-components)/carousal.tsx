"use client"
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";


import prvnitrojroci from "../(trojroci-media)/DSC_4866.jpg"
import druhetrojroci from "../(trojroci-media)/DSC_4801.jpg"
import tretitrojroci from "../(trojroci-media)/DSC_4845.jpg"
import devatyrocnik from "../(trojroci-media)/DSC_4895.jpg"
import atelier from "../(trojroci-media)/DSC_6281.jpg"
import hudebna from "../(trojroci-media)/DSC_6405.jpg"
import studovna from "../(trojroci-media)/DSC_6187.jpg"


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
                                    </button>
                                </div>
                                <Image src={prvnitrojroci} alt={"carousal one"} className="rounded-b-xl drop-shadow-md object-cover" />
                                <div className="z-10 absolute w-full flex flex-col items-end pr-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollNext}>
                                        {">"}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row px-4 md:px-10 py-4 md:py-7 gap-x-5 md:items-center">
                                <div className="text-white shrink-0 font-medium">Učebna 1.trojročí</div>
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
                                <Image src={druhetrojroci} alt={"carousal one"} className="rounded-b-xl drop-shadow-md object-cover" />
                                <div className="z-10 absolute w-full flex flex-col items-end pr-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollNext}>
                                        {">"}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row px-4 md:px-10 py-4 md:py-7 gap-x-5 md:items-center">
                                <div className="text-white shrink-0 font-medium">Učebna 2.trojročí</div>
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
                                <Image src={tretitrojroci} alt={"carousal one"} className="rounded-b-xl drop-shadow-md object-cover" />
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
                                <Image src={devatyrocnik} alt={"carousal one"} className="rounded-b-xl drop-shadow-md object-cover" />
                                <div className="z-10 absolute w-full flex flex-col items-end pr-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollNext}>
                                        {">"}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row px-4 md:px-10 py-4 md:py-7 gap-x-5 md:items-center">
                                <div className="text-white shrink-0 font-medium">Učebna 9.třídy</div>
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
                                <Image src={atelier} alt={"carousal one"} className="rounded-b-xl drop-shadow-md object-cover" />
                                <div className="z-10 absolute w-full flex flex-col items-end pr-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollNext}>
                                        {">"}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row px-4 md:px-10 py-4 md:py-7 gap-x-5 md:items-center">
                                <div className="text-white shrink-0 font-medium">Ateliér</div>
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
                                <Image src={hudebna} alt={"carousal one"} className="rounded-b-xl drop-shadow-md object-cover" />
                                <div className="z-10 absolute w-full flex flex-col items-end pr-5">
                                    <button className="w-10 h-10 rounded-full bg-white text-2xl" onClick={scrollNext}>
                                        {">"}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row px-4 md:px-10 py-4 md:py-7 gap-x-5 md:items-center">
                                <div className="text-white shrink-0 font-medium">Hudebna</div>
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
                                <Image src={studovna} alt={"carousal one"} className="rounded-b-xl drop-shadow-md object-cover" />
                                <div className="z-10 absolute w-full flex flex-col items-end pr-5">

                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row px-4 md:px-10 py-4 md:py-7 gap-x-5 md:items-center">
                                <div className="text-white shrink-0 font-medium">Studovna</div>
                                <div className="hidden md:flex self-stretch w-[2px] bg-white"></div>
                                <div className="text-white font-light text-sm">
                                    V budově se nacházejí tři kmenové třídy a třída pro 9. ročník. Při rozdělení žáků do menších skupin lze využít zázemí dvou menších učeben. Třídy jsou zařízeny novým nábytkem a jsou vybaveny televizí umožňující snadné zobrazení a sdílení výukových materiálů. K dispozici je řada pomůcek ke vzdělávání, včetně 3D tiskárny. Veškeré prostory jsou v dosahu školní wifi. Chodby jsou plné knih, k zapůjčení jsou deskové hry i billiard a stolní tenis. V ateliéru bohatě vybaveném pro kreativní činnost máme i keramický kruh a novou pec, v hudebně nechybí piano a akustické hudební nástroje.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}