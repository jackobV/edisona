import SubHomeTopMenu from "@/app/(sub-home-pages)/(sub-home-components)/subHomeTopMenu";
import ContactSection from "@/app/kontakt/(components)/contactSection";
import HomeFooter from "@/app/(home-components)/homeFooter";

export default function Page(){
    return(<div className="min-h-screen bg-[#F4F4F4]">
        <section className="">
                <SubHomeTopMenu />
        </section>
        <section className="">
            <ContactSection />
        </section>
        <section className="">
            <HomeFooter />
        </section>
    </div>)
}