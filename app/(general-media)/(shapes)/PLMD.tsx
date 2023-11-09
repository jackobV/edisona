import Image from "next/image";
import polygonIcon from "@/app/(general-media)/(shapes)/polygonicon.png";
import rectangleIcon from "@/app/(general-media)/(shapes)/rectangleicon.png";
import ellipseIcon from "@/app/(general-media)/(shapes)/ellipseicon.png";

export default function PLMD(){
    return(
        <div className=" w-full h-auto  flex flex-row justify-start max-w-8xl mx-auto px-8">
            <div className="pt-10 rotate-90">
                <Image src={polygonIcon} alt={"polygon Icon"} className="object-cover object-scale-down w-14 h-14 " />
            </div>
        </div>
    )
}