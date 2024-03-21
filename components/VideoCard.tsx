
export function VideoCard(){
    return (
        <div>
            <img className='rounded-xl'src="/img.png"/>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1 pl-2">
                    <img className= {'rounded-full w-12 h-12'}src="/img.png"/>
                </div>
                <div className="col-span-11">
                    <div>
                    Pokemon | Fatima
                </div>
                <div className="col-span-11 text-gray-600 text-base">
                    Fatima
                </div>
                <div className="col-span-11 text-gray-600 text-base">
                   14M | 13 days ago
                </div>
            </div>
            </div>
        </div>
    )
}