import SubHomeTopMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeTopMenu";
import SubHomeMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeMenu";
import UvodniSlovoNovinky from "@/app/(sub-home-pages)/novinky/(novinky-components)/uvodniSlovoNovinky";
import NovinkyFullArticles from "@/app/(sub-home-pages)/novinky/(novinky-components)/novinkyFullArticles";
import HomeFooter from "@/app/(home-components)/homeFooter";
import { Metadata } from 'next'

// either Static metadata
export const metadata: Metadata = {
    title: 'Novinky - Edisona.cz',
}
export default function Page(){
    return(
        <main className="bg-[#E2E2E2]">
            <section className="bg-[#F4F4F4]">
                <div className="relative">
                    <SubHomeTopMenu />
                </div>
                <SubHomeMenu text={"10"} />
            </section>
            <section className="pt-10 bg-[#F4F4F4]">
                <UvodniSlovoNovinky />
            </section>
            <section className="pt-20 bg-[#F4F4F4]">
                <NovinkyFullArticles />
            </section>
            <section className="pt-16 bg-[#F4F4F4]">
                <HomeFooter />
            </section>
        </main>
    )
}