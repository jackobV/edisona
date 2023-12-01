import PocketBase from "pocketbase";
interface document{
    title:string
    url:string
}
export const revalidate = "3000"
export default async function Dokumentykestazenilist(){
    const pb = new PocketBase('https://pocketbase-production-ab0e.up.railway.app');
    const resultAwaitDocuments = await pb.collection("dokumenty").getFullList()
    const documentList:Array<document> = resultAwaitDocuments.map((document )=>({
        title : document.nazev,
        url: "https://pocketbase-production-ab0e.up.railway.app/api/files/xp1gvxt7pluknme/"+document.id+"/"+document.field
    }))
    return(
        <div className="flex flex-col mx-auto max-w-7xl gap-y-2 px-6 lg:px-8 ">
            {documentList.map((document) =>(
                <div className="flex flex-row gap-x-3 items-baseline">
                    <p className="">{document.title}</p>
                    <a href={document.url} className="underline text-blue-600 text-sm">stáhnout</a>
                </div>
            ))}
        </div>
    )
}