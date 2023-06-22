# Flexibble

A dribble clone for developers using the latest Next.js 13

### Things to Provide

- public 
- tailwind config - contains some configuration related to font family, colors, etc.
- globals.css - contains custom tailwind classes created using the [@apply directive](https://tailwindcss.com/docs/functions-and-directives#apply)
- favicon
- constants - contains footer, nav, and category data

### Setup

Create a Next.js 13 project using,

```bash
npx create-next-app@latest
```

- What is your project named? **_flexibble_**
- Would you like to add TypeScript with this project? **_Yes_**
- Would you like to use ESLint with this project? **_Yes_**
- Would you like to use Tailwind CSS with this project? **_Yes_**
- Would you like to use the `src/ directory` with this project? **_No_**
- What import alias would you like configured? **_@\*_**
- Use App Router (recommended)?  **_yes_**
- Would you like to customize the default import alias? **_No_**

### Packages

- [headlessui](https://headlessui.com/) - To create combobox and dropdowns
  ```bash
  npm install @headlessui/react
  ```
- [Cloudinary](https://cloudinary.com/) - To handle image uploading
  ```bash
  npm install cloudinary
  ```
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) - To create jwt tokesn
  ```bash
  npm install jsonwebtoken @types/jsonwebtoken
  ```
- [GraphQL Request](https://www.npmjs.com/package/graphql-request) - To perform GraphQL actions
  ```bash
  npm install graphql-request
  ```
- [Next Auth](https://next-auth.js.org/getting-started/introduction) - For authentication and authorization
  ```bash
  npm install next-auth
  ```
- [Grafbase SDK](https://www.npmjs.com/package/@grafbase/sdk) 
  ```bash
  npm install @grafbase/sdk --save-dev
  ```

### Google
- Go to the Google [Cloud Console](https://console.cloud.google.com/).
- Create a new project or select an existing project from the project dropdown menu.
- Set up the OAuth consent screen
  - In the left sidebar, click on "APIs & Services" and then "OAuth consent screen".
  - Choose the "External" user type and click "Create".
  - Provide an "Application name" and optionally add a "Logo" and "Support email".
  - Under "Authorized domains", enter the domain(s) of your web application. Add the deployed domains later on here
  - Click "Save" when you're done.
- Create OAuth credentials:
  - In the left sidebar, click on "APIs & Services" and then "Credentials".
  - Click on "Create Credentials" and select "OAuth client ID".
  - Choose "Web application" as the application type.
  - Enter a name for the OAuth client ID.
  - Under "Authorized JavaScript origins", enter the origin URL(s) of your web application.
  - Under "Authorized redirect URIs", enter the callback URL(s) provided by Next Auth (e.g., https://example.com/api/auth/callback/google). Add both localhost and deployed redirect URIs. 
  - Click "Create" to generate the OAuth client ID and client secret.

The Google envs we need
```bash
GOOGLE_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
```

### Cloudinary

Go to [Cloudinry](https://cloudinary.com/), signup and navigate to the dashboard to get three keys
```bash
CLOUDINARY_CLOUD_NAME=*****
CLOUDINARY_API_KEY=******
CLOUDINARY_API_SECRET=*****
```

### Grafbase

- Go to [Grafbase](https://grafbase.com/), signup and navigate to the dashboard.
- Click on the "Create Project" and connect it to your GitHub Account to import the Github Repository (Make sure that you have already pushed the repository on GitHub)
- Now click on "Deploy"

After the successful integration, you'll see the overview of the Grafbase project. Now click on "Connect" to get the API Endpoint and API Key. The envs should be, 
```bash
NEXT_PUBLIC_GRAFBASE_API_URL=
NEXT_PUBLIC_GRAFBASE_API_KEY=
```

You can click on "View Pathfinder" to see the deployed version of your database. 

### NextAuth
We'll need two envs, i.e., NEXTAUTH_URL and NEXTAUTH_SECRET

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=0BaooQUqS5YBkCheO9A5rGVJxSyCoYJ1vvsmH231Erc=
```

In production, we can replace the NEXTAUTH_URLf to prodcution URL
```bash
NEXTAUTH_URL=https://flexibble.vercel.app/
```

You can create any random NEXTAUTH_SECRET using this command. You can read more about it [here](https://next-auth.js.org/configuration/options#secret)
```bash
openssl rand -base64 32
```

### Things to know

To enable the functionality of dynamic images, we need to inform Next.js explicitly that we anticipate receiving dynamic image URLs from a particular source. This can be achieved by adjusting the configuration of Next.js as follows:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'res.cloudinary.com', 'task.com']
  },
  experimental: {
    serverComponentsExternalPackages: ['cloudinary', 'graphql-request']
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
```

### Run Next.js

Open a new terminal and,
```bash
npm run dev
```

### Run Grafbase

Open another new terminal and,
```bash
npx grafbase@0.24 dev
```

After successful installation, you'll see this:
```bash
📡 Listening on port 4000
Pathfinder: http://127.0.0.1:4000
Endpoint:   http://127.0.0.1:4000/graphql
```

Open the local Pathfinder to perform database operations  
