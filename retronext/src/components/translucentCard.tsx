import Link from "next/link";
import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";

interface ITranslucentCard {
  thumbnail: string;
  title: string;
  total: number;
}

function translucentCard({ thumbnail, title, total }: ITranslucentCard) {
  return (
    <div className="p-5 border border-gray-700 shadow-md rounded-xl">
      <div className="relative overflow-hidden h-[360px]">
        <Image
          src={thumbnail}
          alt={title}
          width={650}
          height={400}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute z-10 inset-0 w-full h-full bg-white opacity-10"></div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold font-sans pt-2.5 text-title">
            Liked videos
          </h2>
          <p className="text-sm text-category font-medium">
            Total Videos:<span className="font-semibold"> {total}</span>
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-x-1 rounded-3xl py-2 px-6 bg-retro mt-4 text-white font-medium"
        >
          Play all
          <span className="text-sm">
            <MdPlayArrow />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default translucentCard;
