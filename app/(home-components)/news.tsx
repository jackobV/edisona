import Aktualita from "@/app/(home-components)/Aktualita";
import tdt from "../(home-media)/3D-2.png"
import PocketBase from "pocketbase";
import facebookLogo from "../(home-media)/fb-logo.svg"
import AktualitaSkeleton from "@/app/(home-components)/Aktualita-skeleton";
import NejaktualnejsiSpravyBanner from "@/app/(home-components)/nejaktualnejsi-spravy-banner";
interface aktualita {
    title:string;
    description:string;
    thumbnail:string;
    id:string;
}

export default async function News(){
    const pb = new PocketBase('https://pocketbase-production-ab0e.up.railway.app');
    const resultList = await pb.collection('aktuality').getList(1, 4, {
        sort: '-created',
    });
    const aktuality:Array<aktualita> = resultList.items.map((record:any) =>({
        title:record.title,
        description:record.preview_text,
        thumbnail:"https://pocketbase-production-ab0e.up.railway.app/api/files/xyozhjstnob0eer/"+record.id+"/"+record.preview_image,
        id:record.id,
    }))
    return(
        <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-center pb-10">Aktuální dění</h2>
            <NejaktualnejsiSpravyBanner />
            <div className="flex flex-row gap-x-10 pt-16 pb-14">
                <div className="mx-auto">
                        <Aktualita title={aktuality[0].title} description={aktuality[0].description} thumbnail={aktuality[0].thumbnail}  />
                </div>
                <div className="hidden sm:inline">
                        <Aktualita title={aktuality[1].title} description={aktuality[1].description} thumbnail={aktuality[1].thumbnail}  />
                </div>
                <div className="hidden md:inline">
                        <Aktualita title={aktuality[2].title} description={aktuality[2].description} thumbnail={aktuality[2].thumbnail}  />

                </div>
                <div className="hidden lg:inline">
                        <Aktualita title={aktuality[3].title} description={aktuality[3].description} thumbnail={aktuality[3].thumbnail}  />

                </div>
            </div>
            <a href="/novinky" className="w-fit bg-white rounded-2xl flex flex-col items-center justify-center mx-auto px-16 py-2 drop-shadow-md font-semibold md:bg-black md:text-white tracking-wide">Všechny články</a>
        </div>
        </div>
    )
}