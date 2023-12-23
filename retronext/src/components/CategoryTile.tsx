import { RadioGroup } from "@headlessui/react";

interface ICategoryTile {
  category: string;
  setCategory: (i: string) => void;
}

export default function CategoryTile({ category, setCategory }: ICategoryTile) {
  const categories = ["All", "Gaming", "Vlog", "Music", "Podcast", "Comedy"];

  return (
    <RadioGroup
      value={category}
      onChange={setCategory}
      className="flex items-center gap-6"
    >
      {categories.map((item, idx) => (
        <RadioGroup.Option
          key={idx}
          value={item}
          className="py-1.5 px-3 ui-checked:bg-white ui-checked:text-black ui-not-checked:bg-gray-800 ui-not-checked:text-white rounded-md text-sm cursor-pointer"
        >
          {item}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}
