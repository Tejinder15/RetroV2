import Link from "next/link";

const sideLinks = [
  {
    label: "Home",
    icon: "Home",
    link: "/",
  },
  {
    label: "Liked",
    icon: "Like",
    link: "/liked",
  },
  {
    label: "History",
    icon: "History",
    link: "/history",
  },
  {
    label: "Playlist",
    icon: "Playlist",
    link: "/playlist",
  },
  {
    label: "Watch Later",
    icon: "watchlater",
    link: "/watchlater",
  },
];

function sidebar() {
  return (
    <aside className="sticky left-0 top-0 sm:min-h-screen h-20 px-4 flex items-center bg-sidebar">
      <ul className="flex flex-col gap-3">
        {sideLinks.map((item, idx) => (
          <li key={idx}>
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default sidebar;
