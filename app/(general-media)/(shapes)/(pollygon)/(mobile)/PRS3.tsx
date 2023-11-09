import Image from "next/image";
import polygonIcon from "@/app/(general-media)/(shapes)/polygonicon.png";
import rectangleIcon from "@/app/(general-media)/(shapes)/rectangleicon.png";
import ellipseIcon from "@/app/(general-media)/(shapes)/ellipseicon.png";

export default function PRS3(){
    return(
        <div className=" w-full h-auto  flex flex-row justify-end  max-w-3xl mx-auto px-8">
            <div className="">
                <Image src={polygonIcon} alt={"polygon Icon"} className="object-cover object-scale-down w-8 h-8" />
            </div>
        </div>
    )
}