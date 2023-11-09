import Image from "next/image";
import polygonIcon from "@/app/(general-media)/(shapes)/polygonicon.png";
import rectangleIcon from "@/app/(general-media)/(shapes)/rectangleicon.png";
import ellipseIcon from "@/app/(general-media)/(shapes)/ellipseicon.png";

export default function REMD(){
    return(
        <div className=" w-full h-auto  flex flex-row justify-between px-32 ">
            <div className="pt-10 rotate-90">
                <Image src={rectangleIcon} alt={"rectangle Icon"} className="object-cover object-scale-down w-14 h-14 " />
            </div>
            <div className="pt-12 rotate-180">
                <Image src={ellipseIcon} alt={"ellipse Icon"} className="object-cover w-8 h-8" />
            </div>
        </div>
    )
}