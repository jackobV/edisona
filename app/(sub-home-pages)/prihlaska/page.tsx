import SubHomeTopMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeTopMenu";
import SubHomeMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeMenu";
import Form from "@/app/(sub-home-pages)/prihlaska/(components-prihlaska)/Form";
import HomeFooter from "@/app/(home-components)/homeFooter";
import Uvodnislovoprihlaska from "@/app/(sub-home-pages)/prihlaska/(components-prihlaska)/uvodnislovoprihlaska";

export default function Page(){
    return(
        <main className="bg-[#F4F4F4]">
            <section className="bg-[#F4F4F4]">
                <div className="relative">
                    <SubHomeTopMenu />
                </div>
                <SubHomeMenu text={"10"} />
            </section>
            <section className="pt-10">
                <Uvodnislovoprihlaska />
            </section>
            <section className="pt-10 pb-32">
                <Form />
            </section>
            <section>
                <HomeFooter />

            </section>
        </main>
    )
}