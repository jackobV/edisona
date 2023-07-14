import Image from 'next/image'
import HomeHero from "@/app/(home-components)/homeHero";
import News from "@/app/(home-components)/news";
import Divider10line from "@/app/(home-components)/divider10line";
import Testimonials from "@/app/(home-components)/testimonials";
import PrincipalCitation from "@/app/(home-components)/principalCitation";
import HomeFooter from "@/app/(home-components)/homeFooter";

export default function Home() {
  return (
    <main>
        <section>
            <HomeHero />
        </section>
        <section className="bg-[#E2E2E2]">
            <News />
        </section>
        <section className="bg-[#E2E2E2]">
            <Testimonials />
        </section>
        <section className="bg-[#E2E2E2]">
            <PrincipalCitation />
        </section>
        <HomeFooter />
    </main>
  )
}
