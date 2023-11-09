import SubHomeTopMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeTopMenu";
import SubHomeMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeMenu";
import UvodniSlovo from "@/app/(sub-home-pages)/vizeskoly/(vize-skoly-components)/UvodniSlovo";
import FeaturesPrincipyone from "@/app/(sub-home-pages)/(sub-home-components)/featuresPrincipyone";
import ZakladatelSlovo from "@/app/(sub-home-pages)/(sub-home-components)/ZakladatelSlovo";
import Principy from "@/app/(sub-home-pages)/(sub-home-components)/principy";
import Testimonials from "@/app/(home-components)/testimonials";
import HomeFooter from "@/app/(home-components)/homeFooter";
import PruvodciaprihlaskaCTA
    from "@/app/(sub-home-pages)/tridaavybaveni/(tridaavybaveni-components)/pruvodciaprihlaskaCTA";
import { Metadata } from 'next'
import RR3 from "@/app/(general-media)/(shapes)/(rectangle)/RR3";
import PL3 from "@/app/(general-media)/(shapes)/(pollygon)/PL3";
import EL3 from "@/app/(general-media)/(shapes)/(ellipse)/EL3";
import PR3 from "@/app/(general-media)/(shapes)/(pollygon)/PR3";
import RL from "@/app/(general-media)/(shapes)/(rectangle)/RL";
import ELS from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ELS";
import PRS from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PRS";
import RLS from "@/app/(general-media)/(shapes)/(rectangle)/(mobile)/RLS";
import ERS from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ERS";
import PLS from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PLS";
import RRS from "@/app/(general-media)/(shapes)/(rectangle)/(mobile)/RRS";
import PL from "@/app/(general-media)/(shapes)/(pollygon)/PL";
import RR from "@/app/(general-media)/(shapes)/(rectangle)/RR";
import EL from "@/app/(general-media)/(shapes)/(ellipse)/EL";
import ER3 from "@/app/(general-media)/(shapes)/(ellipse)/ER3";

// either Static metadata
export const metadata: Metadata = {
    title: 'Vize školy - Edisona.cz',
}
export default function Home() {
    return (
        <main className="bg-[#E2E2E2]">
            <div className="relative bg-[#F4F4F4]">
                <SubHomeTopMenu />
                <section className="absolute w-full h-full flex flex-col gap-y-10 hidden md:inline">
                    <EL />
                </section>
                <SubHomeMenu text={"0"} />

            </div>
            <section className="pt-10 bg-[#F4F4F4] ">
                <section className="absolute w-full h-full flex flex-col gap-y-40 pt-5 hidden md:flex overflow-hidden">
                    <RR />
                    <PL />
                    <RR3 />
                    <EL3 />
                    <PR3 />
                    <RL />
                </section>
                <section className="absolute w-full h-full flex flex-col gap-y-40 pt-5 md:hidden overflow-hidden">
                    <ELS />
                    <PRS />
                    <RLS />
                    <ERS />
                    <PLS />
                    <RRS />
                    <ELS />
                    <PRS />
                    <RLS />
                    <ERS />
                    <PLS />
                    <ELS />
                </section>
                <UvodniSlovo />
            </section>
            <section className="pt-32 bg-[#F4F4F4]">
                <FeaturesPrincipyone />
            </section>
            <section className="pt-24 bg-[#F4F4F4]">
                <ZakladatelSlovo />

            </section>
            <section className="pt-16 bg-[#F4F4F4]">
                <Principy />
            </section>
            <section className="pt-10 py-16 bg-[#F4F4F4] rounded-b-2xl drop-shadow-md">
                <Testimonials />
            </section>
            <section className=" drop-shadow-md">
                <section className="absolute w-full h-full flex flex-col gap-y-40 overflow-hidden md:flex hidden">
                    <ER3 />
                    <PL3 />
                </section>
                <section className="absolute w-full h-full flex flex-col gap-y-20 pt-5 md:hidden ">
                    <PRS />
                    <RLS />
                </section>
                <PruvodciaprihlaskaCTA />
            </section>
            <section className="overflow-hidden">
                <HomeFooter />
            </section>
        </main>
    )
}
