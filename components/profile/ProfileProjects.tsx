import { ProjectInterface, UserProfile } from "@/common.types"
import LoadMore from "../LoadMore";
import ProjectCard from "../ProjectCard"

type Props = {
    user: UserProfile
};

const ProfileProjects = ({ user }: Props) => {
    return (
        <>
            <div className="profile_projects">
                {user?.projects?.edges?.map(
                    ({ node }: { node: ProjectInterface }) => (
                        <ProjectCard
                            key={`${node?.id}`}
                            id={node?.id}
                            image={node?.image}
                            title={node?.title}
                            name={user.name}
                            avatarUrl={user.avatarUrl}
                            userId={user.id}
                        />
                    )
                )}
            </div>

            <LoadMore 
                startCursor={user?.projects?.pageInfo?.startCursor} 
                endCursor={user?.projects?.pageInfo?.endCursor}
                hasPreviousPage={user?.projects?.pageInfo?.hasPreviousPage}
                hasNextPage={user?.projects?.pageInfo?.hasNextPage}
            />

        </>
    )
}

export default ProfileProjects