"use client"
import Image from "next/image";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import picture from "../(home-media)/Placeholder.png"
import EdisonaLogoWhite from"../(home-media)/edisonaLogoWhite.png"

const navigation = [
    { name: 'Úvod', href: '/' },
    { name: 'O škole', href: '/vizeskoly' },
    { name: 'Průvodci a tým', href: '/pruvodciatym' },

]
const navigationRight = [
    { name: 'Přihláška', href: '#' },
    { name: 'Novinky', href: '/novinky' },
    { name: 'Kontakt', href: '/pruvodciatym' },
]
export default function HomeHero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-[#F4F4F4]">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex flex-1">
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between w-full lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Otevřít hlavní menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <div className="h-10 w-10">
                                <Image src={EdisonaLogoWhite} alt={"Edisona Logo"} />
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12 justify-end">
                        {navigationRight.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </nav>
                    <Dialog className="" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-10" />
                        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-1">
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Zavřít menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 space-y-2">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                {navigationRight.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </Dialog.Panel>
                    </Dialog>
            </header>

            <div className="relative isolate overflow-hidden pt-14 rounded-b-2xl">
                <Image
                    src={picture}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-5xl ">
                    <div className="w-20 h-20 mx-auto hidden lg:flex">
                        <a className="" href="/">
                            <Image src={EdisonaLogoWhite} alt={"Edisona Logo"}  className="object-contain"/>
                        </a>
                    </div>
                    <div className="text-center py-32 xl:py-48 2xl:py-56">
                        <h1 className=" text-2xl md:text-4xl font-bold tracking-tight text-white">
                            Škola, kde děti poznávají svět i samy sebe.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
                            Jsme inovativní škola zaměřená na smysluplné vzdělávání. Klademe důraz na rozvoj celé osobnosti, schopnost sebeuvědomění a sebevyjádření, umění tvořivosti a komunikace na všech úrovních. K nám i rodiče chodí rádi.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-white text-black  px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-opacity-80"
                            >
                                Přihláška
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white px-3.5 py-2.5 rounded-md backdrop-blur-2xl">
                                Vize školy <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
