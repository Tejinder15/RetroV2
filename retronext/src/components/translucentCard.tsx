import Link from "next/link";

interface ITranslucentCard {
  thumbnail: string;
  title: string;
}

function translucentCard({ thumbnail, title }: ITranslucentCard) {
  return (
    <div className="p-5 border border-black rounded-xl">
      <img src={thumbnail} alt={title} className="rounded-xl" />
      <h2 className="text-2xl font-bold pt-2.5">Liked videos</h2>
      <h4 className="text-lg font-semibold pt-1">username</h4>
      <p className="text-sm">playlist length</p>
      <Link
        href="/"
        className="inline-block rounded-3xl py-2 px-6 bg-green-400 mt-4"
      >
        Play all
      </Link>
    </div>
  );
}

export default translucentCard;
