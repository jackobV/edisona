"use client"
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import RodiceOSkole from "../(home-media)/rodiceOSkole.png"
import {useCallback, useEffect} from "react";
export default function Testimonials(){
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [emblaRef2, emblaApi2] = useEmblaCarousel()

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
                            <div className="flex flex-row items-center gap-x-4 px-2 pt-5 pb-8">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollPrev2}>{"<"}</button>
                                <div className="flex flex-col">
                                    <p className="text-sm font-thin text-gray-800 italic">
                                        "Kruasdfci hraje svém civilního má naskytne zpívat ji od kope sta u
                                        mi cosi oč ah zub zloba pomstít. Jím bok si, udal, dojde pomenší phlox otevřte sedmého mě noční oceán, tajil osmý
                                        schopen vobleky.“
                                    </p>
                                    <p className="font-bold text-sm pt-2">Petr, táta Julie ze 4. ročníku</p>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollNext2}>{">"}</button>
                            </div>
                        </div>
                        <div className="flex-[0_0_100%] min-w-0">
                            <div className="flex flex-row items-center gap-x-4 px-2 pt-5 pb-8">
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollPrev2}>{"<"}</button>
                                <div className="flex flex-col">
                                    <p className="text-sm font-thin text-gray-800 italic">
                                        "Kruasdfci hraje svém civilního má naskytne zpívat ji od kope sta u
                                        mi cosi oč ah zub zloba pomstít. Jím bok si, udal, dojde pomenší phlox otevřte sedmého mě noční oceán, tajil osmý
                                        schopen vobleky.“
                                    </p>
                                    <p className="font-bold text-sm pt-2">Petr, táta Julie ze 4. ročníku</p>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0" onClick={scrollNext2}>{">"}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center gap-x-3 pb-10">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <div className="w-2 h-2 border border-black rounded-full"></div>

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
                                            "Kruci hraje svém civilního má naskytne zpívat ji od kope sta u
                                            mi cosi oč ah zub zloba pomstít. Jím bok si, udal, dojde pomenší phlox otevřte sedmého mě noční oceán, tajil osmý
                                            schopen vobleky.“
                                        </p>
                                        <p className="font-bold text-sm pt-2">Petr, táta Julie ze 4. ročníku</p>

                                    </div>
                                    <div className="flex flex-col">
                                        <p className=" font-light italic max-w-md">
                                            "Kruci hraje svém civilního má naskytne zpívat ji od kope sta u
                                            mi cosi oč ah zub zloba pomstít. Jím bok si, udal, dojde pomenší phlox otevřte sedmého mě noční oceán, tajil osmý
                                            schopen vobleky.“
                                        </p>
                                        <p className="font-bold text-sm pt-2">Petr, táta Julie ze 4. ročníku</p>

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
                                            "Kruci hraje svém civilního má naskytne zpívat ji od kope sta u
                                            mi cosi oč ah zub zloba pomstít. Jím bok si, udal, dojde pomenší phlox otevřte sedmého mě noční oceán, tajil osmý
                                            schopen vobleky.“
                                        </p>
                                        <p className="font-bold text-sm pt-2">Petr, táta Julie ze 4. ročníku</p>

                                    </div>
                                    <div className="flex flex-col">
                                        <p className=" font-light italic max-w-md">
                                            "Kruci hraje svém civilního má naskytne zpívat ji od kope sta u
                                            mi cosi oč ah zub zloba pomstít. Jím bok si, udal, dojde pomenší phlox otevřte sedmého mě noční oceán, tajil osmý
                                            schopen vobleky.“
                                        </p>
                                        <p className="font-bold text-sm pt-2">Petr, táta Julie ze 4. ročníku</p>

                                    </div>
                                </div>
                                <button className="w-6 h-6 bg-gray-50 drop-shadow-md rounded-full flex flex-col items-center text-center justify-center shrink-0 text-black" onClick={scrollNext}>{">"}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-x-3 pt-12 pb-10">
                    <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                    <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                    <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                    <div className="w-2 h-2 border-2 border-white rounded-full"></div>
                    <div className="w-2 h-2 border-2 border-white rounded-full"></div>

                </div>
            </div>
        </div>
    )
}