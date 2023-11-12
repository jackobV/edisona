import Image from "next/image";

export interface krouzek {
    title:string;
    description:string;
    thumbnail:string;
    id:string;
}
export default function Krouzek(props:krouzek){
    return(
        <div className="bg-white py-6 px-4 rounded-2xl drop-shadow-md flex flex-col items-center max-w-sm ">
            <div className="w-full">
                <a href={"krouzky/"+props.id}><h3 className="text-xl underline font-medium md:text-base md:font-normal text-start w-full">{props.title}</h3></a>
            </div>
            <div className="overflow-hidden max-w-sm h-full aspect-[4/3] ">
                <Image src={props.thumbnail+"/"} alt={"picture"}  className="pt-3 object-cover" width={400} height={300}  />
            </div>
            <p className="pt-5 font-light text-sm md:text-xs pb-3 self-start">{props.description}</p>
            <button className=" w-full md:w-11/12 bg-black text-white py-2 rounded-md drop-shadow-md md:hidden">Celý článek</button>
            <div className="hidden md:inline text-sm text-start self-start underline font-light tracking-tight"><a>Celý článek {'>'}</a></div>
        </div>
    )
}