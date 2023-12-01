"use client"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import EdisonaLogoWhite from "@/app/(home-media)/edisonaLogoWhite.png";
import {Dialog} from "@headlessui/react";
import {useState} from "react";
import edisonLogo from "../(sub-home-media)/edisonalogobarva.png"
const navigation = [
    { name: 'Úvod', href: '/' },
    { name: 'O škole', href: '/vizeskoly' },
    { name: 'Průvodci a tým', href: '/pruvodciatym' },

]
const navigationRight = [
    { name: 'Kroužky', href: '/krouzky' },
    { name: 'Novinky', href: '/novinky' },
    { name: 'Kontakt', href: '/pruvodciatym' },
]
export default function SubHomeTopMenu(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
        <div>
            <header className=" inset-x-0 top-0 z-50 bg-white md:bg-[#F4F4F4]">
                <div className="mx-auto flex flex-col max-w-7xl">

                <nav className="p-6 lg:px-8 flex flex-row" aria-label="Global">
                    <div className="flex flex-1">
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-black">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between w-full lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Otevřít hlavní menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            <div className="h-10 w-10">
                                <Image src={edisonLogo} alt={"Edisona Logo"} />
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex lg:gap-x-12 justify-end">
                        {navigationRight.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-black">
                                {item.name}
                            </a>
                        ))}
                    </div>

                </nav>
                    <div className="w-20 h-20 mx-auto hidden lg:flex">
                        <a href="/">
                            <Image src={edisonLogo} alt={"edisona log"} className="object-contain" />
                        </a>
                    </div>
                </div>

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
        </div>
    )
}