import NejaktualnejsiSpravyBanner from "@/app/(home-components)/nejaktualnejsi-spravy-banner";

export default function UvodniSlovoNovinky(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center gap-y-10">
                <h1 className="font-semibold text-3xl tracking-tight">Novinky</h1>
                <div className="w-full">
                    <NejaktualnejsiSpravyBanner />
                </div>
            </div>
        </div>
    )
}