"use client"
import PocketBase from 'pocketbase';
import {useEffect, useState} from "react";
import { Suspense } from 'react'
import Aktualita from "@/app/(home-components)/Aktualita";
import AktualitaSkeleton from "@/app/(home-components)/Aktualita-skeleton";
interface aktualita {
    title:string;
    description:string;
    thumbnail:string;
    id:string;
}
export default function NovinkyFullArticles(){
    const [data, setData] = useState<Array<aktualita>>(
        []
    );
    const [loading, setLoading] = useState(true);
    const [loadingMoreData,setLoadingMoreData] = useState(false);
    const [page,setPage] = useState(1)
    const [end,setEnd] = useState(false);
    async function fetchData() {
        try {
            setLoading(true)
            const response = await pb.collection("aktuality").getList(page,8,{
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

    async function fetchMoreData() {
        try {
            setLoadingMoreData(true)
            const response = await pb.collection("aktuality").getList(page,8)
            if (response.totalPages >= page){
                const returnedData:Array<aktualita> = response.items.map((record:any) =>({
                    title:record.title,
                    description:record.preview_text,
                    thumbnail:record.preview_image,
                    id:record.id,
                }))
                setLoading(false);
                setLoadingMoreData(false)
                setData(data => [...data, ...returnedData]);
            }else{
                setEnd(true);
                setLoading(false);
                setLoadingMoreData(false)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const pb = new PocketBase('https://pocketbase-production-ab0e.up.railway.app');
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(()=>{
        fetchMoreData()
    },[page])
    const loadMore = () => {
        setPage(page => page+1)
    }
    return(
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {loading ? (
                    <div className="grid grid-cols-3 gap-y-10 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-x-6 place-items-center">
                        <div className="col-span-3 w-full">
                            <AktualitaSkeleton />
                        </div>
                        <div className="col-span-3 w-full">
                            <AktualitaSkeleton />
                        </div>
                        <div className="col-span-3 w-full">
                            <AktualitaSkeleton />
                        </div>
                        <div className="col-span-3 w-full">
                            <AktualitaSkeleton />
                        </div>
                    </div>
                ) : loadingMoreData ? (
                    <div className="flex flex-col w-full">
                        <div className="grid grid-cols-3 gap-y-10 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-x-6 place-items-center">
                                {data.map((item)=>(
                                    <div className="col-span-3 w-full">
                                        <Aktualita id={item.id} title={item.title} description={item.description} thumbnail={"https://pocketbase-production-ab0e.up.railway.app/api/files/xyozhjstnob0eer/"+item.id+"/"+item.thumbnail} />
                                    </div>
                                ))}
                        </div>
                        <div className="grid grid-cols-3 gap-y-10 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-x-6 place-items-center">
                            <div className="col-span-3 w-full">
                                <AktualitaSkeleton />
                            </div>
                            <div className="col-span-3 w-full">
                                <AktualitaSkeleton />
                            </div>
                            <div className="col-span-3 w-full">
                                <AktualitaSkeleton />
                            </div>
                            <div className="col-span-3 w-full">
                                <AktualitaSkeleton />
                            </div>
                        </div>
                    </div>

                    )
                    : (
                    <div>
                        <div className="grid grid-cols-3 gap-y-10 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-x-6 place-items-center">
                            {data.map((item)=>(
                                <div className="col-span-3">
                                    <Aktualita id={item.id} title={item.title} description={item.description} thumbnail={"https://pocketbase-production-ab0e.up.railway.app/api/files/xyozhjstnob0eer/"+item.id+"/"+item.thumbnail} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {end ? (
                    <div></div>
                ):(
                    <div className="pt-20">
                        <button className="bg-white rounded-2xl flex flex-col items-center justify-center mx-auto px-16 py-3 drop-shadow-md md:bg-black md:text-white tracking-wide" onClick={loadMore}>Načíst více</button>
                    </div>

                )}

            </div>
    )
}