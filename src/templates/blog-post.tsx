import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Shell from '../layout/shell';
import Content, { HTMLContent } from '../components/Content';
import { BlogPostByIdQuery } from '../../types/graphql-types';

export interface BlogPostTemplateProps {
  content: any;
  contentComponent?: any;
  description: string;
  tags: string[];
  title: string;
  helmet?: any;
}

export const BlogPostTemplate = ({ content, contentComponent, description, title, helmet }: BlogPostTemplateProps) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="fixed-width">
      {helmet || ''}
      <div>
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
        <p>{description}</p>
        <PostContent content={content} />
      </div>
    </section>
  );
};

interface BlogPostProps {
  data: BlogPostByIdQuery;
}

const BlogPost = ({ data }: BlogPostProps) => {
  const { markdownRemark: post } = data;

  return (
    <Shell>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Shell>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
