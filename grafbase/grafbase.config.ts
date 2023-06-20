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
  // category: g.relation(() => Category), // String field for the category
  category: g.string().search(),
  createdBy: g.relation(() => User), // Relation to the User model
});

// const categories = g.enum('discover', ['discover', 'animation', 'branding', 'illustration', 'monile', 'print', 'product', 'typography', 'web'])

// const Category = g.model('Category', {
//   name: g.enumRef(categories), // Required string field for the category name, which should be unique
//   projects: g.relation(() => Project).list().optional(),
// });

// make a cateogry a model -> set a slug
// set that field as a unique field
//when creating a project, just make a call to grafbase to get all categories, map the ids, and then when creating a project
// connect it to category -> using the connect feature by passing the id. when clicking at teh cateogry, just make a call to grafbase -> to fetch category by slug and then get all projects by category

export default config({
  schema: g
})
