interface aktualita {
    title:string;
    description:string;
    link:string;
    thumbnail:string;
}
export default function Aktualita(props:aktualita){
    return(
        <div className="bg-white py-6 px-4 rounded-2xl drop-shadow-md flex flex-col items-center">
            <a href={props.link}><h3 className="text-xl underline font-medium">{props.title}</h3></a>
            <img src={props.thumbnail} className="pt-3"/>
            <p className="pt-2 font-light text-xs pb-3">{props.description}</p>
            <button className="w-11/12 bg-black text-white py-2 rounded-md drop-shadow-md">Celý článek</button>
        </div>
    )
}