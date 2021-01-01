import * as React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import { BlogRollQuery } from '../../types/graphql-types';

const BlogRoll: React.FunctionComponent<{ data: BlogRollQuery }> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div>
      {posts &&
        posts.map(({ node: post }) => (
          <div key={post.id}>
            <article>
              <div>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                <span> &bull; </span>
                <h1>{post.frontmatter.date}</h1>
              </div>
              <div>
                {post.excerpt}
                <br />
                <br />
                <Link to={post.fields.slug}>Keep Reading →</Link>
              </div>
            </article>
          </div>
        ))}
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRoll {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogRoll data={data} />}
  />
);
