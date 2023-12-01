import SubHomeTopMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeTopMenu";
import SubHomeMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeMenu";
import UvodniSlovoSpolupraceSRodici
    from "@/app/(sub-home-pages)/spolupracesrodici/(spolupracesrodici_components)/uvodniSlovoSpolupraceSRodici";
import UvodniSlovo from "@/app/(sub-home-pages)/pruvodciatym/(pruvodciatym-components)/uvodniSlovo";
import People from "@/app/(sub-home-pages)/pruvodciatym/(pruvodciatym-components)/people";
import PruvodciaprihlaskaCTA
    from "@/app/(sub-home-pages)/tridaavybaveni/(tridaavybaveni-components)/pruvodciaprihlaskaCTA";
import HomeFooter from "@/app/(home-components)/homeFooter";
import PocketBase from "pocketbase";
import { Metadata } from 'next'
import TemplateBg2 from "@/app/(general-media)/(shapes)/templateBg2";
import TemplateBg1 from "@/app/(general-media)/(shapes)/templateBg1";
import ELS from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ELS";
import PRS from "@/app/(general-media)/(shapes)/(pollygon)/(mobile)/PRS";
import PL3 from "@/app/(general-media)/(shapes)/(pollygon)/PL3";
import ERS from "@/app/(general-media)/(shapes)/(ellipse)/(mobile)/ERS";
import PL from "@/app/(general-media)/(shapes)/(pollygon)/PL";
import RL3 from "@/app/(general-media)/(shapes)/(rectangle)/RL3";

// either Static metadata
export const metadata: Metadata = {
    title: 'Průvodci a tým - Edisona.cz',
}
export interface Person {
    name:string;
    surname:string;
    title:string;
    role:Array<string>;
    picture:string;
    medailon:string;
    roleDisplay:string;
    email:string;
}
export interface PeopleParams {
    people:Person[];
}
export default async function PruvodciATymPage(){
    const pb = new PocketBase('https://pocketbase-production-ab0e.up.railway.app');
    const records = await pb.collection('personal').getFullList({
        sort: 'Jmeno',
    });
    const people: PeopleParams = {
        people: records.map(item => ({
            name: item.Jmeno,
            surname: item.Prijimeni,
            title: item.Titul,
            role: item.Role,
            picture: `https://pocketbase-production-ab0e.up.railway.app/api/files/ud6h7cjexscwd4z/${item.id}/${item.fotka}`,
            medailon:item.Medailon,
            roleDisplay:item.Role_display,
            email:item.email,
        }))
    };
    return(
        <main className="bg-[#E2E2E2]">
            <section className="bg-[#F4F4F4]">
                <div className="relative">
                    <SubHomeTopMenu />
                </div>
                <section className="absolute w-full h-full flex flex-col hidden md:inline">
                    <ELS />
                    <div className="pt-10 pr-20">
                        <PRS />
                    </div>
                    <div className="pt-10">
                        <RL3 />
                    </div>
                </section>
                <section className="absolute w-full h-full flex flex-col pt-20 md:hidden ">
                    <ERS />
                    <PL />
                </section>
                <SubHomeMenu text={"3"} />
            </section>
            <section className="bg-[#F4F4F4]">
                <section className=" pt-10">
                    <UvodniSlovo />
                </section>
                <section className=" py-16 rounded-b-2xl drop-shadow-md">
                    <People people={people} />
                </section>
            </section>
            <section className=" rounded-t-2xl drop-shadow-md">
                <PruvodciaprihlaskaCTA />
            </section>
            <section>
                <HomeFooter />
            </section>
        </main>
    )
}