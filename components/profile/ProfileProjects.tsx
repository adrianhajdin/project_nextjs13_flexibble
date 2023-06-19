import { ProjectNode } from "@/common.types"
import ProjectCard from "../ProjectCard"
import LoadMore from "../LoadMore";

type Props = {
    user: {
        name: string;
        avatarUrl: string;
        id: string;
        projects?: {
            edges?: {
                node: ProjectNode;
            }[];
        };
    };
};

const ProfileProjects = ({ user }: Props) => {
    return (
        <>
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-5">
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

            {/* @ts-ignore */}
            {user?.projects?.pageInfo?.hasPreviousPage && (
                // @ts-ignore
                <LoadMore cursor={user?.projects?.pageInfo?.startCursor} />
            )}

        </>
    )
}

export default ProfileProjects