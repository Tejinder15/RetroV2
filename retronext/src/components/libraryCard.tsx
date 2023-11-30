import Link from "next/link";

interface ILibraryCard {
  thumbnail: string;
}

function LibraryCard({ thumbnail }: ILibraryCard) {
  return (
    <Link href="/">
      <div>
        <div className="relative">
          <img src={thumbnail} alt="playlist" />
          <div className="absolute top-0 bg-black right-0 bottom-0 bg-opacity-70 px-5 flex items-center justify-center w-2/5">
            <p className="text-white">no of videos</p>
          </div>
        </div>
        <div>
          <h5>Playlist Name</h5>
          <p>creator</p>
          <p>View full playlist</p>
        </div>
      </div>
    </Link>
  );
}

export default LibraryCard;
