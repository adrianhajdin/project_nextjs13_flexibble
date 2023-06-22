import { ProjectNode } from "@/common.types"
import LoadMore from "../LoadMore";
import ProjectCard from "../ProjectCard"

type Props = {
    user: {
        name: string;
        avatarUrl: string;
        id: string;
        projects?: {
            edges?: {
                node: ProjectNode;
            }[];
            pageInfo?: {
                startCursor: string;
                endCursor: string;
                hasPreviousPage: string
                hasNextPage: string
            }
        };
    };
};

const ProfileProjects = ({ user }: Props) => {
    return (
        <>
            <div className="profile_projects">
                {user?.projects?.edges?.map(
                    ({ node }: { node: ProjectNode }) => (
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
                    // @ts-ignore
                    startCursor={user?.projects?.pageInfo?.startCursor} 
                    // @ts-ignore
                    endCursor={user?.projects?.pageInfo?.endCursor}
                    // @ts-ignore
                    hasPreviousPage={user?.projects?.pageInfo?.hasPreviousPage}
                    // @ts-ignore
                    hasNextPage={user?.projects?.pageInfo?.hasNexPage}
                />

        </>
    )
}

export default ProfileProjects