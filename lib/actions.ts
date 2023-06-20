
import { FormState } from "@/common.types";

import { makeRequest } from "./request";
import { getApiConfig, isBase64DataURL } from "./utils";
import { GraphQLClient } from "graphql-request";
import { createProjectMutation, createUserMutation, deleteProjectMutation, updateProjectMutation, updateUserMutation } from "@/graphql/mutation";
import { getProjectByIdQuery, getProjectsOfUserQuery, getUserQuery } from "@/graphql/query";
import { g } from '@grafbase/sdk';

type UserProps = {
    name: string
    description: string
    githubUrl: string
    linkedinUrl: string
}

export const uploadImage = async (imagePath: string) => {
    try {
        const isProduction = process.env.NODE_ENV === 'production';
        const url = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';

        const response = await fetch(`${url}/api/upload`, {
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



export const createNewProject = async (form: FormState, creatorId: string) => {
    try {
        const imageUrl = await uploadImage(form.image);
        const { apiUrl, apiKey } = await getApiConfig();

        if (imageUrl.url) {
            const newForm = { ...form, image: imageUrl.url, creatorId }

            const client = new GraphQLClient(apiUrl, {
                headers: { 'x-api-key': apiKey  },
            });
    
            const mutation = createProjectMutation(newForm);
            
            await client.request(mutation);
        }
    } catch (err) {
        console.log("Error: ", err)
    }
};

export const updateProject = async (form: FormState, projectId: string) => {
    let newForm = form
    console.log({form, projectId})
    try {
        const isBase64 = isBase64DataURL(form.image);

        if (isBase64) {
            console.log('before upload image')
            const imageUrl = await uploadImage(form.image);
            console.log('after upload image')
            
            if (imageUrl.url) {
                newForm = { ...form, image: imageUrl.url }
            }
            
            const { apiUrl, apiKey } = await getApiConfig();
            
            console.log('hereeee')
            const client = new GraphQLClient(apiUrl, {
                headers: {
                    'x-api-key': apiKey,
                },
            });
    
            const mutation = updateProjectMutation(newForm, projectId);
            console.log(mutation)
            await client.request(mutation);
        }


  

        // const result = await makeRequest(`api/posts/${projectId}`, {
        //     method: "PUT",
        //     body: {
        //         form: newForm
        //     }
        // })

        // return result
    } catch (err) {
        console.log("Error", err)
    }
};

export const deleteProject = async (id: string) => {
    try {
        // const result = await makeRequest(`api/posts/${id}`, {
        //     method: "DELETE",
        // })
        const { apiUrl, apiKey } = await getApiConfig();

        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = deleteProjectMutation(id);
        await client.request(mutation);

        // return result
    } catch (error) {
        console.log("Error", error)
    }
}

export const getProjectDetails = async (id: string) => {
    try {
        // const result = await makeRequest(`api/posts/${id}`, {
        //     method: "GET",
        // })

        const { apiUrl, apiKey } = await getApiConfig();
   
        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = getProjectByIdQuery(id);
        const data = await client.request(mutation);

        console.log({data})

        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export const createUser = async (name: string, email: string, avatarUrl: string) => {
    try {
        const { apiUrl, apiKey } = await getApiConfig();

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

export const getUserProjects = async (id: string, last?: string, cursor?: string) => {
    try {
        const { apiUrl, apiKey } = await getApiConfig();

        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = getProjectsOfUserQuery(id, last, cursor);
        const data = await client.request(mutation);

        return data
    } catch (error) {
        console.log("Error", error)
    }
}

export const updateUser = async (userId: string, form: UserProps) => {
    try {
        // const result = await makeRequest(`api/users/${userId}`, {
        //     method: "PUT",
        //     body: {
        //         form,
        //     }
        // })

        const { apiUrl, apiKey } = await getApiConfig();

        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = updateUserMutation(form, userId);
        const data = await client.request(mutation);

        return data;
    } catch (err) {
        console.log("Error", err)
    }
}

export const getUser = async (email: string) => {
    try {
        const { apiUrl, apiKey } = await getApiConfig();

        const client = new GraphQLClient(apiUrl, {
            headers: {
                'x-api-key': apiKey,
            },
        });

        const mutation = getUserQuery(email);
        const data = await client.request(mutation);

        return data;
    } catch (err) {
        console.log("Error", err)
    }
}