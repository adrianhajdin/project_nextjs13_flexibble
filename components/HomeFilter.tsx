"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import SearchBar from "./Searchbar";
import { categoryFilters } from "@/constant";
import { updateSearchParams } from "@/lib/utils";

const HomeFilter = () => {
  const router = useRouter();
  const [tag, setTag] = useState("All");

  const handleTags = (item: string) => {
    const newPathName = updateSearchParams("category", item);
    
    router.push(newPathName);

    setTag(item)
  }

  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
      <ul className="flex gap-2 overflow-auto">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleTags(filter)}
            className={`${tag === filter ? "bg-light-white-300 font-medium" : "font-normal"
              } px-4 py-3 rounded-lg capitalize whitespace-nowrap`}
          >
            {filter}
          </button>
        ))}
      </ul>

      <SearchBar />
    </div>
  );
};

export default HomeFilter;
