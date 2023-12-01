import SubHomeTopMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeTopMenu";
import SubHomeMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeMenu";
import UvodniSlovoSpolupraceSRodici
    from "@/app/(sub-home-pages)/spolupracesrodici/(spolupracesrodici_components)/uvodniSlovoSpolupraceSRodici";
import SpolupraceSRodiciFeatures
    from "@/app/(sub-home-pages)/spolupracesrodici/(spolupracesrodici_components)/spolupraceSRodiciFeatures";
import Edookit from "@/app/(sub-home-pages)/spolupracesrodici/(spolupracesrodici_components)/edookit";
import RodiceTestimonials from "@/app/(sub-home-pages)/koncepce/(koncepce-components)/rodiceTestimonials";
import PruvodciaprihlaskaCTA
    from "@/app/(sub-home-pages)/tridaavybaveni/(tridaavybaveni-components)/pruvodciaprihlaskaCTA";
import HomeFooter from "@/app/(home-components)/homeFooter";
import { Metadata } from 'next'
import ellipseIcon from "../../(general-media)/(shapes)/ellipseicon.png";
import polygonIcon from "../../(general-media)/(shapes)/polygonicon.png";
import rectangleIcon from "../../(general-media)/(shapes)/rectangleicon.png";
import Image from "next/image";
import EPSM from "@/app/(general-media)/(shapes)/EPSM";
import PRMD from "@/app/(general-media)/(shapes)/PRMD";
import PEMD from "@/app/(general-media)/(shapes)/PEMD";
import EPMD from "@/app/(general-media)/(shapes)/EPMD";
import REMD from "@/app/(general-media)/(shapes)/REMD";
import RRMD from "@/app/(general-media)/(shapes)/RRMD";
import ELMD from "@/app/(general-media)/(shapes)/ELMD";
import PLMD from "@/app/(general-media)/(shapes)/PLMD";
import RPMD from "@/app/(general-media)/(shapes)/RPMD";
import EL from "@/app/(general-media)/(shapes)/(ellipse)/EL";
import ER3 from "@/app/(general-media)/(shapes)/(ellipse)/ER3";
import ER from "@/app/(general-media)/(shapes)/(ellipse)/ER";
import EL3 from "@/app/(general-media)/(shapes)/(ellipse)/EL3";
import PR3 from "@/app/(general-media)/(shapes)/(pollygon)/PR3";
import PR from "@/app/(general-media)/(shapes)/(pollygon)/PR";
import PL3 from "@/app/(general-media)/(shapes)/(pollygon)/PL3";
import PL from "@/app/(general-media)/(shapes)/(pollygon)/PL";
import RR from "@/app/(general-media)/(shapes)/(rectangle)/RR";
import RR3 from "@/app/(general-media)/(shapes)/(rectangle)/RR3";
import RL from "@/app/(general-media)/(shapes)/(rectangle)/RL";
import RL3 from "@/app/(general-media)/(shapes)/(rectangle)/RL3";
import ERS from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ERS";
import ELS from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ELS";
import PRS from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PRS";
import RLS from "@/app/(general-media)/(shapes)/(rectangle)/(mobile)/RLS";
import PLS from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PLS";
import RRS from "@/app/(general-media)/(shapes)/(rectangle)/(mobile)/RRS";
import TemplateBg1 from "@/app/(general-media)/(shapes)/templateBg1";
import Testimonials from "@/app/(home-components)/testimonials";
// either Static metadata
export const metadata: Metadata = {
    title: 'Spolupráce s rodiči - Edisona.cz',
}
export default function Spolupracesrodici(){
    return(
        <main className="bg-[#E2E2E2]">
            <section className="bg-[#F4F4F4]">
                <div className="relative">
                    <SubHomeTopMenu />
                </div>
                <section className="absolute w-full h-full flex flex-col gap-y-10 hidden md:inline">
                    <EL />
                </section>
                <section className="absolute w-full h-full flex flex-col pt-20 md:hidden ">
                    <RRS />
                    <EL />
                </section>
                <SubHomeMenu text={"4"} />
            </section>
            <section className="bg-[#F4F4F4] drop-shadow-md">
                <TemplateBg1 />
                <section className=" pt-10">
                    <section className="absolute w-full h-full flex flex-col gap-y-10 md:hidden ">
                        <ERS />
                        <PLS />
                    </section>
                    <UvodniSlovoSpolupraceSRodici />
                </section>
                <section className=" pt-20 ">
                    <SpolupraceSRodiciFeatures />
                </section>
                <section className=" rounded-b-2xl drop-shadow-md drop py-16 overflow-hidden">
                    <section className="absolute w-full h-full flex flex-col pt-20 gap-y-44 md:hidden -z-10">
                        <RRS />
                        <EL />
                    </section>
                    <Edookit />
                </section>
            </section>

            <section className="py-16">
                <Testimonials />
            </section>
            <section className="bg-[#F4F4F4] rounded-t-2xl drop-shadow-md">
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
            <section>
                <HomeFooter />
            </section>
        </main>
    )
}