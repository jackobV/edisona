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
import duveraImage from "../vizeskoly/(vize-skoly-media)/DSC_6118.jpg"
import svobodaImage from "../vizeskoly/(vize-skoly-media)/DSC_6099.jpg"
import smysluplnostImage from "../vizeskoly/(vize-skoly-media)/DSC_6286.jpg"

import feature2foto from "../(sub-home-media)/feature2foto.png"
import feature3foto from "../(sub-home-media)/feature3foto.png"
const features = [
    {
        name: 'Důvěra',
        description:
            'Máme důvěru v žáky, přistupujeme k nim jako k rovnocenným partnerům a vzájemně se obohacujeme. ',
        imageSrc: duveraImage,
        imageAlt: 'Důvěra',
    },
    {
        name: 'Svoboda a odpovědnost',
        description:
            'Vedeme žáky k uvědomění provázanosti mezi svobodou a odpovědností, postupně je učíme dělat svobodná rozhodnutí a nést následky.',
        imageSrc: svobodaImage,
        imageAlt: 'foto 2.',
    },
    {
        name: 'Smysluplnost učení',
        description:
            'Žáci poznávají svět v souvislostech. Vycházíme z jejich vnitřního zájmu a zprostředkovanou zkušeností rozvíjíme dovednosti potřebné pro život v moderní společnosti.',
        imageSrc: smysluplnostImage,
        imageAlt: 'foto 3.',
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-6xl lg:px-8">
                <div className="space-y-28">
                    {features.map((feature, featureIdx) => (
                        <div
                            key={feature.name}
                            className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                        >
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 z-10'
                                )}
                            >
                                <h3 className="text-2xl font-semibold z-10">{feature.name}</h3>
                                <p className="pt-3  text-gray-500 z-10">{feature.description}</p>
                            </div>
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                                )}
                            >
                                <div className="aspect-h-2 aspect-w-4 overflow-hidden rounded-lg bg-gray-100 drop-shadow-md">
                                    <Image src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center"/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
