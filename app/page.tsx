import { AllProjectsType } from "@/common.types";
import HomeFilter from "@/components/HomeFilter";
import LoadMore from "@/components/LoadMore";
// import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsQuery  } from "@/graphql/query";
import { fetchToken } from "@/lib/actions";
// import { GraphQLClient } from "graphql-request";
import { getApiConfig } from "@/lib/utils";

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

  const token = await fetchToken()
  console.log("token?", token)
  
  const { apiUrl, apiKey } = await getApiConfig();

  const headers = {
    'Content-Type': 'application/graphql',
    'x-api-key': apiKey
  };

  const query = getProjectsQuery(category, startCursor, endCursor)
  
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ query }),
    cache: 'no-store' 
  });

  const { data } = await response.json();
  
  const projectsToDisplay = data?.projectSearch?.edges || [];

  if (projectsToDisplay.length === 0) {
    return (
      <section className="flexStart flex-col paddings">
        <HomeFilter />
        <p className="no-result-text text-center">Sorry no projects found</p>
      </section>
    )
  }

  // console.log(data?.projectSearch?.pageInfo)

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
          startCursor={data?.projectSearch?.pageInfo?.startCursor} 
          endCursor={data?.projectSearch?.pageInfo?.endCursor} 
          hasPreviousPage={data?.projectSearch?.pageInfo?.hasPreviousPage} 
          hasNextPage={data?.projectSearch?.pageInfo.hasNextPage}
        />
    </section>
  )
};

export default Home;
