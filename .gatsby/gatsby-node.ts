import { GatsbyNode } from 'gatsby';
export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
  // All your methods (createPage etc) are now typed and usable!
  // Also full async/await compatible so you can do the following  
  // const result = await graphql(query);
};