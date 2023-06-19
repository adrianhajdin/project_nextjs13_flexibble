"use client";

import Image from "next/image";
import { Combobox } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [debouncedUpdateSearchParams, setDebouncedUpdateSearchParams] =
    useState("");

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedUpdateSearchParams(search);
    }, 700);

    return () => clearTimeout(debounceTimeout);
  }, [search]);

  useEffect(() => {
    updateSearchParams(debouncedUpdateSearchParams);
  }, [debouncedUpdateSearchParams]);

  const updateSearchParams = (searchValue: string) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(window.location.search);

    // Update or delete the 'model' search parameter based on the 'model' value
    if (searchValue) {
      searchParams.set("search", searchValue);
    } else {
      searchParams.delete("search");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${window.location.pathname
      }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="flexCenter md:max-w-[277px] w-full relative">
      <Combobox value={search} onChange={setSearch}>
        <div className="relative min-w-full mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left outline-none text-small">
            <Combobox.Input
              className="w-full border-none py-[14px] pl-[15px] pr-10 text-sm leading-5 text-gray-900 outline-0 bg-[#F1F4F5]"
              displayValue={(tag: any) => tag.name}
              onChange={(event) => setSearch(event.target.value)}
            />
            <Combobox.Button
              className={`${search !== "" ? "hidden" : "absolute"
                } inset-y-0 left-0 flex gap-[8px] items-center pl-[15px]`}
            >
              <Image
                src="/magnifying-glass.svg"
                width={14}
                height={14}
                alt="magnifying glass"
              />
              Search
            </Combobox.Button>
          </div>
        </div>
      </Combobox>
    </form>
  );
};

export default SearchBar;
