import Image from "next/image";
import edookitbanner from "../../(sub-home-media)/edookit-banner.png"
export default function Edookit(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
                <h2 className="font-semibold text-2xl tracking-tight">edookit</h2>
                <p className="max-w-3xl pt-8 font-light text-gray-600 ">
                    Vizí Edisony je poskytovat základní vzdělávání cestou přirozeného a vědomého
                    učení. U dětí se zaměřujeme především na rozvíjení schopnosti sebepoznání,
                    objevování a posilování svých talentů a silných stránek.
                </p>
            </div>
            <div className="max-w-md mx-auto pt-10">
                <div className="rounded-md drop-shadow-md overflow-hidden">
                    <Image src={edookitbanner} alt={"edookit banner"} />
                </div>
            </div>
        </div>
    )
}