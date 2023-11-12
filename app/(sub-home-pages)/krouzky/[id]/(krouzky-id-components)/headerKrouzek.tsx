import Image from "next/image";

interface NovinkaHeaderContent{
    id:string;
    title:string;
    previewImage:string;
    datum:string;
}
export default function HeaderKrouzek(props:NovinkaHeaderContent){
    return(
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-3xl font-semibold tracking-tight text-center">
                {props.title}
            </h1>
            <div className="pt-5 text-center font-light text-gray-400">
                {props.datum}
            </div>
            <div className="flex flex-col items-center object-contain  pt-5">
                <Image src={"https://pocketbase-production-ab0e.up.railway.app/api/files/mz2k9c7rmd5db1b/"+props.id+"/"+props.previewImage} alt={props.title} width={500} height={400} className="rounded-xl overflow-hidden drop-shadow-md" />
            </div>
        </div>
    )
}