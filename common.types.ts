export type UserNode = {
    id: string
    name: string
    email: string
    avatarUrl: string
    description: string
    githubUrl: string | null
    linkedinUrl: string | null
    projects: Array<ProjectNode>
}

export type ProjectNode = {
    id: string
    title: string
    description: string
    image: string
    liveSiteUrl: string
    githubUrl: string
    likes: number
    category: string
    createdBy: UserNode
}

export type AllProjectsType = {
    node: ProjectNode
}

export type SessionType = {
    user?: UserNode | null | undefined
}

export type FormState = {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
};
