import { VideoCard } from "@/components/VideoCard";

export default function Home() {
  return (
    <div>
      Hi  
      <VideoCard 
        title={'How to learn coding | 30 days plan | code with me'}
        image={'/img.png'} 
        author={'Fatima'} 
        views={'10M'} 
        timestamp={'2 weeks ago'} 
        thumbnail={'/img1.png'}/>
        
    </div>
  );
}
