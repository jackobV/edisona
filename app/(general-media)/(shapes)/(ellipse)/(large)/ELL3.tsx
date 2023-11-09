import Image from "next/image";
import polygonIcon from "@/app/(general-media)/(shapes)/polygonicon.png";
import rectangleIcon from "@/app/(general-media)/(shapes)/rectangleicon.png";
import ellipseIcon from "@/app/(general-media)/(shapes)/ellipseicon.png";

export default function ELL3(){
    return(
        <div className=" w-full h-auto  flex flex-row justify-start  max-w-3xl mx-auto px-8">
            <div className="">
                <Image src={ellipseIcon} alt={"ellipse Icon"} className="object-cover object-scale-down w-16 h-16 " />
            </div>
        </div>
    )
}