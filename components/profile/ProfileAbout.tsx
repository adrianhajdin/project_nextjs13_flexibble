"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "../Modal";
import CustomButton from "../Button";
import FormField from "../FormField";
import SocialMedia from "./SocialMedia";
import { updateUser } from "@/lib/actions";

type Props = {
    user: any;
    // sessionUserId: string
};

type FormState = {
    name: string;
    description: string;
    githubUrl: string;
    linkedinUrl: string;
};
// import { getCurrentUser } from "@/lib/session";


const ProfileAbout = async ({ user }: Props) => {
    const router = useRouter()

    const [openEditModal, setOpenEditModal] = useState(false);
    const [submitting, setSubmitting] = useState(false)

    const [form, setForm] = useState({
        name: user.name || "",
        description: user.description || "",
        githubUrl: user.githubUrl || "",
        linkedinUrl: user.linkedinUrl || ""
    })

    const handleStateChange = (fieldName: keyof FormState, value: string) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            await updateUser(user?.id, form)
            alert("Profile Successfully updated!")
            router.back()
        } catch (error) {
            alert("Failed to update info. Try again!")
            console.error("Something bad happened")
        } finally {
            setSubmitting(false)
        }

    }

    return (
        <section className="flexStart flex-col w-full lg:gap-16 gap-8 mt-8">
            {openEditModal && (
                <Modal>
                    <form
                        onSubmit={handleSubmit}
                        className="flexStart form-container">
                        <h3 className="text-4xl font-bold text-left w-full">
                            Update Profile
                        </h3>
                        <FormField
                            title="Name"
                            state={form.name}
                            placeholder="John Doe"
                            setState={(value) => handleStateChange('name', value)}
                        />

                        <FormField
                            title='Description'
                            state={form.description}
                            placeholder="A dribble clone web application made using..."
                            isTextArea
                            setState={(value) => handleStateChange('description', value)}
                        />

                        <FormField
                            type="url"
                            title="Github"
                            state={form.githubUrl}
                            placeholder="https://github.com/adrianhajdin"
                            setState={(value) => handleStateChange('githubUrl', value)}
                        />

                        <FormField
                            type="url"
                            title="LinkedIn"
                            state={form.linkedinUrl}
                            placeholder="https://github.com/adrianhajdin"
                            setState={(value) => handleStateChange('linkedinUrl', value)}
                        />

                        <div className="w-full">
                            <CustomButton
                                type="submit"
                                title="Update Info"
                                submitting={submitting}
                            />
                        </div>
                    </form>
                </Modal>
            )}

            <SocialMedia
                title="Github"
                url={user?.githubUrl}
                buttonText="Add GitHub"
                userId={user?.id}
                // sessionUserId={sessionUserId}
                onClick={() => setOpenEditModal(true)}
            />
            <SocialMedia
                title="LinkedIn"
                url={user?.linkedinUrl}
                buttonText="Add LinkedIn"
                userId={user?.id}
                // sessionUserId={sessionUserId}
                onClick={() => setOpenEditModal(true)}
            />

            {/* {sessionUserId === user?.id && (
                <div className="w-full">
                    <CustomButton
                        title="Edit Profile"
                        handleClick={() => setOpenEditModal(true)}
                    />
                </div>
            )} */}
        </section>
    );
};

export default ProfileAbout;
