import { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import * as path from 'path';

import { Query } from '../types/graphql-types';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
  const { errors, data } = await graphql<Query>(`
    query AllBlogPosts {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `);

  if (errors) {
    errors.forEach((e) => console.error(e.toString()));
    throw new Error('Errors in gatsby-node :-(');
  }

  for (const edge of data.allMarkdownRemark.edges) {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`src/templates/${edge.node.frontmatter.templateKey}.tsx`),
      context: {
        id: edge.node.id,
      },
    });
  }
};

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
