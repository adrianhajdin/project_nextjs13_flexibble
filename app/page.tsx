import { AllProjectsType } from "@/common.types";
import HomeFilter from "@/components/HomeFilter";
import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/ProjectCard";
import { fetchAllProjects } from "@/lib/actions";

export const dynamic = 'force-dynamic'

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
  startcursor?: string | null
}

type Props = {
  searchParams: SearchParams
}

const Home = async ({ searchParams }: Props) => {
  let category = searchParams.category || null;
  let endCursor = searchParams.endcursor || null
  let startCursor = searchParams.startcursor || null

  const  data  = await fetchAllProjects(category, startCursor, endCursor)

  // @ts-ignore
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
        {projectsToDisplay.map(({ node }: AllProjectsType) => (
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
          // @ts-ignore
          startCursor={data?.projectSearch?.pageInfo?.startCursor} 
          // @ts-ignore
          endCursor={data?.projectSearch?.pageInfo?.endCursor} 
          // @ts-ignore
          hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage} 
          // @ts-ignore
          hasNextPage={data?.projectSearch?.pageInfo.hasNextPage}
        />
    </section>
  )
};

export default Home;
