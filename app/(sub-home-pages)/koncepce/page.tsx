import SubHomeTopMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeTopMenu";
import SubHomeMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeMenu";
import UvodniSlovoKoncepce from "@/app/(sub-home-pages)/koncepce/(koncepce-components)/uvodniSlovoKoncepce";
import KoncepceTestimonialSlovo from "@/app/(sub-home-pages)/koncepce/(koncepce-components)/KoncepceTestimonialSlovo";
import SVP from "@/app/(sub-home-pages)/koncepce/(koncepce-components)/SVP";
import SVPFeatures from "@/app/(sub-home-pages)/koncepce/(koncepce-components)/SVPFeatures";
import RodiceTestimonials from "@/app/(sub-home-pages)/koncepce/(koncepce-components)/rodiceTestimonials";
import PrihlaskaCTA from "@/app/(sub-home-pages)/koncepce/(koncepce-components)/prihlaskaCTA";
import HomeFooter from "@/app/(home-components)/homeFooter";
import { Metadata } from 'next'
import RR from "@/app/(general-media)/(shapes)/(rectangle)/RR";
import PL from "@/app/(general-media)/(shapes)/(pollygon)/PL";
import RR3 from "@/app/(general-media)/(shapes)/(rectangle)/RR3";
import EL3 from "@/app/(general-media)/(shapes)/(ellipse)/EL3";
import PR3 from "@/app/(general-media)/(shapes)/(pollygon)/PR3";
import RL from "@/app/(general-media)/(shapes)/(rectangle)/RL";
import ELS from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ELS";
import PRS from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PRS";
import RLS from "@/app/(general-media)/(shapes)/(rectangle)/(mobile)/RLS";
import ERS from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ERS";
import PLS from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PLS";
import RRS from "@/app/(general-media)/(shapes)/(rectangle)/(mobile)/RRS";
import EL from "@/app/(general-media)/(shapes)/(ellipse)/EL";
import ER from "@/app/(general-media)/(shapes)/(ellipse)/ER";
import PL3 from "@/app/(general-media)/(shapes)/(pollygon)/PL3";
import ER3 from "@/app/(general-media)/(shapes)/(ellipse)/ER3";
import PruvodciaprihlaskaCTA
    from "@/app/(sub-home-pages)/tridaavybaveni/(tridaavybaveni-components)/pruvodciaprihlaskaCTA";
import TemplateBg1 from "@/app/(general-media)/(shapes)/templateBg1";
import TemplateBg2 from "@/app/(general-media)/(shapes)/templateBg2";
import RLL from "@/app/(general-media)/(shapes)/(rectangle)/(large)/RLL";
import RLL3 from "@/app/(general-media)/(shapes)/(rectangle)/(large)/RLL3";

// either Static metadata
export const metadata: Metadata = {
    title: 'Koncepce - Edisona.cz',
}
export default function Home(){
    return(
        <main className="bg-[#E2E2E2]">
            <section className="bg-[#F4F4F4]">
                <div className="relative">

                    <SubHomeTopMenu />
                    <section className="absolute w-full h-full flex flex-col gap-y-10 hidden md:inline">
                        <RLL3 />
                    </section>
                    <section className="absolute w-full h-full flex flex-col pt-20 md:hidden ">
                        <RRS />
                        <PL />
                    </section>
                </div>
                <SubHomeMenu text={"1"} />
            </section>
            <section className="bg-[#F4F4F4] ">
                <section className="-z-10">
                    <TemplateBg2 />
                </section>
                <section className=" pt-10">
                    <UvodniSlovoKoncepce />
                </section>
                <section className=" pt-16">
                    <KoncepceTestimonialSlovo />
                </section>
                <section className=" pt-16">
                    <SVP />
                </section>
                <section className="py-16 rounded-b-2xl drop-shadow-md">
                    <SVPFeatures />
                </section>
            </section>

            <section className="py-16">
                <RodiceTestimonials />
            </section>
            <section className="bg-[#F4F4F4] py-16">
                <PrihlaskaCTA />
            </section>
            <section className="bg-[#F4F4F4]">
                <HomeFooter />
            </section>
        </main>
    )
}