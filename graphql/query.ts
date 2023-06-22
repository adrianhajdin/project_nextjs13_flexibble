// export const getProjectsQuery = (category: string | null, startCursor: string | null, endCursor: string | null) => {
//   let query = `projectSearch(`;
  
//   if (startCursor) {
//     query += `last: 4, before: "${startCursor}"`;
//   } else if (endCursor) {
//     query += `first: 4, after: "${endCursor}"`;
//   } else {
//     query += `first: 4`;
//   }

//   if (category) {
//     query += `, filter: { category: { eq: "${category}" } }`;
//   }

//   query += ')';

//   return `{
//     ${query} {
//       pageInfo {
//         hasNextPage
//         hasPreviousPage
//         startCursor
//         endCursor
//       }
//       edges {
//         node {
//           title
//           githubUrl
//           description
//           liveSiteUrl
//           id
//           image
//           createdBy {
//             id
//             email
//             name
//             avatarUrl
//           }
//           category
//         }
//       }
//     }
//   }`;
// };

export const getProjectsQuery = `query getProjects($category: String, $startCursor: String, $endCursor: String) {
  projectSearch(first: 4, last: 4, after: $endCursor, before: $startCursor, filter: {category: {eq: $category}}) {
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
        category
        createdBy {
          id
          email
          name
          avatarUrl
        }
      }
    }
  }
}`

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

export const getProjectsOfUserQuery = (id: string, last: number = 5, cursor?: string | null) => {
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