import Image from "next/image";
import eu from "./(media)/EULOGO.webp"
import msmst from "./(media)/MSMTLOGO.webp"
export default function Nalezitosti(){
    return(
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
            <div className="max-w-xl text-center"><p>Pověřenec GDPR Mgr. Jan Baše, tel. 724 063 897, email: base@procurio.cz, adresa pro doručování: Vrchlického 678/19, 500 11 Hradec Králové </p></div>
            <div className="flex flex-row pt-5">
                <div className="p-2 rounded-xl shadow-2xl bg-white">
                    <Image src={eu} alt={""} className="h-14 w-auto" />
                </div>
            </div>
            <div className="max-w-xl text-center pt-10 flex flex-col items-center gap-y-3 text-gray-700 shadow-none drop-shadow-none"><p>
                Příjemce dotace: Základní škola Edisona s.r.o.</p>

                <p>Název projektu: Šablony IV - ZŠ Edisona</p>
                <p>Registrační číslo projektu: CZ.02.02.XX/00/22_002/0003370</p>
                <p>Období realizace: 1. 12. 2022 – 30. 11. 2024</p>
                <p>Naše škola čerpá finanční prostředky z Evropských strukturálních fondů v rámci operačního programu Jan Amos Komenský prostřednictvím výzvy 02_22_002 Podpora škol formou projektů zjednodušeného vykazování – Šablony pro MŠ a ZŠ I.</p>
                <p>Z finančních prostředků v celkové výši 608 925,- Kč hradíme následující aktivity:</p>
                <p className="font-medium text-gray-900">Za subjekt ZŠ</p>
                <ul>
                    <li>Školní asistent ZŠ</li>
                    <li>Vzdělávání pracovníků ve vzdělávání ZŠ</li>
                    <li>Spolupráce pracovníků ve vzdělávání ZŠ</li>
                </ul>
                <p className="font-medium text-gray-900">Za subjekt ŠD</p>
                <ul>
                    <li>
                        Vzdělávání pracovníků ŠD</li>
                    <li>Inovativní vzdělávání účastníků zájmového vzdělávání v ŠD</li>
                </ul>
            </div>
        </div>
    )
}