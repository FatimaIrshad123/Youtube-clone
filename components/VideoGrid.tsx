import { VideoCard } from "./VideoCard"
const videos = [
    {
        title:'How to learn coding | 30 days plan | code with me',
        image:'/img.png',
        author:'Fatima',
        views:'10M',
        timestamp:'2 weeks ago',
        thumbnail:'/img1.png'
    },
    {
        title:'How to learn coding | 30 days plan | code with me',
        image:'/img.png',
        author:'Fatima',
        views:'10M',
        timestamp:'2 weeks ago',
        thumbnail:'/img1.png'
    },
    {
        title:'How to learn coding | 30 days plan | code with me',
        image:'/img.png',
        author:'Fatima',
        views:'10M',
        timestamp:'2 weeks ago',
        thumbnail:'/img1.png'
    },
    {
        title:'How to learn coding | 30 days plan | code with me',
        image:'/img.png',
        author:'Fatima',
        views:'10M',
        timestamp:'2 weeks ago',
        thumbnail:'/img1.png'
    },
    {
        title:'How to learn coding | 30 days plan | code with me',
        image:'/img.png',
        author:'Fatima',
        views:'10M',
        timestamp:'2 weeks ago',
        thumbnail:'/img1.png'
    },
    {
        title:'How to learn coding | 30 days plan | code with me',
        image:'/img.png',
        author:'Fatima',
        views:'10M',
        timestamp:'2 weeks ago',
        thumbnail:'/img1.png'
    }
]
export function VideoGrid(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {videos.map(video => <div>
                <VideoCard 
        title= {video.title}
        image={video.image} 
        author={video.author} 
        views={video.views} 
        timestamp={video.timestamp} 
        thumbnail={video.thumbnail}/>
            </div>)}
        </div>
    )
}