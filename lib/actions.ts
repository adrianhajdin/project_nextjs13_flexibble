import { GraphQLClient } from "graphql-request";

import { FormState } from "@/common.types";
import { getApiConfig, isBase64DataURL } from "./utils";
import { createProjectMutation, createUserMutation, deleteProjectMutation, updateProjectMutation } from "@/graphql/mutation";
import { getProjectByIdQuery, getProjectsOfUserQuery, getUserQuery, projectsQuery } from "@/graphql/query";


const { apiUrl, apiKey, serverUrl} = getApiConfig();


export const fetchToken = async () => {
    try {

        console.log(`Entire URL: ${serverUrl}/api/auth/token`)
        const response = await fetch(`${serverUrl}/api/auth/token`)
        console.log("Response for the token: ", response)
        return response.json()
    } catch (err) {
        return err
    }
}

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
        return err;
    }
}

export const fetchAllProjects = async (category: string | null, endCursor: string | null) => {
    try {
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey
            }
        })

        const data = await client.request(projectsQuery, { category, endCursor });

        return data
    } catch (err) {
        console.log("Error: ", err)
    }
}

export const createNewProject = async (form: FormState, creatorId: string, token: string) => {
    try {
        const imageUrl = await uploadImage(form.image);

        if (imageUrl.url) {
            const newForm = { ...form, image: imageUrl.url, creatorId }

            console.log({ apiUrl, token, newForm, query: createProjectMutation(newForm) })
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/graphql"
                },
                body: JSON.stringify({ query: createProjectMutation(newForm)})
            })

            console.log("Response: ", response)
        }
    } catch (err) {
        console.log("Error: ", err)
    }
};

export const updateProject = async (form: FormState, projectId: string, token: string) => {
    let newForm = form

    try {
        const isBase64 = isBase64DataURL(form.image);

        if (isBase64) {
            const imageUrl = await uploadImage(form.image);
            
            if (imageUrl.url) {
                newForm = { ...form, image: imageUrl.url }
            }
        }
                
        const client = new GraphQLClient(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        });

        const mutation = updateProjectMutation(newForm, projectId);

        await client.request(mutation);
    } catch (err) {
        console.log("Error", err)
    }
};

export const deleteProject = async (id: string) => {
    try {
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = deleteProjectMutation(id);
        await client.request(mutation);
    } catch (error) {
        console.log("Error", error)
    }
}

export const getProjectDetails = async (id: string) => {
    try {   
        const client = new GraphQLClient(apiUrl);

        const mutation = getProjectByIdQuery(id);
        const data = await client.request(mutation);

        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export const createUser = async (name: string, email: string, avatarUrl: string) => {
    try {
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = createUserMutation(name, email, avatarUrl);
        const data = await client.request(mutation);

        return data
    } catch (err) {
        console.log("Error", err)
    }
}

export const getUserProjects = async (id: string, last?: number, cursor?: string) => {
    try {
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey
            }
        });

        const query = getProjectsOfUserQuery(id, last, cursor);
        const data = await client.request(query);

        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export const getUser = async (email: string) => {
    try {
        const client = new GraphQLClient(apiUrl);

        const mutation = getUserQuery(email);
        const data = await client.request(mutation);

        return data;
    } catch (err) {
        console.log("Error", err)
    }
}