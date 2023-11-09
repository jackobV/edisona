import Image from 'next/image'
import HomeHero from "@/app/(home-components)/homeHero";
import News from "@/app/(home-components)/news";
import Divider10line from "@/app/(home-components)/divider10line";
import Testimonials from "@/app/(home-components)/testimonials";
import PrincipalCitation from "@/app/(home-components)/principalCitation";
import HomeFooter from "@/app/(home-components)/homeFooter";
import { Metadata } from 'next'
import RLS3 from "@/app/(general-media)/(shapes)/(rectangle)/(mobile)/RLS3";
import RL3 from "@/app/(general-media)/(shapes)/(rectangle)/RL3";
import RL from "@/app/(general-media)/(shapes)/(rectangle)/RL";
import PR from "@/app/(general-media)/(shapes)/(pollygon)/PR";
import ER from "@/app/(general-media)/(shapes)/(ellipse)/ER";
import ER3 from "@/app/(general-media)/(shapes)/(ellipse)/ER3";
import PL from "@/app/(general-media)/(shapes)/(pollygon)/PL";
import PL3 from "@/app/(general-media)/(shapes)/(pollygon)/PL3";
import rectangleIcon from "@/app/(general-media)/(shapes)/rectangleicon.png";
import ELS3 from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ELS3";
import RRS from "@/app/(general-media)/(shapes)/(rectangle)/(mobile)/RRS";
import PRS from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PRS";

// either Static metadata
export const metadata: Metadata = {
    title: 'Domů - Edisona.cz',
}
export default function Home() {
  return (
    <main className="bg-[#E2E2E2]">
        <section>
            <HomeHero />
        </section>
        <section className="bg-[#F4F4F4] py-16 rounded-b-2xl drop-shadow-md">
            <section className="absolute w-full h-full flex flex-col hidden md:inline">
                <div className="">
                    <PR />
                </div>
                <div className="pl-20">
                    <RL />
                </div>
                <div className="pt-10">
                    <ER3 />
                </div>
                <div className="">
                    <PL3 />
                </div>
                <div className="pt-48">
                    <div className=" w-full h-auto  flex flex-row justify-center  max-w-3xl mx-auto px-8">
                        <div className="rotate-12">
                            <Image src={rectangleIcon} alt={"rectangle Icon"} className="object-cover object-scale-down w-10 h-10 " />
                        </div>
                    </div>
                </div>
                <div className="pt-20">
                    <ELS3 />
                </div>
                <div className="">
                    <PRS />
                </div>
            </section>
            <section className="absolute w-full h-full flex flex-col md:hidden justify-between">
                <div>
                    <RLS3 />
                    <PRS />
                    <div className="pt-24">
                        <ELS3 />
                    </div>
                </div>

                <div className="pb-40">
                    <ER />
                </div>
            </section>
            <News />
        </section>
        <section className="pt-5">
            <Testimonials />
        </section>
        <section className="py-5 ">
            <PrincipalCitation />
        </section>
        <HomeFooter />
    </main>
  )
}
