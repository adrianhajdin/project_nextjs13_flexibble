import { GraphQLClient } from "graphql-request";
import { getApiConfig, isBase64DataURL } from "./utils";
//todo do this what chatgpt suggested. import from one file.
// import {
//   createProjectMutation,
//   createUserMutation,
//   deleteProjectMutation,
//   updateProjectMutation,
//   getProjectByIdQuery,
//   getProjectsOfUserQuery,
//   getUserQuery,
//   projectsQuery,
// } from "@/graphql";
import { createProjectMutation, createUserMutation, deleteProjectMutation, updateProjectMutation } from "@/graphql/mutation";
import { getProjectByIdQuery, getProjectsOfUserQuery, getUserQuery, projectsQuery } from "@/graphql/query";
import { ProjectForm } from "@/common.types";

const { apiUrl, apiKey, serverUrl } = getApiConfig();

const client = new GraphQLClient(apiUrl);

export const fetchToken = async () => {
  try {
    const response = await fetch(`${serverUrl}/api/auth/token`);
    return response.json();
  } catch (err) {
    throw err;
  }
};

export const uploadImage = async (imagePath: string) => {
  try {
    const response = await fetch(`${serverUrl}/api/upload`, {
      method: "POST",
      body: JSON.stringify({
        path: imagePath,
      }),
    });
    return response.json();
  } catch (err) {
    throw err;
  }
};

const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    return await client.request(query, variables);
  } catch (err) {
    throw err;
  }
};

export const fetchAllProjects = (category: string | null, endCursor: string | null) => {
  client.setHeader("x-api-key", apiKey);

  return makeGraphQLRequest(projectsQuery, { category, endCursor });
};

export const createNewProject = async (form: ProjectForm, creatorId: string, token: string) => {
  const imageUrl = await uploadImage(form.image);

  if (imageUrl.url) {
    client.setHeader("Authorization", `Bearer ${token}`);

    const variables = {
      input: {
        title: form.title,
        description: form.description,
        image: imageUrl.url,
        liveSiteUrl: form.liveSiteUrl,
        githubUrl: form.githubUrl,
        category: form.category,
        createdBy: {
          link: creatorId,
        },
      },
    };

    return makeGraphQLRequest(createProjectMutation, variables);
  }
};


// TODO: Update to new variables way
export const updateProject = async (form: ProjectForm, projectId: string, token: string) => {
  let newForm = form;
  const isBase64 = isBase64DataURL(form.image);

  if (isBase64) {
    const imageUrl = await uploadImage(form.image);
    if (imageUrl.url) {
      newForm = { ...form, image: imageUrl.url };
    }
  }

  client.setHeader("Authorization", `Bearer ${token}`);
  const mutation = updateProjectMutation(newForm, projectId);
  return makeGraphQLRequest(mutation);
};

export const deleteProject = (id: string, token: string) => {
  client.setHeader("Authorization", `Bearer ${token}`);
  const mutation = deleteProjectMutation(id);
  return makeGraphQLRequest(mutation);
};

export const getProjectDetails = (id: string) => {
  client.setHeader("x-api-key", apiKey);
  const mutation = getProjectByIdQuery(id);
  return makeGraphQLRequest(mutation);
};

export const createUser = (name: string, email: string, avatarUrl: string) => {
  client.setHeader("x-api-key", apiKey);
  const mutation = createUserMutation(name, email, avatarUrl);
  return makeGraphQLRequest(mutation);
};

export const getUserProjects = (id: string, last?: number, cursor?: string) => {
  client.setHeader("x-api-key", apiKey);
  const query = getProjectsOfUserQuery(id, last, cursor);
  return makeGraphQLRequest(query);
};

export const getUser = (email: string) => {
  client.setHeader("x-api-key", apiKey);
  const mutation = getUserQuery(email);
  return makeGraphQLRequest(mutation);
};
