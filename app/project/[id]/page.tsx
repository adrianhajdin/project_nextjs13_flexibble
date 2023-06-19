import Image from "next/image"
import Link from "next/link"

import { getCurrentUser } from "@/lib/session"
import { getProjectDetails } from "@/lib/actions"
import Modal from "@/components/Modal"
import ProjectActions from "@/components/details/ProjectActions"
import ProjectLike from "@/components/details/ProjectLike"
import RelatedProjects from "@/components/details/RelatedProjects"

const Project = async ({ params: { id } }: { params: { id: string } }) => {
    const session = await getCurrentUser()

    if (!id) return (
        <p className="w-full text-center my-10 px-2">Oops, couldn&apos;t find project related to that id</p>
    )

    const result = await getProjectDetails(id)
    if (!result?.project) return (
        <p className="w-full text-center my-10 px-2">Failed to fetch project info</p>
    )

    const projectDetails = result?.project

    // @ts-ignore
    const renderLink = () => session?.user?.id === projectDetails?.createdBy?.id ? "/profile" : `/profile/${projectDetails?.createdBy?.id}`

    return (
        <Modal>
            {session?.user?.email === projectDetails?.createdBy?.email && (
                <section className="user-actions_section">
                    <Link href={renderLink()}>
                        <Image
                            src={projectDetails?.createdBy?.avatarUrl}
                            width={40}
                            height={40}
                            alt="profile"
                            className="rounded-full"
                        />
                    </Link>

                    <ProjectActions projectId={projectDetails?.id} />
                </section>
            )}

            <section className="flexBetween max-lg:flex-col gap-y-8 max-w-4xl w-full">
                <div className="flexStart gap-5 w-full max-[400px]:flex-col">
                    <Link href={renderLink()}>
                        <Image
                            src={projectDetails?.createdBy?.avatarUrl}
                            width={50}
                            height={50}
                            alt="profile"
                            className="rounded-full"
                        />
                    </Link>

                    <div className="flexStart flex-col gap-1">
                        <p className="self-start text-lg font-semibold">
                            {projectDetails?.title}
                        </p>
                        <div className="user-info">
                            <Link href={renderLink()}>
                                {projectDetails?.createdBy?.name} <span className="text-gray">for</span> JSM
                            </Link>
                            <Image src="/dot.svg" width={4} height={4} alt="dot" />
                            <button type="button">Follow</button>
                            <Image src="/dot.svg" width={4} height={4} alt="dot" />
                            <button type="button" className="text-primary-purple w-fit">
                                Hire Us
                            </button>
                        </div>
                    </div>
                </div>

                <ProjectLike />
            </section>

            <section className="mt-14">
                <Image
                    src={`${projectDetails?.image}`}
                    className="object-cover rounded-2xl"
                    width={1064}
                    height={798}
                    alt="poster"
                />
            </section>

            <section className="flexCenter flex-col mt-20">
                <p className="max-w-5xl text-xl font-normal">
                    {projectDetails?.description}
                </p>
            </section>

            <section className="flexCenter w-full gap-8 mt-28">
                <span className="w-full h-0.5 bg-light-white-200" />
                <Link href={renderLink()} className="min-w-[82px] h-[82px]">
                    <Image
                        src={projectDetails?.createdBy?.avatarUrl}
                        className="rounded-full"
                        width={82}
                        height={82}
                        alt="profile image"
                    />
                </Link>
                <span className="w-full h-0.5 bg-light-white-200" />
            </section>

            <RelatedProjects userId={projectDetails?.createdBy?.id} projectId={projectDetails?.id} />
        </Modal>
    )
}

export default Project
