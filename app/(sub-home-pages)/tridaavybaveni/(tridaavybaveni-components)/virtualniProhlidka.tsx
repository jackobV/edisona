import TridaAVybaveniCarousal from "@/app/(sub-home-pages)/tridaavybaveni/(tridaavybaveni-components)/carousal";
import Image from "next/image";
import virtualniProhledkaPreview from "../../(sub-home-media)/virtualniProhledkaPreview.png"
export default function VirtualniProhlidka(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-semibold text-2xl tracking-tight pb-10">Virtuální prohlídka školy</h1>
            </div>
            <div className="aspect-video rounded-2xl drop-shadow-md overflow-hidden border-0">
                <iframe width='853' height='480' className="w-full aspect-video " src='https://my.matterport.com/show/?m=E8Tzw8FHvK2' frameBorder='0'
                        allowFullScreen allow='xr-spatial-tracking'></iframe>
            </div>
        </div>
    )
}