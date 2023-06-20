import { AllProjectsType } from "@/common.types";
import HomeFilter from "@/components/HomeFilter";
// import LoadMore from "@/components/LoadMore";
import ProjectCard from "@/components/ProjectCard";
import { getProjectsQueryNew } from "@/graphql/query";
// import { GraphQLClient } from "graphql-request";
import { getApiConfig } from "@/lib/utils";

type SearchParams = {
  category?: string | null;
  cursor?: string | null;
}

type Props = {
  searchParams: any
}

const query = `{
  projectCollection(last: 10) {
    edges {
      node {
        title
        description
        id
        image
        category
        liveSiteUrl
        githubUrl
        createdBy {
          name
          email
          id
          avatarUrl
        }
      }
    }
  }
}`

const Home = async ({ searchParams }: Props) => {
  let category = searchParams.category || null;
  let cursor = searchParams.cursor || null
  
  const { apiUrl, apiKey } = await getApiConfig();
  // const isProduction = process.env.NODE_ENV === 'production';
  // const baseUrl = isProduction ? `${process.env.SERVER_URL || ''}` : `http://localhost:3000/`;
  // const response = await fetch(`${baseUrl}/api/posts?category=${category}&cursor=${cursor}`);

  const headers = {
    'Content-Type': 'application/graphql',
    'x-api-key': apiKey
  };
  
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({query}),
    });
    const {data} = await response.json();
  

    // const { data } = await axios.post(apiUrl, query, { headers });

    // console.log({data})
  // const response = await fetch(apiUrl, {
  //   headers: { 'x-api-key': apiKey },
  //   method: 'POST',
  //   body: JSON.stringify(query),
  // })

  // const { data } = await response
  // console.log({data})


  // console.log({data})

  // const client = new GraphQLClient(apiUrl, {
  //   headers: {
  //       'x-api-key': apiKey,
  //   },
  // });

  // const mutation = getProjectsQueryNew({ category, cursor });
  // const data = await client.request(mutation);

  // const data = await response.json();

  const projectsToDisplay = data?.projectCollection?.edges || [];

  console.log({projectsToDisplay})

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
      {/* {data?.projectSearch?.pageInfo?.hasNextPage && (
        <LoadMore cursor={data?.projectSearch?.pageInfo?.endCursor} />
      )} */}
    </section>
  )
};

export default Home;
