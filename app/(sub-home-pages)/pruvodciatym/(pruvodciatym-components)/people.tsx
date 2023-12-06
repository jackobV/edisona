"use client"
import PocketBase from "pocketbase";
import { Fragment, useState } from 'react'
import {Dialog, Listbox, Transition} from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import {PeopleParams, Person} from "@/app/(sub-home-pages)/pruvodciatym/page";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export default function People({people}:{people:PeopleParams}) {
    const options = [
        {id:0,title:"Celý tým",unavailable:false},
        {id:1,title:"Zakladatelé a vedení",unavailable:false},
        {id:2,title:"Průvodci",unavailable:false},
        {id:3,title:"Učitelé jazyků",unavailable:false},
        {id:4,title:"Školní družina",unavailable:false},
        {id:5,title:"Kroužky",unavailable:false},
        {id:6,title:"Provozní tým",unavailable:false},

    ]
    const [open,setOpen] = useState(false)
    const [selectedPerson,setSelectedPerson] = useState<Person|undefined>(undefined)
    const [selectedOption,setSelectedOption] = useState(options[0])
    const Zakladatele = people.people
        .filter((item:Person) => item.role.includes("Zakladatel_vedeni"))
        .map((item:Person) => ({
            name: item.name,
            surname: item.surname,
            title: item.title,
            role: item.role,
            picture: item.picture,
            medailon:item.medailon,
            roleDisplay:item.roleDisplay,
            email:item.email,

        }));
    const Pruvodci = people.people
        .filter((item:Person) => item.role.includes("Pruvodce") )
        .map((item:Person) => ({
            name: item.name,
            surname: item.surname,
            title: item.title,
            role: item.role,
            picture: item.picture,
            medailon:item.medailon,
            email:item.email,
            roleDisplay:item.roleDisplay
        }));
    const UciteleJazyku = people.people
        .filter((item:Person) => item.role.includes("Ucitel_jazyku"))
        .map((item:Person) => ({
            name: item.name,
            surname: item.surname,
            title: item.title,
            role: item.role,
            picture: item.picture,
            medailon:item.medailon,
            email:item.email,

            roleDisplay:item.roleDisplay
        }));
    const SkolniDruzina = people.people
        .filter((item:Person) => item.role.includes("Skolni_druzina"))
        .map((item:Person) => ({
            name: item.name,
            surname: item.surname,
            title: item.title,
            role: item.role,
            picture: item.picture,
            medailon:item.medailon,
            email:item.email,
            roleDisplay:item.roleDisplay
        }));
    const Krouzky = people.people
        .filter((item:Person) => item.role.includes("Krouzky"))
        .map((item:Person) => ({
            name: item.name,
            surname: item.surname,
            title: item.title,
            role: item.role,
            picture: item.picture,
            medailon:item.medailon,
            email:item.email,
            roleDisplay:item.roleDisplay
        }));
    const Provoznitym = people.people
        .filter((item:Person) => item.role.includes("Provozni_tym"))
        .map((item:Person) => ({
            name: item.name,
            surname: item.surname,
            title: item.title,
            role: item.role,
            picture: item.picture,
            medailon:item.medailon,
            email:item.email,
            roleDisplay:item.roleDisplay
        }));
    console.log(SkolniDruzina)
    const selectPerson = (person:Person) => {
        setSelectedPerson(person);
        setOpen(true)
    }
    return (
        <div className="">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-baseline">
                    <div className="flex-col flex  gap-y-4 max-w-xl">
                        <h2 className="text-2xl font-medium tracking-tight">Náš tým</h2>
                    </div>
                    <div className="w-full pt-5 md:pt-0 md:w-1/3">
                        <Listbox value={selectedOption} onChange={setSelectedOption}>
                        {({ open }) => (
                            <>
                                <Listbox.Label className="block md:text-sm font-medium leading-6 text-gray-600 md:text-gray-900">Filtrovat zobrazení</Listbox.Label>
                                <div className="relative mt-2">
                                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                        <span className="block truncate">{selectedOption.title}</span>
                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
                                    </Listbox.Button>

                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                            {options.map((person) => (
                                                <Listbox.Option
                                                    key={person.id}
                                                    className={({ active }) =>
                                                        classNames(
                                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                            'relative cursor-default select-none py-2 pl-8 pr-4'
                                                        )
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected, active }) => (
                                                        <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.title}
                        </span>

                                                            {selected ? (
                                                                <span
                                                                    className={classNames(
                                                                        active ? 'text-white' : 'text-indigo-600',
                                                                        'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                    )}
                                                                >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                            ) : null}
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Listbox>
                    </div>
                </div>

                <ul
                    role="list"
                    className="pt-20 mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
                >
                    {
                        selectedOption.id === 0 ?
                            people.people.map((person:Person,key) => (
                        <li key={key}>
                            <button onClick={()=>selectPerson(person)}>
                                <img className="mx-auto h-24 w-24 rounded-full" src={person.picture} alt="" />
                            </button>
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.title} {person.name} {person.surname}</h3>

                            <p className="text-sm leading-6 text-gray-600">{person.roleDisplay}</p>
                        </li>
                    ))
                            : selectedOption.id === 1 ?
                                Zakladatele.map((person:Person,key) => (
                                    <li key={key}>
                                        <button onClick={()=>selectPerson(person)}>
                                            <img className="mx-auto h-24 w-24 rounded-full" src={person.picture} alt="" />
                                        </button>
                                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.title} {person.name} {person.surname}</h3>
                                        <p className="text-sm leading-6 text-gray-600">{person.roleDisplay}</p>
                                    </li>
                                ))
                    : selectedOption.id === 2 ?
                                Pruvodci.map((person:Person,key) => (
                                    <li key={key}>
                                        <button onClick={()=>selectPerson(person)}>
                                            <img className="mx-auto h-24 w-24 rounded-full" src={person.picture} alt="" />
                                        </button>
                                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.title} {person.name} {person.surname}</h3>

                                        <p className="text-sm leading-6 text-gray-600">{person.roleDisplay}</p>
                                    </li>
                                ))
                            : selectedOption.id === 3 ?
                                    UciteleJazyku.map((person:Person,key) => (
                                        <li key={key}>
                                            <button onClick={()=>selectPerson(person)}>
                                                <img className="mx-auto h-24 w-24 rounded-full" src={person.picture} alt="" />
                                            </button>
                                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.title} {person.name} {person.surname}</h3>

                                            <p className="text-sm leading-6 text-gray-600">{person.roleDisplay}</p>
                                        </li>
                                    ))
                                : selectedOption.id === 4 ?
                                        SkolniDruzina.map((person:Person,key) => (
                                            <li key={key}>
                                                <button onClick={()=>selectPerson(person)}>
                                                    <img className="mx-auto h-24 w-24 rounded-full" src={person.picture} alt="" />
                                                </button>
                                                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.title} {person.name} {person.surname}</h3>

                                                <p className="text-sm leading-6 text-gray-600">{person.roleDisplay}</p>
                                            </li>
                                        )):selectedOption.id === 5 ?
                                                Krouzky.map((person:Person,key) => (
                                                    <li key={key}>
                                                        <button onClick={()=>selectPerson(person)}>
                                                            <img className="mx-auto h-24 w-24 rounded-full" src={person.picture} alt="" />
                                                        </button>
                                                        <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.title} {person.name} {person.surname}</h3>

                                                        <p className="text-sm leading-6 text-gray-600">{person.roleDisplay}</p>
                                                    </li>
                                                )):selectedOption.id === 6 ?
                                                    Provoznitym.map((person:Person,key) => (
                                                        <li key={key}>
                                                            <button onClick={()=>selectPerson(person)}>
                                                                <img className="mx-auto h-24 w-24 rounded-full" src={person.picture} alt="" />
                                                            </button>
                                                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.title} {person.name} {person.surname}</h3>

                                                            <p className="text-sm leading-6 text-gray-600">{person.roleDisplay}</p>
                                                        </li>
                                                    ))
                                        :
                                        <div></div>
                    }
                </ul>
                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                        <div>
                                            <div className="mx-auto flex  items-center justify-center rounded-full ">
                                                <img className="mx-auto h-24 w-24 rounded-full object-cover overflow-hidden" src={selectedPerson?.picture} alt="" />
                                            </div>
                                            <div className="mt-3 text-center sm:mt-5">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    <div className="flex flex-row gap-x-1 justify-center">
                                                        <p>
                                                            {selectedPerson?.title}
                                                        </p>
                                                        <p>
                                                            {selectedPerson?.name}
                                                        </p>
                                                        <p>
                                                            {selectedPerson?.surname}
                                                        </p>
                                                    </div>
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        {selectedPerson?.roleDisplay}
                                                    </p>
                                                </div>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        {selectedPerson?.medailon}
                                                    </p>
                                                </div>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        {selectedPerson?.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="button"
                                                className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                onClick={() => setOpen(false)}
                                            >
                                                Zpět
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

            </div>
        </div>
    )
}
