import SubHomeTopMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeTopMenu";
import SubHomeMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeMenu";
import LandingTextWithCarousal
    from "@/app/(sub-home-pages)/tridaavybaveni/(tridaavybaveni-components)/landingTextWithCarousal";
import VirtualniProhlidka from "@/app/(sub-home-pages)/tridaavybaveni/(tridaavybaveni-components)/virtualniProhlidka";
import RodiceTestimonials from "@/app/(sub-home-pages)/koncepce/(koncepce-components)/rodiceTestimonials";
import PruvodciaprihlaskaCTA
    from "@/app/(sub-home-pages)/tridaavybaveni/(tridaavybaveni-components)/pruvodciaprihlaskaCTA";
import HomeFooter from "@/app/(home-components)/homeFooter";
import TridaAVybaveniCarousal from "@/app/(sub-home-pages)/tridaavybaveni/(tridaavybaveni-components)/carousal";
import { Metadata } from 'next'
import TemplateBg1 from "@/app/(general-media)/(shapes)/templateBg1";
import ERS from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ERS";
import PLS from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PLS";
import RLL3 from "@/app/(general-media)/(shapes)/(rectangle)/(large)/RLL3";
import RRS from "@/app/(general-media)/(shapes)/(rectangle)/(mobile)/RRS";
import PL from "@/app/(general-media)/(shapes)/(pollygon)/PL";
import ELS from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ELS";
import PRS from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PRS";
import PLS3 from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PLS3";
import PL3 from "@/app/(general-media)/(shapes)/(pollygon)/PL3";
import UvodniSlovoUredniDeska from "@/app/(sub-home-pages)/urednideska/(urednideska-components)/uvodniSlovoUredniDeska";
import Dokumentykestazenilist, {
    document, documentsParam
} from "@/app/(sub-home-pages)/urednideska/(urednideska-components)/dokumentykestazenilist";
import Testimonials from "@/app/(home-components)/testimonials";
import Nalezitosti from "@/app/(sub-home-pages)/urednideska/(urednideska-components)/nalezitosti";
import PocketBase from "pocketbase";

// either Static metadata
export const metadata: Metadata = {
    title: 'Úřední deska - Edisona.cz',
}

export default async function Page(){
    const pb = new PocketBase('https://pocketbase-production-ab0e.up.railway.app');
    const resultAwaitDocuments = await pb.collection("dokumenty").getFullList({
        filter:'kategorie = "inspekcnizprava"'

    })
    const documentList:Array<document> = resultAwaitDocuments.map((document )=>({
        title : document.nazev,
        url: "https://pocketbase-production-ab0e.up.railway.app/api/files/xp1gvxt7pluknme/"+document.id+"/"+document.field
    }))
    const documentParams:documentsParam = {documents:documentList}
    return(
        <main className="bg-[#F4F4F4] overflow-hidden">
            <section className="">
                <div className="relative">
                    <SubHomeTopMenu />
                </div>
                <SubHomeMenu text={""} />
            </section>
            <section className="pt-10">
                <UvodniSlovoUredniDeska />
            </section>
            <section className="flex flex-col items-center pt-10">
                <span className="isolate inline-flex rounded-md shadow-sm">
                      <a
                          href="/urednideska"
                          className="bg-white relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                      >
                        Ostatní
                      </a>
                      <a
                          href="/urednideska/vyrocnizpravy"
                          className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                      >
                        Výroční zprávy
                      </a>
                      <a
                          href="/urednideska/inspekcnizpravy"
                          className="relative -ml-px inline-flex items-center rounded-r-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
                      >
                        Inspekční zprávy
                      </a>
        </span>
            </section>
            <section className="pt-2">
                <Dokumentykestazenilist documents={documentParams} />
            </section>
            <section className="py-20 drop-shadow-md overflow-hidden">
                <Nalezitosti />
            </section>
            <section className="overflow-hidden drop-shadow-md">
                <HomeFooter />
            </section>
        </main>
    )
}