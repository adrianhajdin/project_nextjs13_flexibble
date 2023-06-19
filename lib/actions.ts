import { FormState } from "@/common.types";

import { makeRequest } from "./request";
import { isBase64DataURL } from "./utils";

type UserProps = {
    name: string
    description: string
    githubUrl: string
    linkedinUrl: string
}

export const uploadImage = async (imagePath: string) => {
    try {
        const response = await fetch("api/upload", {
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

        if (imageUrl.url) {
            const newForm = { ...form, image: imageUrl.url, creatorId }

            const result = await makeRequest("api/posts", {
                method: "POST",
                body: { form: newForm, creatorId }
            })
            
            return result
        }

    } catch (err) {
        console.log("Error: ", err)
    }
};

export const updateProject = async (form: FormState, projectId: string) => {
    let newForm = form
    try {
        const isBase64 = isBase64DataURL(form.image)
        if (isBase64) {
            const imageUrl = await uploadImage(form.image);

            if (imageUrl.url) {
                newForm = { ...form, image: imageUrl.url }
            }
        }

        const result = await makeRequest(`api/posts/${projectId}`, {
            method: "PUT",
            body: {
                form: newForm
            }
        })

        return result
    } catch (err) {
        console.log("Error", err)
    }
};

export const deleteProject = async (id: string) => {
    try {
        const result = await makeRequest(`api/posts/${id}`, {
            method: "DELETE",
        })

        return result
    } catch (error) {
        console.log("Error", error)
    }
}

export const getProjectDetails = async (id: string) => {
    try {
        const result = await makeRequest(`api/posts/${id}`, {
            method: "GET",
        })

        return result
    } catch (error) {
        console.log("Error", error)
    }
}

export const createUser = async (name: string, email: string, avatarUrl: string) => {
    try {
        const result = await makeRequest(`api/users/new`, {
            method: "POST",
            body: {
                name,
                email,
                avatarUrl
            }
        })

        return result
    } catch (err) {
        console.log("Error", err)
    }
}

export const getUserProjects = async (id: string, last?: string, cursor?: string) => {
    try {
        const result = await makeRequest(`api/users/projects/${id}`, {
            method: "POST",
            body: {
                last,
                cursor
            }
        })

        return result
    } catch (error) {
        console.log("Error", error)
    }
}

export const updateUser = async (userId: string, form: UserProps) => {
    try {
        const result = await makeRequest(`api/users/${userId}`, {
            method: "PUT",
            body: {
                form,
            }
        })

        return result
    } catch (err) {
        console.log("Error", err)
    }
}

export const getUser = async (email: string) => {
    try {
        const result = await makeRequest(`api/users`, {
            method: "POST",
            body: {
                email
            }
        })

        return result
    } catch (err) {
        console.log("Error", err)
    }
}