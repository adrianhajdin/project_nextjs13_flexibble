export const getProjectsQuery = (search: string | null, category: string | null, cursor: string | null) => {
  let query = `projectSearch(first: 20`;

  if (cursor !== "null") {
    query += `, after: "${cursor}"`
  }

  if (search !== "null") {
    query += `, query: "${search}"`;
  }

  if (category !== "null" && category?.toLowerCase() !== 'all') {
    query += `, filter: { category: { eq: "${category}" } }`;
  }

  query += ')';

  console.log("grafbase query", query)

  return `{
    ${query} {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          title
          githubUrl
          description
          liveSiteUrl
          id
          image
          createdBy {
            id
            email
            name
            avatarUrl
          }
          category
        }
      }
    }
  }`;
};

export const getProjectByIdQuery = (id: string) => {
  return `{
    project(by: { id: "${id}" }) {
      id
      title
      description
      image
      liveSiteUrl
      githubUrl
      likes
      category
      createdBy {
        id
        name
        email
        avatarUrl
      }
    }
  }`
}

export const getProjectsOfUserQuery = (id: string, last: number = 5, cursor: string | null) => {
  let query = `{
    user(by: {id: "${id}"}) {
      id
      name
      email
      description
      avatarUrl
      githubUrl
      linkedinUrl
      projects(last: ${last}`;

  if (cursor) {
    query += `, before: "${cursor}"`;
  }

  query += `) {
        edges {
          node {
            id
            title
            image
          }
        },
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }`;

  return query;
};

export const getUserQuery = (email: string) => {
  return `{
        user(by: {email: "${email}"}) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }`
}