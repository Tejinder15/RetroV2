import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0">
      <nav className="text-white flex items-center w-full justify-between max-h-20 bg-body py-5 px-6">
        <Link href={"/"}>
          <h1>Retro</h1>
        </Link>
        <Link
          href={"login"}
          className="bg-retro py-2 px-4 rounded-sm"
          style={{ color: "white" }}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
