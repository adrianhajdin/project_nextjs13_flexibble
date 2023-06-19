"use client";

import { useRouter } from "next/navigation";

import CustomButton from "./Button";
import { updateSearchParams } from "@/lib/utils";

type Props = {
    cursor: string
}

const LoadMore = ({ cursor }: Props) => {
    const router = useRouter();

    const handleNavigation = () => {
        const newPathname = updateSearchParams("cursor", `${cursor}`);

        router.push(newPathname);
    };

    return (
        <div className="w-full flexCenter gap-5 mt-10">
            <CustomButton
                title="Next Page"
                handleClick={handleNavigation}
            />
        </div>
    );
};

export default LoadMore;