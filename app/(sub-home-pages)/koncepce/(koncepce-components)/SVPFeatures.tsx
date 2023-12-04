/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Image from "next/image";
import edikaImage from "../../(sub-home-media)/edika.png"
import feature2foto from "./(koncepce-media)/DSC_6163.jpg"
const features = [
    {
        name: 'Vzdělávací koncept EDIKA',
        description:
            'Náš nosný předmět tvoří vlastní koncept EDIKA, který se přímo zaměřuje na podporu a rozvoj sebevyjádření, sebeuvědomění, poznávání světa a sebe sama, rozvíjení tvořivosti a komunikace na všech úrovních. Skrze EDIKU dochází k rozvoji vnitřního směřování, probouzí se odvaha k experimentování, zkoušení, hledání a také nalézání, především toho vlastního, nikoliv pouze pasivně převzatého.',
        imageSrc: edikaImage,
        imageAlt: 'Důvěra',
    },
    {
        name: 'Vnitřní motivace a seberozvoj',
        description:
            'Vedeme žáky k rozvíjení pozitivního vztahu k sobě a vytváříme takové prostředí, kde se mohou autenticky vyjádřit, včetně projevení emocí. Chybu vnímáme jako přirozenou součást poznávání světa a jako východisko pro další zkušenost. Velký prostor dostávají otázky o světě, vlastním prožívání štěstí, osobní vizi, místu jednotlivce ve skupině, společnosti. S tím souvisí i zvědomování žákova vztahu k okolnímu prostředí a environmentálním otázkám.',
        imageSrc: feature2foto,
        imageAlt: 'foto 2.',
    },
    
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function SVPFeatures() {
    return (

            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 z-20">
                <div className=" space-y-16 z-20">
                    {features.map((feature, featureIdx) => (
                        <div
                            key={feature.name}
                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 z-20"
                        >
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 z-20'
                                )}
                            >
                                <h3 className="text-2xl font-semibold z-20">{feature.name}</h3>
                                <p className="pt-3  text-gray-500 z-20">{feature.description}</p>
                            </div>
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-7 ' : 'lg:col-start-1',
                                    'flex-auto lg:col-span-6 lg:row-start-1 z-20'
                                )}
                            >
                                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 drop-shadow-md z-20">
                                    <Image src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center z-20"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col w-full items-center pt-20">
                    <a href="https://pocketbase-production-ab0e.up.railway.app/api/files/xp1gvxt7pluknme/5t14y5bjlb1qvje/s_vp_zs_edisona_2023_QtQA0Y8Syd.pdf?token=" className="py-2 px-5 bg-black text-white drop-shadow-md rounded-md ">stáhnout ŠVP</a>
                </div>
            </div>
    )
}
