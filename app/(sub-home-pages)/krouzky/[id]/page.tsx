import PocketBase from "pocketbase";
import NovinkaHeader from "@/app/(sub-home-pages)/novinky/[id]/(novinka-id-components)/header";
import SubHomeTopMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeTopMenu";
import SubHomeMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeMenu";
import DisplayTextAktualita from "@/app/(sub-home-pages)/novinky/[id]/(novinka-id-components)/displayTextAktualita";
import ImageArray from "@/app/(sub-home-pages)/novinky/[id]/(novinka-id-components)/imageArray";
import HomeFooter from "@/app/(home-components)/homeFooter";
import HeaderKrouzek from "@/app/(sub-home-pages)/krouzky/[id]/(krouzky-id-components)/headerKrouzek";
import DisplayTextKrouzek from "@/app/(sub-home-pages)/krouzky/[id]/(krouzky-id-components)/displayTextKrouzek";
interface Krouzek {
    id:string;
    title:string;
    datum:string;
    text:string;
    previewText:string;
    imageArray:Array<string>;
    previewImage:string;
}
export async function generateMetadata({params}: { params: {id:string} }) {
    // read route params
    const id = params.id;

    // fetch data
    const pb = new PocketBase('https://pocketbase-production-ab0e.up.railway.app');
    const record = await pb.collection('krouzky').getOne(params.id, {
    });
    // return a dynamic title
    return {
        title: record.title + " - Edisona.cz"
    };
}


export default async function Page({params}: { params: {id:string} }){
    const pb = new PocketBase('https://pocketbase-production-ab0e.up.railway.app');
    const record = await pb.collection('krouzky').getOne(params.id, {
    });
    function formatDate(inputString: string | number | Date) {
        const date = new Date(inputString);
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1; // Months are 0-indexed
        const year = date.getUTCFullYear();

        return `${day}.${month}.${year}`;
    }
    const krouzek:Krouzek = {
        id:params.id,
        title:record.title,
        datum:formatDate(record.datum),
        text:record.text,
        previewText:record.preview_text,
        imageArray:record.images_array,
        previewImage:record.preview_image
    }
    return(
        <main className="bg-[#F4F4F4]">
            <section className="bg-[#F4F4F4]">
                <div className="relative">
                    <SubHomeTopMenu />
                </div>
            </section>
            <section className="pt-20">
                <HeaderKrouzek title={krouzek.title} previewImage={krouzek.previewImage} datum={krouzek.datum} id={krouzek.id} />
            </section>
            <section className="pt-10 mx-auto max-w-4xl px-6 lg:px-8">
                <DisplayTextKrouzek text={krouzek.text} />
            </section>
            <section className="pt-10 pb-16 mx-auto max-w-4xl px-6 lg:px-8">
                <ImageArray apiFileDirId={"mz2k9c7rmd5db1b"} id={params.id} imageArray={krouzek.imageArray} />
            </section>
            <section className="">
                <HomeFooter />
            </section>
        </main>
    )
}