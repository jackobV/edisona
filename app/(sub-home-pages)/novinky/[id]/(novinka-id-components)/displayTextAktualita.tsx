import parse from 'html-react-parser';
import "../../../../aktualita.css"
interface AktualitaText{
    text:string;
}
export default function DisplayTextAktualita(props:AktualitaText){
    const renderedDescription = parse(`${props.text}`)
    return(
        <div className="bodyArticle">{renderedDescription}</div>
    )
}