"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { updateSearchParams } from "@/lib/utils";

const ProfileFilter = () => {
    const router = useRouter();
    const [filter, setFilter] = useState("work");

    useEffect(() => {
        const newPathName = updateSearchParams("tab", "work");

        router.push(newPathName)
    }, [router])


    return (
        <div className="flexBetween max-md:flex-col pb-7 w-full text-base font-medium border-b border-light-white-400">
            recent work
        </div>
    );
};

export default ProfileFilter;
