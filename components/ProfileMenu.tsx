"use client"

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

type UserProps = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
};

type Props = {
    session: {
        user?: UserProps;
    };
};


const ProfileMenu = ({ session }: Props) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="flexCenter z-10 flex-col relative">
            <Menu as="div">
                <Menu.Button
                    className="flexCenter"
                    onMouseEnter={() => setOpenModal(true)}
                >
                    {session?.user?.image && (
                        <Image
                            src={session.user.image}
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="user profile image"
                        />
                    )}
                </Menu.Button>

                <Transition
                    show={openModal}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        static
                        className="flexStart flex-col absolute right-1/2 translate-x-1/2 mt-3 p-7 sm:min-w-[300px] rounded-xl bg-white border border-nav-border shadow-menu"
                        onMouseLeave={() => setOpenModal(false)}
                    >
                        <div className="flex flex-col items-center gap-y-4">
                            {session?.user?.image && (
                                <Image
                                    src={session?.user?.image}
                                    className="rounded-full"
                                    width={80}
                                    height={80}
                                    alt="profile Image"
                                />
                            )}
                            <p className="font-semibold">{session?.user?.name}</p>
                        </div>

                        <div className="flex flex-col gap-3 pt-10 items-start w-full">
                            <Menu.Item>
                                <Link
                                    href="/profile"
                                    className="text-sm"
                                >
                                    Work Preferences
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    href="/profile"
                                    className="text-sm"
                                >
                                    Settings
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    href="/profile"
                                    className="text-sm"
                                >
                                    Profile
                                </Link>
                            </Menu.Item>
                        </div>
                        <div className="w-full flexStart border-t-[1px] border-nav-border mt-5 pt-5">
                            <Menu.Item>
                                <button
                                    type="button"
                                    className="text-sm"
                                    onClick={() => signOut()}
                                >
                                    Sign out
                                </button>
                            </Menu.Item>

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default ProfileMenu