"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { profileFilters } from "@/constant";
import { updateSearchParams } from "@/lib/utils";

const ProfileFilter = () => {
    const router = useRouter();
    const [filter, setFilter] = useState("work");

    useEffect(() => {
        const newPathName = updateSearchParams("tab", "work");

        router.push(newPathName)
    }, [router])

    const handleChangeFilter = (item: string) => {
        setFilter(item)

        const newPathName = updateSearchParams("tab", item);
        
        router.push(newPathName);
    }

    return (
        <div className="flexBetween max-md:flex-col pb-7 w-full text-base font-medium border-b border-light-white-400">
            <ul className="flex md:gap-x-8 gap-x-5 overflow-auto">
                {profileFilters.map((profileFilter) => (
                    <button
                        key={profileFilter}
                        type="button"
                        onClick={() => handleChangeFilter(profileFilter)}
                        className={`${filter !== profileFilter && "opacity-60"} capitalize`}
                    >
                        {profileFilter}
                    </button>
                ))}
            </ul>
            <button type="button" className="flexCenter gap-3 text-small p-3 mt-4 opacity-60 border border-light-white-500 rounded-lg max-md:w-full" >
                Recent Shorts
                <Image
                    src="/arrow-down.svg"
                    width={10}
                    height={5}
                    alt="arrow down"
                />
            </button>
        </div>
    );
};

export default ProfileFilter;
