import { Searchbar } from "./Searchbar";
import { Sidebar } from "./Sidebar";

export function Appbar(){
    return (
        <div>
        <div className="flex justify-between pt-1 p-2">
            <div className="text-md inline-flex items-center pb-2 font-bold text-2xl">
                <img src="/ytb.png" className="h-6 w-8"></img>
                Youtube
            </div>
            <div>
                <Searchbar />
            </div>
            <div>
                Signin
            </div>
        </div>
        </div>
    )
}