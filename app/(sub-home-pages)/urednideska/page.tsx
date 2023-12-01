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
import Dokumentykestazenilist from "@/app/(sub-home-pages)/urednideska/(urednideska-components)/dokumentykestazenilist";

// either Static metadata
export const metadata: Metadata = {
    title: 'Třída a vybavení - Edisona.cz',
}
export default function TridaAVybaveni(){
    return(
        <main className="bg-[#F4F4F4] overflow-hidden">
            <section className="">
                <div className="relative">
                    <SubHomeTopMenu />
                </div>
                <SubHomeMenu text={"2"} />
            </section>
            <section className="pt-10">
                <UvodniSlovoUredniDeska />
            </section>
            <section className="pt-10">
                <Dokumentykestazenilist />
            </section>
            <section className="py-16 drop-shadow-md overflow-hidden">
                <RodiceTestimonials />
            </section>
            <section className="bg-[#F4F4F4] rounded-t-2xl drop-shadow-md overflow-hidden">
                <PruvodciaprihlaskaCTA />
            </section>
            <section className="overflow-hidden drop-shadow-md">
                <HomeFooter />
            </section>
        </main>
    )
}