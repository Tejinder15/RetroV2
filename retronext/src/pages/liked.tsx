import Layout from "@/components/layout";
import SuggestedCard from "@/components/suggestedCard";
import TranslucentCard from "@/components/translucentCard";
import VideoList from "@/components/videoList";
import {
  useGetLikedVideosQuery,
  useRemoveLikedVideoMutation,
} from "@/services/retro";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Liked() {
  const { token } = useSelector((state: RootState) => state.auth);
  const { data, isError, isSuccess, error, isLoading } =
    useGetLikedVideosQuery(token);
  const [
    removeLikedVideo,
    { error: removeLikeError, isSuccess: removeLikeSuccess },
  ] = useRemoveLikedVideoMutation();

  if (isLoading) return <p>...Loading</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <Layout>
      <div className="grid grid-cols-4 items-start">
        <div className="col-span-2 sticky top-20">
          <TranslucentCard
            thumbnail={data && data[0]?.thumbnail}
            title={data && data[0]?.title}
            total={data && data.length}
          />
        </div>
        <div className="col-span-2 pt-4">
          <div className="px-4 py-2">
            {data.map((item: any, idx: number) => (
              <SuggestedCard
                {...item}
                key={idx}
                actions={[
                  {
                    children: "Remove",
                    onClick: async () => {
                      await removeLikedVideo({
                        vid: item._id,
                        token,
                      });
                    },
                  },
                ]}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
