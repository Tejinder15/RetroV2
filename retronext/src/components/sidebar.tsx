import Link from "next/link";
import { MdThumbUp } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from "next/router";

const sideLinks = [
  {
    label: "Home",
    icon: <AiFillHome />,
    link: "/",
  },
  {
    label: "Liked",
    icon: <MdThumbUp />,
    link: "/liked",
  },
  {
    label: "History",
    icon: <MdHistory />,
    link: "/history",
  },
  {
    label: "Playlist",
    icon: <MdVideoLibrary />,
    link: "/library",
  },
  {
    label: "Watch Later",
    icon: <MdWatchLater />,
    link: "/watchlater",
  },
];

function sidebar() {
  const { route } = useRouter();
  return (
    <aside className="sticky left-0 top-0 sm:min-h-screen h-20 px-5 flex items-center bg-sidebar">
      <ul className="flex flex-col gap-11">
        {sideLinks.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.link}
              className="text-2xl"
              style={{
                color: `${
                  route === item.link ? "var(--retro-color)" : "white"
                }`,
              }}
              title={item.label}
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default sidebar;
