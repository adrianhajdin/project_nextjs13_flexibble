import { g, config } from '@grafbase/sdk';

// Define the User model
const User = g.model('User', {
  name: g.string().length({ min: 2, max: 100 }), // Required string field for the name with length constraints
  email: g.string().unique(), // Required string field for the email, which should be unique
  avatarUrl: g.url(), // URL field for the avatar
  description: g.string().length({ min: 2, max: 1000 }).optional(), // Optional string field for the description with length constraints
  githubUrl: g.url().optional(), // Optional URL field for the GitHub URL
  linkedinUrl: g.url().optional(), // Optional URL field for the LinkedIn URL
  projects: g.relation(() => Project).list().optional(),
});

// Define the Project model
const Project = g.model('Project', {
  title: g.string().length({ min: 3 }), // Required string field for the title with a minimum length of 3 characters
  description: g.string().length({ min: 10 }), // Required string field for the description with a minimum length of 10 characters
  image: g.url(), // URL field for the image
  liveSiteUrl: g.url(), // URL field for the live site URL
  githubUrl: g.url(), // URL field for the GitHub URL
  likes: g.int().default(0), // Integer field for likes with a default value of 0
  category: g.string(), // String field for the category
  createdBy: g.relation(() => User), // Relation to the User model
});

export default config({
  schema: g
})
