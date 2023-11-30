import Layout from "@/components/layout";
import LibraryCard from "@/components/libraryCard";

function Library() {
  const libraryData: any = [1, 2, 3, 4];
  return (
    <Layout>
      <div className="grid grid-cols-videoContainer gap-5 py-5 lg:px-5 px-2 w-full">
        {libraryData.map((item: number, index: number) => (
          <LibraryCard key={index} thumbnail="asb" />
        ))}
      </div>
    </Layout>
  );
}

export default Library;
