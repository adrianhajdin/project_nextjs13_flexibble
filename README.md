<div align="center">
  <br />
    <a href="https://youtu.be/986hztrfaSQ?feature=shared" target="_blank">
      <img src="https://github.com/adrianhajdin/project_nextjs13_flexibble/assets/151519281/e4d6a34f-31a8-4370-a3df-d59e0463a18e" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Cloudinary-black?style=for-the-badge&logoColor=white&logo=cloudinary&color=3448C5" alt="cloudinary" />
    <img src="https://img.shields.io/badge/-Graphql-black?style=for-the-badge&logoColor=white&logo=graphql&color=E10098" alt="graphql" />
    <img src="https://img.shields.io/badge/-JSON_Web_Tokens-black?style=for-the-badge&logoColor=white&logo=jsonwebtokens&color=000000" alt="jsonwebtokens" />
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
     <img src="https://img.shields.io/badge/-Headlessui-black?style=for-the-badge&logoColor=white&logo=headlessui&color=66E3FF" alt="headlessui" />
  </div>

  <h3 align="center">A Full Stack Dribble Clone</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. 

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/986hztrfaSQ?feature=shared" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

A full stack Dribble clone developed using Next.js, GraphQL, Next Auth, TypeScript, and tailwindcss features all the necessary features of dribble from sharing and showcasing projects.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Next Auth
- TypeScript
- JSON Web Token
- GraphQL
- Grafbase
- Cloudinary
- Tailwind CSS
- Headless UI

## <a name="features">🔋 Features</a>

👉 **Modern Design Home Page**: Features a clean and modern design resembling Dribbble, with a visually appealing interface showcasing project previews and navigation.

👉 **Browsing and Pagination**: Browse different projects, filter them by category, and experience smooth pagination for seamless data exploration.

👉 **Authentication & Authorization System**: A fully functional authentication and authorization system allows users to log in securely using JWT and Google authentication.

👉 **Create Post Page**: Provides a dedicated space for users to share their projects with the community. It includes fields for project details, images, and other relevant information.

👉 **Project Details and Related Projects**: A detailed view with related projects functionality, enabling users to explore more projects within the same category or theme.

👉 **Edit and Re-upload Images**: Users have the capability to edit previously created projects, including the ability to re-upload images from their devices to the cloud for updates.

👉 **Delete Projects**: The delete functionality simplifies project removal with a one-click process, streamlining the user experience.

👉 **Portfolio-Style User Profile Page**: The user profile page adopts a portfolio-style layout, displaying the user's projects along with the project profiles of other users for easy exploration.

