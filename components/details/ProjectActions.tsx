"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { deleteProject } from '@/lib/actions'

type Props = {
    projectId: string
}

const ProjectActions = ({ projectId }: Props) => {
    const router = useRouter()
    const [isDeleting, setIsDeleting] = useState<boolean>(false)

    const handleDeleteProject = async () => {
        setIsDeleting(true)

        try {
            await deleteProject(projectId)
            alert("Project successfully deleted")
            router.push("/")
        } catch (error) {
            console.error(error)
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <>
            <Link
                href={`/edit-project/${projectId}`}
                className="flexCenter edit-action_btn"
            >
                <Image
                    src="/pencile.svg"
                    width={16}
                    height={16}
                    alt="edit"
                />
            </Link>

            <button
                type="button"
                disabled={isDeleting}
                className={`flexCenter delete-action_btn ${isDeleting ? "bg-gray" : "bg-primary-purple"}`}
                onClick={handleDeleteProject}
            >
                <Image
                    src="/trash.svg"
                    width={16}
                    height={16}
                    alt="delete"
                />
            </button>
        </>
    )
}

export default ProjectActions