import SuggestedCard from "./suggestedCard";

interface IVideoList {
  list: any;
  possibleActions: {
    label: string;
    action: () => void;
  }[];
}

export default function VideoList({ list, possibleActions }: IVideoList) {
  return (
    <div className="px-4 py-2">
      {list.map((item: any, idx: number) => (
        <SuggestedCard {...item} key={idx} />
      ))}
    </div>
  );
}
