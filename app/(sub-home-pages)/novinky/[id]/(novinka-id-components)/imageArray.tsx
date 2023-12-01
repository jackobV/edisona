import Image from "next/image";
interface Images{
    id:string;
    apiFileDirId: string;
    imageArray:Array<string>;
}
export default function ImageArray(props:Images){

    return(

            <div className=" grid grid-cols-2 xl:grid-cols-3  gap-x-4 gap-y-4">
                        {props.imageArray.map((item:any) => (
                            <div className="flex flex-col items-center">
                                <Image src={"https://pocketbase-production-ab0e.up.railway.app/api/files/"+props.apiFileDirId+"/"+props.id+"/"+item+"?thumb=100x300"} alt={item} width={300} height={300} className="rounded-xl overflow-hidden drop-shadow-md"></Image>
                            </div>
                        ))}
            </div>
    )
}