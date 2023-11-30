import Layout from "@/components/layout";
import TranslucentCard from "@/components/translucentCard";
import VideoList from "@/components/videoList";

export default function Liked() {
  return (
    <Layout>
      <div className="grid grid-cols-4 items-start">
        <div className="col-span-2 sticky top-20">
          <TranslucentCard thumbnail="fasd" title="abc" />
        </div>
        <div className="col-span-2 pt-4">
          <VideoList />
        </div>
      </div>
    </Layout>
  );
}
