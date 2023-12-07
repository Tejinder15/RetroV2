import Layout from "@/components/layout";
import TranslucentCard from "@/components/translucentCard";
import VideoList from "@/components/videoList";
import { useGetLikedVideosQuery } from "@/services/retro";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Liked() {
  const { token } = useSelector((state: RootState) => state.auth);
  const { data, isError, isSuccess, error, isLoading } =
    useGetLikedVideosQuery(token);

  if (isLoading) return <p>...Loading</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <Layout>
      <div className="grid grid-cols-4 items-start">
        <div className="col-span-2 sticky top-20">
          <TranslucentCard
            thumbnail={data && data[0]?.thumbnail}
            title={data && data[0]?.title}
          />
        </div>
        <div className="col-span-2 pt-4">
          <VideoList list={data} />
        </div>
      </div>
    </Layout>
  );
}
