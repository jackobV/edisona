interface propInt {
    text:string;
}
export default function SubHomeMenu(props:propInt){
    const numberProp = parseInt(props.text);
    console.log(props.text)
    return(
        <div className="max-w-4xl mx-auto md:pt-20">
            <div className="flex flex-col md:items-center items-start overflow-x-scroll pb-2">
                <div className="flex flex-row gap-x-4 bg-white px-4 py-4 rounded-b-2xl md:rounded-2xl drop-shadow-md truncate text-sm md:text-base ">
                    {
                        numberProp === 0 ?
                            <div className="text-[#DB574E]"><a href="/vizeskoly">Vize školy</a></div>
                        :
                            <div className=""><a href="/vizeskoly">Vize školy</a></div>
                    }
                    {
                        numberProp === 1 ?
                            <div className="text-[#F9B64B]"><a href="/koncepce">Koncepce</a></div>
                            :
                            <div className=""><a href="/koncepce">Koncepce</a></div>


                    }
                    {
                        numberProp === 2 ?
                            <div className="text-[#2DAD9E]"><a href="/tridaavybaveni">Třídy a vybavení</a></div>

                            :
                            <div className=""><a href="/tridaavybaveni">Třídy a vybavení</a></div>


                    }
                    {
                        numberProp === 3 ?
                            <div className="text-[#DB574E]"><a href="/pruvodciatym">Průvodci a tým</a></div>

                            :
                            <div className=""><a href="/pruvodciatym">Průvodci a tým</a></div>


                    }
                    {
                        numberProp === 4 ?
                            <div className="text-[#F9B64B]"><a href="spolupracesrodici">Spolupráce s rodiči</a></div>

                            :
                            <div className=""><a href="spolupracesrodici">Spolupráce s rodiči</a></div>


                    }
                </div>
            </div>
        </div>
    )
}