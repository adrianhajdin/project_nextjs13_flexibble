import Link from 'next/link'

import { getUserProjects } from '@/lib/actions'
import RelatedProjectCard from './RelatedProjectCard'
import { AllProjectsType, UserNode } from '@/common.types'

type Props = {
    userId: string
    projectId: string
}

const RelatedProjects = async ({ userId, projectId }: Props) => {
    const result = await getUserProjects(userId)

    const filteredProjects = result?.user?.projects?.edges?.filter(({ node }: { node: UserNode }) => node?.id !== projectId)

    if (filteredProjects?.length === 0) {
        return null
    }

    return (
        <section className="flex flex-col mt-32 w-full">
            <div className="flexBetween">
                <p className="text-base font-bold">
                    More by {result?.user?.name}
                </p>
                <Link
                    href={`/profile/${result?.user?.id}`}
                    className="text-primary-purple text-base"
                >
                    View All
                </Link>
            </div>

            <div className="related_projects-grid">
                {filteredProjects?.map(({ node }: AllProjectsType) => (
                    <RelatedProjectCard
                        key={`${node?.id}`}
                        id={node?.id}
                        image={node?.image}
                        title={node?.title}
                    />
                ))}
            </div>
        </section>
    )
}

export default RelatedProjects