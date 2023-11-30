import SuggestedCard from "./suggestedCard";

export default function VideoList() {
  const list = [
    {
      id: "Tqsz6fjvhZM",
      title: "Hostel - Stand Up Comedy ft. Anubhav Singh Bassi",
      thumbnail: "https://img.youtube.com/vi/Tqsz6fjvhZM/maxresdefault.jpg",
      creator: "Anubhav Bassi",
      logo: "https://yt3.ggpht.com/ytc/AKedOLS7IEPwzVpf3MOKIBHsLlIIG_UTH7CKO2iKYNxw4A=s88-c-k-c0x00ffffff-no-rj",
    },
  ];
  return (
    <div className="px-4 py-2">
      {list.map((item, idx) => (
        <SuggestedCard {...item} key={idx} />
      ))}
    </div>
  );
}
