import { Appbar } from "@/components/Appbar";
import { Sidebar } from "@/components/Sidebar";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";

export default function Home() {
  return (
    <div> 
      <Appbar />
      <div className="flex">
        <Sidebar />
        <VideoGrid />
      </div>
    </div>
  );
}
