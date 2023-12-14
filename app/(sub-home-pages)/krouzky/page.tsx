import SubHomeTopMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeTopMenu";
import SubHomeMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeMenu";
import HomeFooter from "@/app/(home-components)/homeFooter";
import {Metadata} from "next";
import KrouzkyFullListing from "@/app/(sub-home-pages)/krouzky/(components)/krouzkyFullListing";
import UvodniSlovoKrouzky from "@/app/(sub-home-pages)/krouzky/(components)/UvodniSlovoKrouzky";
import Krouzkyslovo from "@/app/(sub-home-pages)/krouzky/(components)/Krouzkyslovo";
export const metadata: Metadata = {
    title: 'Kroužky - Edisona.cz',
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
                    <UvodniSlovoKrouzky />
                </section>
                <section className="pt-20 bg-[#F4F4F4]">
                    <KrouzkyFullListing />
                </section>
                <section className="py-10 bg-[#F4F4F4]">
                    <Krouzkyslovo />
                </section>
                <section className="pt-16 bg-[#F4F4F4]">
                    <HomeFooter />
                </section>
            </main>
    )
}