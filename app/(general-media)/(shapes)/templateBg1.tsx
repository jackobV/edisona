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
import ELL3 from "@/app/(general-media)/(shapes)/(ellipse)/(large)/ELL3";
import ELS3 from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ELS3";
import PLL3 from "@/app/(general-media)/(shapes)/(pollygon)/(large)/PLL3";
import RRS3 from "@/app/(general-media)/(shapes)/(rectangle)/(mobile)/RRS3";
import ER3 from "@/app/(general-media)/(shapes)/(ellipse)/ER3";
import RLL3 from "@/app/(general-media)/(shapes)/(rectangle)/(large)/RLL3";
import ERS3 from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ERS3";
import RLL from "@/app/(general-media)/(shapes)/(rectangle)/(large)/RLL";

export default function TemplateBg1(){
    return(
        <div className="">
            <section className="absolute w-full h-full flex flex-col pt-5 hidden md:flex">
                <div className="pb-20 pt-32">
                    <RRS3 />
                </div>

                <div className="">
                    <PLL3 />

                </div>
                <div className="py-16">
                    <ERS3 />

                </div>
                <div className="py-24">
                    <RLL />

                </div>
                <div className="py-32">
                    <PR3 />

                </div>
                <div className="">
                    <ELL3 />

                </div>
                <div className="py-32">
                    <RL />
                </div>
                <div className="">
                    <PLL3 />

                </div>
                <div className="py-16">
                    <ERS3 />

                </div>
                <div className="py-24">
                    <RLL />

                </div>
                <div className="py-32">
                    <PR3 />

                </div>
                <div className="">
                    <ELL3 />

                </div>
                <div className="py-32">
                    <RL />
                </div>
            </section>
        </div>
    )
}