import Layout from "@/components/layout";
import VideoCard from "@/components/videocard";
import { useGetAllVideosQuery } from "@/services/retro";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "@/features/authSlice";

export default function Home() {
  const { data, error, isLoading } = useGetAllVideosQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    dispatch(setUser(user));
  }, []);

  if (isLoading) return <p>...Loading</p>;
  if (error) return <p>Something went wrong</p>;
  console.log(data);
  return (
    <Layout>
      <section>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-5 lg:px-5 px-2 w-full justify-items-center">
          {data.map((item: any, idx: number) => (
            <VideoCard {...item} key={idx} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
