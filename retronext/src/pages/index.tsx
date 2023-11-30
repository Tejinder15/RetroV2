import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import VideoCard from "@/components/videocard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="grid grid-cols-3 gap-5 py-5 lg:px-5 px-2 w-full">
          <VideoCard
            id={"Tqsz6fjvhZM"}
            title={"Hostel - Stand Up Comedy ft. Anubhav Singh Bassi"}
            thumbnail={
              "https://img.youtube.com/vi/Tqsz6fjvhZM/maxresdefault.jpg"
            }
            creator={"Anubhav Bassi"}
            logo={
              "https://yt3.ggpht.com/ytc/AKedOLS7IEPwzVpf3MOKIBHsLlIIG_UTH7CKO2iKYNxw4A=s88-c-k-c0x00ffffff-no-rj"
            }
          />
        </div>
      </section>
    </Layout>
  );
}
