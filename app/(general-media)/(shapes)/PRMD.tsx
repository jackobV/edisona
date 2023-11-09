import Image from "next/image";
import ellipseIcon from "@/app/(general-media)/(shapes)/ellipseicon.png";
import rectangleIcon from "@/app/(general-media)/(shapes)/rectangleicon.png";
import polygonIcon from "@/app/(general-media)/(shapes)/polygonicon.png";

export default function PRMD(){
    return(
        <div className=" w-full h-auto  flex flex-row justify-between max-w-5xl mx-auto px-8">
            <div className="pt-12 rotate-90">
                <Image src={polygonIcon} alt={"polygon Icon"} className="object-cover w-10 h-10" />
            </div>
            <div className="pt-10 rotate-90">
                <Image src={rectangleIcon} alt={"rectangle Icon"} className="object-cover object-scale-down w-12 h-12 " />
            </div>
        </div>
    )
}