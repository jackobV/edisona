import Image from "next/image";
import polygonIcon from "@/app/(general-media)/(shapes)/polygonicon.png";
import rectangleIcon from "@/app/(general-media)/(shapes)/rectangleicon.png";
import ellipseIcon from "@/app/(general-media)/(shapes)/ellipseicon.png";

export default function PR(){
    return(
        <div className=" w-full h-auto  flex flex-row justify-end  max-w-7xl mx-auto px-8">
            <div className="-rotate-90">
                <Image src={polygonIcon} alt={"pollygon Icon"} className="object-cover object-scale-down w-14 h-14 " />
            </div>
        </div>
    )
}