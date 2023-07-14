import Aktualita from "@/app/(home-components)/Aktualita";

interface aktualita {
    title:string;
    description:string;
    link:string;
    thumbnail:string;
}
const Aktuality:Array<aktualita> = [
    {
        title:"Napsali o nás - časopis Finmag 0/22",
        description: "Děkujeme za milou návštěvu ve škole a příjemný rozhovor",
        link:"https://www.google.com/",
        thumbnail: "https://forrit-one-msedu-p1-consumables.azureedge.net/media/af3e16fc-b22f-4cdb-b446-cc7a5773f587/1920-Panel3-FeatureGroup-TeacherTools.jpg"
    },
    {
        title:"napsali o nás - časopis Finmag 0/22",
        description: "Děkujeme za milou návštěvu ve škole a příjemný rozhovor",
        link:"https://www.google.com/",
        thumbnail: "https://forrit-one-msedu-p1-consumables.azureedge.net/media/af3e16fc-b22f-4cdb-b446-cc7a5773f587/1920-Panel3-FeatureGroup-TeacherTools.jpg"
    },
    {
        title:"napsali o nás - časopis Finmag 0/22",
        description: "Děkujeme za milou návštěvu ve škole a příjemný rozhovor",
        link:"https://www.google.com/",
        thumbnail: "https://forrit-one-msedu-p1-consumables.azureedge.net/media/af3e16fc-b22f-4cdb-b446-cc7a5773f587/1920-Panel3-FeatureGroup-TeacherTools.jpg"
    },
    {
        title:"napsali o nás - časopis Finmag 0/22",
        description: "Děkujeme za milou návštěvu ve škole a příjemný rozhovor",
        link:"https://www.google.com/",
        thumbnail: "https://forrit-one-msedu-p1-consumables.azureedge.net/media/af3e16fc-b22f-4cdb-b446-cc7a5773f587/1920-Panel3-FeatureGroup-TeacherTools.jpg"
    },
]

export default function News(){
    return(
        <div className="bg-[#F4F4F4] rounded-b-2xl pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-xl md:text-3xl font-bold tracking-tight text-center pt-10 pb-5">Aktuální dění</h2>
            <button className="flex flex-row w-full justify-around bg-white md:bg-[#1977F3] md:max-w-md mx-auto items-center py-2 rounded-md md:justify-center md:gap-x-4 drop-shadow-sm"><div className="h-6 w-6 bg-[#1977F3] md:bg-white rounded-full"></div><p className="text-sm text-[#1977F3] md:text-white">Nejaktuálnější zprávy najdete na Facebooku</p></button>
            <div className="flex flex-row gap-x-10 pt-10 pb-5">
                <div className="">
                    <Aktualita title={Aktuality[0].title} description={Aktuality[0].description} link={Aktuality[0].link} thumbnail={Aktuality[0].thumbnail} />
                </div>
                <div className="hidden md:inline">
                    <Aktualita title={Aktuality[0].title} description={Aktuality[0].description} link={Aktuality[0].link} thumbnail={Aktuality[0].thumbnail} />
                </div>
                <div className="hidden lg:inline">
                    <Aktualita title={Aktuality[0].title} description={Aktuality[0].description} link={Aktuality[0].link} thumbnail={Aktuality[0].thumbnail} />
                </div>
                <div className="hidden xl:inline">
                    <Aktualita title={Aktuality[0].title} description={Aktuality[0].description} link={Aktuality[0].link} thumbnail={Aktuality[0].thumbnail} />
                </div>
            </div>
            <button className="bg-white rounded-md flex flex-col items-center justify-center mx-auto px-16 py-2 drop-shadow-md font-semibold">Všechny články</button>
        </div>
        </div>
    )
}