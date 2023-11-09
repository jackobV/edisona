import TridaAVybaveniCarousal from "@/app/(sub-home-pages)/tridaavybaveni/(tridaavybaveni-components)/carousal";

export default function LandingTextWithCarousal(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
                <h1 className="font-semibold text-3xl tracking-tight z-10">Třída a vybavení</h1>
                <p className="max-w-3xl pt-10 font-light text-gray-600 z-10">
                    Unikátní přístup ke vzdělání a výchově se odráží i v moderním vybavení našich tříd a neformálním prostředí se spoustou zvířat od pejsků přes králíky až po agamu. Podívejte se k nám! </p>
            </div>
        </div>
    )
}