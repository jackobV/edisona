import Image from "next/image";
import ellipseIcon from "@/app/(general-media)/(shapes)/ellipseicon.png";
import polygonIcon from "@/app/(general-media)/(shapes)/polygonicon.png";

export default function EPSM(){
    return(
        <div className=" w-full h-auto  flex flex-row justify-between px-10 max-w-5xl mx-auto">
            <Image src={ellipseIcon} alt={"ellipse Icon"} className="object-cover w-10 h-10" />
            <div className="pt-10">
                <Image src={polygonIcon} alt={"polygon Icon"} className="object-cover object-scale-down w-10 h-10 " />
            </div>
        </div>
    )
}