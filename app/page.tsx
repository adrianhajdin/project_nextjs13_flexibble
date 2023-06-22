import { ProjectInterface } from "@/common.types";
import HomeFilter from "@/components/HomeFilter";
import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
  startcursor?: string | null
}

type Props = {
  searchParams: SearchParams
}

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  },
}

export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;

const Home = async ({ searchParams }: Props) => {
  let category = searchParams.category || null;
  let endCursor = searchParams.endcursor || null

  const data = await fetchAllProjects(category, endCursor) as ProjectSearch

  const projectsToDisplay = data?.projectSearch?.edges || [];

  if (projectsToDisplay.length === 0) {
    return (
      <section className="flexStart flex-col paddings">
        <HomeFilter />
        <p className="no-result-text text-center">Sorry no projects found</p>
      </section>
    )
  }

  return (
    <section className="flexStart flex-col paddings mb-16">
      <HomeFilter />
      <section className="projects-grid">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={`${node?.id}`}
            id={node?.id}
            image={node?.image}
            title={node?.title}
            name={node?.createdBy.name}
            avatarUrl={node?.createdBy.avatarUrl}
            userId={node?.createdBy.id}
          />
        ))}
      </section>
        <LoadMore 
          startCursor={data?.projectSearch?.pageInfo?.startCursor} 
          endCursor={data?.projectSearch?.pageInfo?.endCursor} 
          hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage} 
          hasNextPage={data?.projectSearch?.pageInfo.hasNextPage}
        />
    </section>
  )
};

export default Home;
