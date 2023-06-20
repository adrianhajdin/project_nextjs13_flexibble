import { UserNode } from "@/common.types";
import Link from "next/link";

import CustomButton from "../Button";

type Props = {
    user: UserNode;
};

const ProfileButtons = ({ user }: Props) => {
    return (
        <>
            <CustomButton title="Follow" leftIcon="/plus-round.svg" bgColor="bg-light-white-400" textColor="text-black-100" />
            <Link href={`mailto:${user?.email}`}>
                <CustomButton title="Hire Me" leftIcon="/email.svg" />
            </Link>
        </>
    );
};

export default ProfileButtons;
