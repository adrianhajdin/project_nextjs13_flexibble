"use client"

import Image from 'next/image';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';

import FormField from './FormField';
import CustomButton from './Button';
import CustomMenu from './CustomMenu';
import { categoryFilters } from '@/constant';
import { updateProject, createNewProject } from '@/lib/actions';
import { FormState, ProjectNode } from '@/common.types';

type Props = {
    type: string,
    session: any,
    project?: ProjectNode
}

const ProjectForm = ({ type, session, project }: Props) => {
    const router = useRouter()

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [form, setForm] = useState<FormState>({
        title: project?.title || "",
        description: project?.description || "",
        image: project?.image || "",
        liveSiteUrl: project?.liveSiteUrl || "",
        githubUrl: project?.githubUrl || "",
        category: project?.category || ""
    })

    const handleStateChange = (fieldName: keyof FormState, value: string) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: value,
        }));
    };

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const file = e.target.files?.[0];

        if (!file) return;

        if (!file.type.includes('image')) {
            alert('Please upload an image file!');
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            const result = reader.result as string;
            handleStateChange("image", result)
        };
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            if (type === "create") {
                await createNewProject(form, session?.user?.id)
                router.push("/")
            }

            if (type === "edit") {
                // @ts-ignore
                await updateProject(form, project?.id)
                router.push("/")
            }

        } catch (error) {
            alert(`Failed to ${type === "create" ? "create" : "edit"} a project. Try again!`)
            console.error("Something bad happened", error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flexStart flex-col w-full lg:pt-24 pt-12 gap-10 text-lg max-w-5xl mx-auto">
            <div className="flexStart w-full lg:min-h-[400px] min-h-[200px] relative">
                <label
                    htmlFor="poster"
                    className="flexCenter z-10 text-center w-full h-full p-20 text-gray-100 border-2 border-gray-50 border-dashed"
                >
                    {!form.image && 'Choose a poster for your project'}
                </label>
                <input
                    id="image"
                    type="file"
                    required={type === "create" ? true : false}
                    className="absolute z-30 w-full opacity-0 h-full cursor-pointer"
                    onChange={(e) => handleChangeImage(e)}
                />
                {form.image && (
                    <Image
                        src={form?.image}
                        className="sm:p-10 object-contain z-20" alt="image"
                        fill
                    />
                )}
            </div>

            <FormField
                title="Title"
                state={form.title}
                placeholder="Flexibble - Dribble clone"
                setState={(value) => handleStateChange('title', value)}
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
                title="Website URL"
                state={form.liveSiteUrl}
                placeholder="https://flexibble.com"
                setState={(value) => handleStateChange('liveSiteUrl', value)}
            />

            <FormField
                type="url"
                title="GitHub URL"
                state={form.githubUrl}
                placeholder="https://github.com/adrianhajdin"
                setState={(value) => handleStateChange('githubUrl', value)}
            />

            <CustomMenu
                title="Category"
                state={form.category}
                filters={categoryFilters}
                setState={(value) => handleStateChange('category', value)}
            />

            <div className="flexStart w-full">
                <CustomButton
                    title={submitting ? `${type === "create" ? "Creating" : "Editing"}` : `${type === "create" ? "Create" : "Edit"}`}
                    type="submit"
                    leftIcon={submitting ? "" : "/plus.svg"}
                    submitting={submitting}
                />
            </div>
        </form>
    )
}

export default ProjectForm