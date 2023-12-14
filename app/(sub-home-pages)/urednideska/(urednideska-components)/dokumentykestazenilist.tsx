import PocketBase from "pocketbase";
export interface document{
    title:string
    url:string
}
export interface documentsParam{
    documents:Array<document>
}
export const revalidate = "3000"
export default async function Dokumentykestazenilist({documents}:{documents:documentsParam}){
    return(
        <div className="flex flex-col mx-auto max-w-7xl gap-y-2 px-6 lg:px-8 ">
            <div className="bg-white rounded-2xl max-w-xl mx-auto py-10 px-10 flex flex-col gap-y-5">
                {documents.documents.map((document) =>(
                    <div className="flex flex-col gap-y-1">
                        <div className="flex flex-row gap-x-3 items-baseline">
                            <p className="">{document.title}</p>
                            <a href={document.url} className="underline text-blue-600 text-sm">stáhnout</a>
                        </div>
                        <div className="h-[1px] w-full bg-gray-200"></div>
                    </div>

                ))}
            </div>

        </div>
    )
}