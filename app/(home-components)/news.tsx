"use client"
import Aktualita from "@/app/(home-components)/Aktualita";
import tdt from "../(home-media)/3D-2.png"
import PocketBase from "pocketbase";
import facebookLogo from "../(home-media)/fb-logo.svg"
import AktualitaSkeleton from "@/app/(home-components)/Aktualita-skeleton";
import NejaktualnejsiSpravyBanner from "@/app/(home-components)/nejaktualnejsi-spravy-banner";
import {Suspense, useEffect, useState} from "react";
interface aktualita {
    title:string;
    description:string;
    thumbnail:string;
    id:string;
}

export default function News(){
    const [data, setData] = useState<Array<aktualita>>(
        []
    );
    const [loading, setLoading] = useState(true);
    const pb = new PocketBase('https://pocketbase-production-ab0e.up.railway.app');
    async function fetchData() {
        try {
            setLoading(true)
            const response = await pb.collection("aktuality").getList(1,4,{
                sort:'-datum'
            })
            const returnedData:Array<aktualita> = response.items.map((record:any) =>({
                title:record.title,
                description:record.preview_text,
                thumbnail:record.preview_image,
                id:record.id,
            }))
            setData(returnedData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return(
        <div className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-center pb-10">Aktuální dění</h2>
            <NejaktualnejsiSpravyBanner />
            {loading?
                <div className="flex flex-row gap-x-10 pt-16 pb-14">
                    <div className="mx-auto">
                        <AktualitaSkeleton />
                    </div>
                    <div className="hidden sm:inline">
                        <AktualitaSkeleton />
                    </div>
                    <div className="hidden md:inline">
                        <AktualitaSkeleton />
                    </div>
                    <div className="hidden lg:inline">
                        <AktualitaSkeleton />
                    </div>
                </div>:
                <div className="flex flex-row gap-x-10 pt-16 pb-14">
                    <div className="mx-auto">
                        <Aktualita id={data[0].id} title={data[0].title} description={data[0].description} thumbnail={"https://pocketbase-production-ab0e.up.railway.app/api/files/xyozhjstnob0eer/"+data[0].id+"/"+data[0].thumbnail}  />
                    </div>
                    <div className="hidden sm:inline">
                        <Aktualita id={data[1].id} title={data[1].title} description={data[1].description} thumbnail={"https://pocketbase-production-ab0e.up.railway.app/api/files/xyozhjstnob0eer/"+data[1].id+"/"+data[1].thumbnail}  />
                    </div>
                    <div className="hidden md:inline">
                        <Aktualita id={data[2].id} title={data[2].title} description={data[2].description} thumbnail={"https://pocketbase-production-ab0e.up.railway.app/api/files/xyozhjstnob0eer/"+data[2].id+"/"+data[2].thumbnail}  />
                    </div>
                    <div className="hidden lg:inline">
                        <Aktualita  id={data[3].id} title={data[3].title} description={data[3].description} thumbnail={"https://pocketbase-production-ab0e.up.railway.app/api/files/xyozhjstnob0eer/"+data[3].id+"/"+data[3].thumbnail}  />
                    </div>
                </div>
            }


            <a href="/novinky" className="w-fit bg-white rounded-2xl flex flex-col items-center justify-center mx-auto px-16 py-2 drop-shadow-md font-semibold md:bg-black md:text-white tracking-wide">Všechny články</a>
        </div>
        </div>
    )
}