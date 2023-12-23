import Layout from "@/components/layout";
import WatchCard from "@/components/watchCard";
import {
  useGetVideoByIdQuery,
  useSetVideoCommentMutation,
} from "@/services/retro";
import { RootState } from "@/store";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

export default function Watch() {
  const {
    query: { slug },
  } = useRouter();
  const { token } = useSelector((state: RootState) => state.auth);
  const { data, error, isLoading } = useGetVideoByIdQuery(slug);
  const [
    setVideoComment,
    { error: setCommentError, isLoading: setVideoLoading, isSuccess },
  ] = useSetVideoCommentMutation();
  const [comment, setComment] = useState("");
  if (isLoading) return <p>...Loading</p>;
  if (error) return <p>Something went wrong</p>;
  // console.log(slug);
  // console.log(data);
  console.log(data);
  return (
    <Layout>
      <div className="grid grid-cols-5 px-5 py-2.5">
        <div className="col-span-3">
          <WatchCard
            id={data?._id}
            vid={data?.vid}
            title={data?.title}
            creator={data?.creator}
            likes={data?.likes.length}
            logo={data?.logo}
            description={data?.description}
          />
          {/* //TODO: COMMENT SECTION TO BE Added */}
          <div className="mt-5">
            <h2 className="text-title font-semibold text-xl">Comments</h2>
            <div className="mt-3">
              {token && (
                <div className="flex items-end gap-2">
                  {/* TODO: Add User Profile */}
                  <input
                    type="text"
                    className="border-b border-category text-gray-400 focus:outline-none bg-transparent  w-full"
                    placeholder="Enter Comment.."
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                  />
                  <button
                    className="bg-retro hover:bg-red-600 px-2 py-1.5 text-white text-sm rounded-md"
                    onClick={async (e) => {
                      e.preventDefault();
                      await setVideoComment({
                        id: data._id,
                        commentData: { comment },
                        token: token,
                      });
                      if (isSuccess) {
                        toast.success("Added Comment");
                        setComment("");
                      } else {
                        toast.error("Something went wrong.");
                      }
                    }}
                  >
                    Comment
                  </button>
                </div>
              )}
              {data && data?.comments.length > 0 ? (
                <ul>
                  {data.comments.map((item: any, idx: number) => (
                    <li key={idx} className="text-white">
                      some comment
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="my-6 text-category text-sm">No Comments Yet</p>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-2 ">{/* <VideoList /> */}</div>
      </div>
    </Layout>
  );
}
