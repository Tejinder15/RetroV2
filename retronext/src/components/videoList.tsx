import SuggestedCard from "./suggestedCard";

interface IVideoList {
  list: any;
}

export default function VideoList({ list }: IVideoList) {
  return (
    <div className="px-4 py-2">
      {list.map((item: any, idx: number) => (
        <SuggestedCard {...item} key={idx} />
      ))}
    </div>
  );
}
