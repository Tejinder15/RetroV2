import Layout from "@/components/layout";
import SuggestedCard from "@/components/suggestedCard";
import TranslucentCard from "@/components/translucentCard";
import VideoList from "@/components/videoList";
import {
  useGetWatchLaterQuery,
  useRemoveFromWatchLaterMutation,
} from "@/services/retro";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function watchlater() {
  const { token } = useSelector((state: RootState) => state.auth);
  const { data, error, isLoading } = useGetWatchLaterQuery(token);
  const [removeFromWatchLater] = useRemoveFromWatchLaterMutation();
  if (isLoading) return <p>...Loading</p>;
  if (error) return <p>Something went wrong</p>;
  console.log(data);
  return (
    <Layout>
      <div className="grid grid-cols-4 items-start px-6 py-8 gap-x-8">
        <div className="col-span-2 sticky top-20">
          <TranslucentCard
            thumbnail={data && data[0]?.thumbnail}
            title={data && data[0]?.title}
            total={data && data.length}
          />
        </div>
        <div className="col-span-2 pt-4 justify-items-center border border-white">
          <div className="px-4 py-2 flex flex-col gap-4">
            {data.map((item: any, idx: number) => (
              <SuggestedCard
                {...item}
                key={idx}
                actions={[
                  {
                    children: "remove",
                    onClick: () =>
                      removeFromWatchLater({ token, vid: { id: item._id } }),
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
