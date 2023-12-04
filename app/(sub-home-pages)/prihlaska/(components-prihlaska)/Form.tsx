"use client"
import {useRef, useState} from "react";

export default function Form(){
    const [jmeno,setJmeno] = useState("")
    const jmenoRef = useRef<HTMLInputElement | null>(null);
    const [prijimeni, setPrijimeni] = useState("")
    const prijimeniRef = useRef<HTMLInputElement | null>(null);
    const [email, setEmail] = useState("")
    const emailRef = useRef<HTMLInputElement | null>(null);
    const [tel,setTel]= useState("")
    const telRef = useRef<HTMLInputElement | null>(null);
    const [message,setMessage] = useState("")
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const handleSubmit = async (event:any) => {
        event.preventDefault();

        const formData = {
            jmeno: jmeno,
            prijimeni: prijimeni,
            email: email,
            tel: tel,
            message: message
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Reset form or show success message
                console.log("Email sent successfully");
            } else {
                // Handle errors
                console.log("Failed to send email");
            }
        } catch (error) {
            console.error("Failed to send email", error);
        }
    };

    return(
        <div>
            <form className="max-w-2xl px-6 mx-auto ">
                <div className="flex flex-col md:flex-row w-full gap-x-5 gap-y-3">
                    <div className="flex flex-col w-full ">
                        <p>Jméno</p>
                        <input placeholder="" className=" border-gray-200 shadow-lg  rounded-lg w-full" onChange={e => setJmeno(e.target.value)} ref={jmenoRef} value={jmeno} />
                    </div>
                    <div className="flex flex-col w-full">
                        <p>Přijímení</p>
                        <input placeholder="" className="border-gray-200 shadow-lg  rounded-lg w-full" onChange={e => setPrijimeni(e.target.value)} ref={prijimeniRef} value={prijimeni} />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-x-5 pt-3 gap-y-3">
                    <div className="flex flex-col w-full">
                        <p>Email</p>
                        <input type="email" placeholder="" className=" border-gray-200 shadow-lg  rounded-lg w-full" onChange={e => setEmail(e.target.value)} ref={emailRef} value={email} />
                    </div>
                    <div className="flex flex-col w-full">
                        <p>Mobil</p>
                        <input type="tel" placeholder="" className="border-gray-200 shadow-lg  rounded-lg w-full" onChange={e => setTel(e.target.value)} ref={telRef} value={tel} />
                    </div>
                </div>
                <div className="pt-3 flex flex-col">
                    <p className="">Zpráva</p>
                    <textarea placeholder="Prosíme upřesněte, proč myslíte, že Edisona je to pravé pro Vás a Vaše dítě, něco o dítěti, cokoliv důležitého Vás napadne. O nás už toho víte dost, tak teď jste na řadě vy. :-)" className=" h-36 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={e => setMessage(e.target.value)} ref={messageRef} value={message} />
                </div>
                <div className="flex flex-col items-center pt-3">
                    <button className="sm:w-fit w-full bg-white text-black py-2 px-10 rounded-xl font-medium tracking-tight drop-shadow-md">Odeslat zprávu</button>

                </div>

            </form>
        </div>
    )
}