👉 **Backend API Routes**: Backend API routes for handling JWT token management for secure authentication and image uploading, supporting seamless integration with the frontend.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/project_nextjs13_flexibble.git
cd project_nextjs13_flexibble
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
GRAFBASE_API_URL=
GRAFBASE_API_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the corresponding websites from [Google Cloud](https://console.cloud.google.com), [Cloudinary](https://cloudinary.com/), and [Grafbase](https://grafbase.com/).

For the Next Auth secret, you can generate any random secret using [crytool](https://www.cryptool.org/en/cto/openssl).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>common.types.ts</code></summary>

```typescript
import { User, Session } from 'next-auth'

export type FormState = {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
};

export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
    id: string;
    createdBy: {
      name: string;
      email: string;
      avatarUrl: string;
      id: string;
    };
}

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    description: string | null;
    avatarUrl: string;
    githubUrl: string | null;
    linkedinUrl: string | null;
    projects: {
      edges: { node: ProjectInterface }[];
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor: string;
        endCursor: string;
      };
    };
}

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export interface ProjectForm {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
}
```

</details>

<details>
<summary><code>constants.ts</code></summary>

```typescript
export const NavLinks = [
  { href: '/', key: 'Inspiration', text: 'Inspiration' },
  { href: '/', key: 'Find Projects', text: 'Find Projects' },
  { href: '/', key: 'Learn Development', text: 'Learn Development' },
  { href: '/', key: 'Career Advancement', text: 'Career Advancement' },
  { href: '/', key: 'Hire Developers', text: 'Hire Developers' }
];

export const categoryFilters = [
  "Frontend",
  "Backend",
  "Full-Stack",
  "Mobile",
  "UI/UX",
  "Game Dev",
  "DevOps",
  "Data Science",
  "Machine Learning",
  "Cybersecurity",
  "Blockchain",
  "E-commerce",
  "Chatbots"
]

export const footerLinks = [
  {
    title: 'For developers',
    links: [
      'Go Pro!',
      'Explore development work',
      'Development blog',
      'Code podcast',
      'Open-source projects',
      'Refer a Friend',
      'Code of conduct',
    ],
  },
  {
    title: 'Hire developers',
    links: [
      'Post a job opening',
      'Post a freelance project',
      'Search for developers',
    ],
  },
  {
    title: 'Brands',
    links: [
      'Advertise with us',
    ],
  },
  {
    title: 'Company',
    links: [
      'About',
      'Careers',
      'Support',
      'Media kit',
      'Testimonials',
      'API',
      'Terms of service',
      'Privacy policy',
      'Cookie policy',
    ],
  },
  {
    title: 'Directories',
    links: [
      'Development jobs',
      'Developers for hire',
      'Freelance developers for hire',
      'Tags',
      'Places',
    ],
  },
  {
    title: 'Development assets',
    links: [
      'Code Marketplace',
      'GitHub Marketplace',
      'NPM Registry',
      'Packagephobia',
    ],
  },
  {
    title: 'Development Resources',
    links: [
      'Freelancing',
      'Development Hiring',
      'Development Portfolio',
      'Development Education',
      'Creative Process',
      'Development Industry Trends',
    ],
  },
];
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Inter;
}

.flexCenter {
  @apply flex justify-center items-center;
}

.flexBetween {
  @apply flex justify-between items-center;
}

.flexStart {
  @apply flex items-center justify-start;
}

.text-small {
  @apply text-sm font-medium;
}

.paddings {
  @apply lg:px-20 py-6 px-5;
}

::-webkit-scrollbar {
  width: 5px;
  height: 4px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 12px;
}

.modal-head-text {
  @apply md:text-5xl text-3xl font-extrabold text-left max-w-5xl w-full;
}

.no-result-text {
  @apply w-full text-center my-10 px-2;
}

/* Project Details */
.user-actions_section {
  @apply fixed max-md:hidden flex gap-4 flex-col right-10 top-20;
}

.user-info {
  @apply flex flex-wrap whitespace-nowrap text-sm font-normal gap-2 w-full;
}

/* Home */
.projects-grid {
  @apply grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10 w-full;
}

/* Project Actions */
.edit-action_btn {
  @apply p-3 text-gray-100 bg-light-white-400 rounded-lg text-sm font-medium;
}

.delete-action_btn {
  @apply p-3 text-gray-100 hover:bg-red-600 rounded-lg text-sm font-medium;
}

/* Related Project Card */
.related_project-card {
  @apply flex-col rounded-2xl min-w-[210px] min-h-[197px];
}

.related_project-card_title {
  @apply justify-end items-end w-full h-1/3 bg-gradient-to-b from-transparent to-black/50 rounded-b-2xl gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4;
}

.related_projects-grid {
  @apply grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-5;
}

/* Custom Menu */
.custom_menu-btn {
  @apply gap-4 w-full rounded-md bg-light-white-100 p-4 text-base outline-none capitalize;
}

.custom_menu-items {
  @apply flex-col absolute left-0 mt-2 xs:min-w-[300px] w-fit max-h-64 origin-top-right rounded-xl bg-white border border-nav-border shadow-menu overflow-y-auto;
}

.custom_menu-item {
  @apply text-left w-full px-5 py-2 text-sm hover:bg-light-white-100 self-start whitespace-nowrap capitalize;
}

/* Footer */
.footer {
  @apply flex-col paddings w-full gap-20 bg-light-white;
}

.footer_copyright {
  @apply max-sm:flex-col w-full text-sm font-normal;
}

.footer_column {
  @apply flex-1 flex flex-col gap-3 text-sm min-w-max;
}

/* Form Field */
.form_field-input {
  @apply w-full outline-0 bg-light-white-100 rounded-xl p-4;
}

/* Modal */
.modal {
  @apply fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80;
}

.modal_wrapper {
  @apply flex justify-start items-center flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 pt-14 pb-72 overflow-auto;
}

/* Navbar */
.navbar {
  @apply py-5 px-8 border-b border-nav-border gap-4;
}

/* Profile Menu */
.profile_menu-items {
  @apply flex-col absolute right-1/2 translate-x-1/2 mt-3 p-7 sm:min-w-[300px] min-w-max rounded-xl bg-white border border-nav-border shadow-menu;
}

/* Profile Card */
.profile_card-title {
  @apply justify-end items-end w-full h-1/3 bg-gradient-to-b from-transparent to-black/50 rounded-b-2xl gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4;
}

/* Project Form */
.form {
  @apply flex-col w-full lg:pt-24 pt-12 gap-10 text-lg max-w-5xl mx-auto;
}

.form_image-container {
  @apply w-full lg:min-h-[400px] min-h-[200px] relative;
}

.form_image-label {
  @apply z-10 text-center w-full h-full p-20 text-gray-100 border-2 border-gray-50 border-dashed;
}

.form_image-input {
  @apply absolute z-30 w-full opacity-0 h-full cursor-pointer;
}

/* Profile Projects */
.profile_projects {
  @apply grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-5;
}
```

</details>

<details>
<summary><code>graphqlQueriesAndMutations.ts</code></summary>

```typescript
export const createProjectMutation = `
	mutation CreateProject($input: ProjectCreateInput!) {
		projectCreate(input: $input) {
			project {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}
`;

export const updateProjectMutation = `
	mutation UpdateProject($id: ID!, $input: ProjectUpdateInput!) {
		projectUpdate(by: { id: $id }, input: $input) {
			project {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}
`;

export const deleteProjectMutation = `
  mutation DeleteProject($id: ID!) {
    projectDelete(by: { id: $id }) {
      deletedId
    }
  }
`;
      
export const createUserMutation = `
	mutation CreateUser($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
				name
				email
				avatarUrl
				description
				githubUrl
				linkedinUrl
				id
			}
		}
	}
`;

export const projectsQuery = `
  query getProjects($category: String, $endCursor: String) {
    projectSearch(first: 8, after: $endCursor, filter: {category: {eq: $category}}) {
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
  }
`;

export const getProjectByIdQuery = `
  query GetProjectById($id: ID!) {
    project(by: { id: $id }) {
      id
      title
      description
      image
      liveSiteUrl
      githubUrl
      category
      createdBy {
        id
        name
        email
        avatarUrl
      }
    }
  }
`;

export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedinUrl
    }
  }
`;
      
export const getProjectsOfUserQuery = `
  query getUserProjects($id: ID!, $last: Int = 4) {
    user(by: { id: $id }) {
      id
      name
      email
      description
      avatarUrl
      githubUrl
      linkedinUrl
      projects(last: $last) {
        edges {
          node {
            id
            title
            image
          }
        }
      }
    }
  }
`;
```

</details>

<details>
<summary><code>ProfileMenu.tsx</code></summary>

```typescript
"use client"

import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import { SessionInterface } from "@/common.types";

const ProfileMenu = ({ session }: { session: SessionInterface }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="flexCenter z-10 flex-col relative">
            <Menu as="div">
                <Menu.Button className="flexCenter" onMouseEnter={() => setOpenModal(true)} >
                    {session?.user?.image && (
                        <Image
                            src={session.user.image}
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="user profile image"
                        />
                    )}
                </Menu.Button>

                <Transition
                    show={openModal}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        static
                        className="flexStart profile_menu-items"
                        onMouseLeave={() => setOpenModal(false)}
                    >
                        <div className="flex flex-col items-center gap-y-4">
                            {session?.user?.image && (
                                <Image
                                    src={session?.user?.image}
                                    className="rounded-full"
                                    width={80}
                                    height={80}
                                    alt="profile Image"
                                />
                            )}
                            <p className="font-semibold">{session?.user?.name}</p>
                        </div>

                        <div className="flex flex-col gap-3 pt-10 items-start w-full">
                            <Menu.Item>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">Work Preferences</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">Settings</Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link href={`/profile/${session?.user?.id}`} className="text-sm">Profile</Link>
                            </Menu.Item>
                        </div>
                        <div className="w-full flexStart border-t border-nav-border mt-5 pt-5">
                            <Menu.Item>
                                <button type="button" className="text-sm" onClick={() => signOut()}> 
                                    Sign out
                                </button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default ProfileMenu
```

</details>

<details>
<summary><code>ProfilePage.tsx</code></summary>

```typescript
import { ProjectInterface, UserProfile } from '@/common.types'
import Image from 'next/image'

import Link from 'next/link'
import Button from "./Button";
import ProjectCard from './ProjectCard';

type Props = {
    user: UserProfile;
}

const ProfilePage = ({ user }: Props) => (
    <section className='flexCenter flex-col max-w-10xl w-full mx-auto paddings'>
        <section className="flexBetween max-lg:flex-col gap-10 w-full">
            <div className='flex items-start flex-col w-full'>
                <Image src={user?.avatarUrl} width={100} height={100} className="rounded-full" alt="user image" />
                <p className="text-4xl font-bold mt-10">{user?.name}</p>
                <p className="md:text-5xl text-3xl font-extrabold md:mt-10 mt-5 max-w-lg">I’m Software Engineer at JSM 👋</p>
                
                <div className="flex mt-8 gap-5 w-full flex-wrap">
                    <Button 
                        title="Follow" 
                        leftIcon="/plus-round.svg" 
                        bgColor="bg-light-white-400 !w-max" 
                        textColor="text-black-100" 
                    />
                    <Link href={`mailto:${user?.email}`}>
                        <Button title="Hire Me" leftIcon="/email.svg" />
                    </Link>
                </div>
            </div>

            {user?.projects?.edges?.length > 0 ? (
                <Image
                    src={user?.projects?.edges[0]?.node?.image}
                    alt="project image"
                    width={739}
                    height={554}
                    className='rounded-xl object-contain'
                />
            ) : (
                <Image
                    src="/profile-post.png"
                    width={739}
                    height={554}
                    alt="project image"
                    className='rounded-xl'
                />
            )}
       </section>

       <section className="flexStart flex-col lg:mt-28 mt-16 w-full">
           <p className="w-full text-left text-lg font-semibold">Recent Work</p>
           
           <div className="profile_projects">
                {user?.projects?.edges?.map(
                    ({ node }: { node: ProjectInterface }) => (
                        <ProjectCard
                            key={`${node?.id}`}
                            id={node?.id}
                            image={node?.image}
                            title={node?.title}
                            name={user.name}
                            avatarUrl={user.avatarUrl}
                            userId={user.id}
                        />
                    )
                )}
            </div>
       </section>
   </section>
)

export default ProfilePage
```

</details>

<details>
<summary><code>projectPage.tsx</code></summary>

```typescript
import Image from "next/image"
import Link from "next/link"

import { getCurrentUser } from "@/lib/session"
import { getProjectDetails } from "@/lib/actions"
import Modal from "@/components/Modal"
// import ProjectActions from "@/components/ProjectActions"
import RelatedProjects from "@/components/RelatedProjects"
import { ProjectInterface } from "@/common.types"
import ProjectActions from "@/components/ProjectActions"

const Project = async ({ params: { id } }: { params: { id: string } }) => {
    const session = await getCurrentUser()
    const result = await getProjectDetails(id) as { project?: ProjectInterface}

    if (!result?.project) return (
        <p className="no-result-text">Failed to fetch project info</p>
    )

    const projectDetails = result?.project

    const renderLink = () => `/profile/${projectDetails?.createdBy?.id}`

    return (
        <Modal>
            <section className="flexBetween gap-y-8 max-w-4xl max-xs:flex-col w-full">
                <div className="flex-1 flex items-start gap-5 w-full max-xs:flex-col">
                    <Link href={renderLink()}>
                        <Image
                            src={projectDetails?.createdBy?.avatarUrl}
                            width={50}
                            height={50}
                            alt="profile"
                            className="rounded-full"
                        />
                    </Link>

                    <div className="flex-1 flexStart flex-col gap-1">
                        <p className="self-start text-lg font-semibold">
                            {projectDetails?.title}
                        </p>
                        <div className="user-info">
                            <Link href={renderLink()}>
                                {projectDetails?.createdBy?.name}
                            </Link>
                            <Image src="/dot.svg" width={4} height={4} alt="dot" />
                            <Link href={`/?category=${projectDetails.category}`} className="text-primary-purple font-semibold"> 
                                {projectDetails?.category}
                            </Link>
                        </div>
                    </div>
                </div>

                {session?.user?.email === projectDetails?.createdBy?.email && (
                    <div className="flex justify-end items-center gap-2">
                        <ProjectActions projectId={projectDetails?.id} />
                    </div>
                )}
            </section>

            <section className="mt-14">
                <Image
                    src={`${projectDetails?.image}`}
                    className="object-cover rounded-2xl"
                    width={1064}
                    height={798}
                    alt="poster"
                />
            </section>

            <section className="flexCenter flex-col mt-20">
                <p className="max-w-5xl text-xl font-normal">
                    {projectDetails?.description}
                </p>

                <div className="flex flex-wrap mt-5 gap-5">
                    <Link href={projectDetails?.githubUrl} target="_blank" rel="noreferrer" className="flexCenter gap-2 tex-sm font-medium text-primary-purple">
                        🖥 <span className="underline">Github</span> 
                    </Link>
                    <Image src="/dot.svg" width={4} height={4} alt="dot" />
                    <Link href={projectDetails?.liveSiteUrl} target="_blank" rel="noreferrer" className="flexCenter gap-2 tex-sm font-medium text-primary-purple">
                        🚀 <span className="underline">Live Site</span> 
                    </Link>
                </div>
            </section>
      
            <section className="flexCenter w-full gap-8 mt-28">
                <span className="w-full h-0.5 bg-light-white-200" />
                <Link href={renderLink()} className="min-w-[82px] h-[82px]">
                    <Image
                        src={projectDetails?.createdBy?.avatarUrl}
                        className="rounded-full"
                        width={82}
                        height={82}
                        alt="profile image"
                    />
                </Link>
                <span className="w-full h-0.5 bg-light-white-200" />
            </section>

            <RelatedProjects userId={projectDetails?.createdBy?.id} projectId={projectDetails?.id} />
        </Modal>
    )
}

export default Project
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nav-border': '#EBEAEA',
        'light-white': '#FAFAFB',
        'light-white-100': '#F1F4F5',
        'light-white-200': '#d7d7d7',
        'light-white-300': '#F3F3F4',
        'light-white-400': '#E2E5F1',
        'light-white-500': '#E4E4E4',
        gray: '#4D4A4A',
        'gray-100': '#3d3d4e',
        'black-100': '#252525',
        'primary-purple': '#9747FF',
        'gray-50': '#D9D9D9',
      },
      boxShadow: {
        menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
      },
      screens: {
        'xs': '400px',
      },
      maxWidth: {
        '10xl': '1680px'
      }
    },
  },
  plugins: [],
};
```
 
</details>

## <a name="links">🔗 Links</a>

Assets used in the project [here](https://drive.google.com/file/d/1l3_LHBjWOXokxlTIUJAyMp4gBoUHP_H4/view)

## <a name="more">🚀 More</a>

**Advance your skills with Next.js 14 Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsmastery.pro/next14" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/557837ce-f612-4530-ab24-189e75133c71" alt="Project Banner">
</a>

<br />
<br />

**Accelerate your professional journey with the Expert Training program**

And if you're hungry for more than just a course and want to understand how we learn and tackle tech challenges, hop into our personalized masterclass. We cover best practices, different web skills, and offer mentorship to boost your confidence. Let's learn and grow together!

<a href="https://www.jsmastery.pro/masterclass" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/fed352ad-f27b-400d-9b8f-c7fe628acb84" alt="Project Banner">
</a>

#
