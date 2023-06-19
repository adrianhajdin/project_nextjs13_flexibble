import { AllProjectsType } from "@/common.types";
import HomeFilter from "@/components/HomeFilter";
import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/ProjectCard";

type SearchParams = {
  category?: string | null;
  search?: string | null;
  cursor?: string | null;
}

type Props = {
  searchParams: SearchParams
}

const Home = async ({ searchParams }: Props) => {
  let category = searchParams.category || null;
  let search = searchParams.search || null;
  let cursor = searchParams.cursor || null

  const isProduction = process.env.NODE_ENV === 'production';
  const baseUrl = isProduction ? `${process.env.SERVER_URL || ''}` : `http://localhost:3000/`;
  const response = await fetch(`${baseUrl}/api/posts?category=${category}&search=${search}&cursor=${cursor}`);

  const projects = await response.json();

  if (projects?.projectSearch?.edges?.length === 0) {
    return (
      <section className="flexStart flex-col paddings">
        <HomeFilter />
        <p className="no-result-text text-center">Sorry no projects found</p>
      </section>
    )
  }

  console.log({ serverUrl: process.env.SERVER_URL })
  console.log({ projects: projects?.projectSearch?.edges })
  console.log({ hasNextPage: projects?.projectSearch?.pageInfo?.hasNextPage })

  return (
    <section className="flexStart flex-col paddings mb-16">
      <HomeFilter />
      <section className="projects-grid">
        {projects?.projectSearch?.edges.map(({ node }: AllProjectsType) => (
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
      {projects?.projectSearch?.pageInfo?.hasNextPage && (
        <LoadMore cursor={projects?.projectSearch?.pageInfo?.endCursor} />
      )}
    </section>
  )
};

export default Home;
