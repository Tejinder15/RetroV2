import CategoryTile from "@/components/CategoryTile";
import Layout from "@/components/layout";
import VideoCard from "@/components/videocard";
import {
  useAddToWatchLaterMutation,
  useGetAllVideosQuery,
} from "@/services/retro";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import PlaylistModal from "@/components/playlistModal";

export default function Home() {
  const { token } = useSelector((state: RootState) => state.auth);
  const [category, setCategory] = useState("All");
  const {
    data: videosData,
    error: videosDataError,
    isLoading: videosDataLoading,
  } = useGetAllVideosQuery(category);
  const router = useRouter();
  const [addToWatchLater, { isError, error, isLoading, isSuccess }] =
    useAddToWatchLaterMutation();

  if (videosDataError)
    return <p className="text-white">Something went wrong</p>;

  console.log(error);

  return (
    <Layout>
      {videosDataLoading ? (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
        </div>
      ) : (
        <>
          <section className="lg:px-10 px-2 py-3 border-y border-gray-800">
            <CategoryTile category={category} setCategory={setCategory} />
          </section>
          <section>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-10 py-5 lg:px-5 px-2 w-full justify-items-center">
              {videosData.map((item: any, idx: number) => (
                <VideoCard
                  id={item._id}
                  {...item}
                  key={idx}
                  actions={[
                    {
                      children: "Add to watchlater",
                      onClick: async () => {
                        if (token) {
                          await addToWatchLater({
                            token,
                            vid: { id: item._id },
                          });
                          if (isSuccess) {
                            toast.success("Added to WatchLater");
                          }
                          if (isError || error) {
                            toast.error("Something Went Wrong");
                          }
                        } else {
                          router.replace("/login");
                        }
                      },
                    },
                    {
                      children: "Save to Playlist",
                      onClick: () => console.log("Save to Playlist"),
                    },
                  ]}
                />
              ))}
            </div>
          </section>
          <PlaylistModal />
        </>
      )}
    </Layout>
  );
}
