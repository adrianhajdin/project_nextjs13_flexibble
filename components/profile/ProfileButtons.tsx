import { UserNode } from "@/common.types";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../Button";

type Props = {
    user: UserNode;
};

const ProfileButtons = ({ user }: Props) => {
    return (
        <>
            <CustomButton
                title="Follow"
                leftIcon="/plus-round.svg"
                bgColor="bg-light-white-400"
                textColor="text-black-100"
            />
            <Link href={`mailto:${user?.email}`}>
                <CustomButton
                    title="Hire Me"
                    leftIcon="/email.svg"
                />
            </Link>
            <button
                type="button"
                className="flexCenter p-4 rounded-xl border border-gray-50"
            >
                <Image
                    src="/minus.svg"
                    width={14}
                    height={14}
                    alt="minus icon"
                />
            </button>
        </>
    );
};

export default ProfileButtons;
