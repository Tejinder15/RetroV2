import Layout from "@/components/layout";
import VideoList from "@/components/videoList";

export default function Watch() {
  return (
    <Layout>
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <div>
            <div
              className="relative w-full overflow-hidden"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${"Tqsz6fjvhZM"}?autoplay=1&mute=1`}
                className="absolute inset-0 w-full h-full border-none"
              ></iframe>
            </div>
            {/* //TODO: Video Footer */}
            <div>
              <span>video Title</span>
              <span>Video Views</span>
            </div>
            <div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
          {/* //TODO: COMMENT SECTION TO BE Added */}
        </div>
        <div className="col-span-2 ">
          <VideoList />
        </div>
      </div>
    </Layout>
  );
}
