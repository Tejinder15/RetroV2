import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex items-start">
        <Sidebar />
        <section className="w-full">
          <Navbar />
          {children}
        </section>
      </main>
    </>
  );
}
