
export function VideoCard(props:any){
    return (
        <div className="p-3 cursor-pointer">
            <img className='rounded-xl'src={props.image}/>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1 ">
                    <img className= {'rounded-full w-12 h-8'}src={props.thumbnail}/>
                </div>
                <div className="col-span-11">
                    <div>
                        {props.title}
                    </div>
                <div className="col-span-11 text-gray-600 text-base">
                    {props.author}
                </div>
                <div className="col-span-11 text-gray-600 text-base">
                   {props.views} | {props.timestamp}
                </div>
            </div>
            </div>
        </div>
    )
}