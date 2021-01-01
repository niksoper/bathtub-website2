import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import { Musician } from './Musician';

import { AllMusiciansQuery } from '../../types/graphql-types';

const Musicians: React.FunctionComponent<{ data: AllMusiciansQuery }> = ({ data }) => {
  const { edges: musicians } = data.allMarkdownRemark;

  return (
    <div className="musicians">
      {musicians &&
        musicians.map(({ node }) => {
          const { name, instrument } = node.frontmatter;
          return <Musician key={node.id} name={name} instrument={instrument} bio={node.html} />;
        })}
    </div>
  );
};

// TODO: sorting and images
export default () => (
  <StaticQuery
    query={graphql`
      query AllMusicians {
        allMarkdownRemark(
          sort: { fields: [frontmatter___name, frontmatter___instrument] }
          filter: { frontmatter: { templateKey: { eq: "musician" } } }
        ) {
          edges {
            node {
              id
              html
              fields {
                slug
              }
              frontmatter {
                name
                templateKey
                instrument
              }
            }
          }
        }
      }
    `}
    render={(data) => <Musicians data={data} />}
  />
);

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query MusiciansQuery {
//         allMarkdownRemark(
//           sort: {fields: [frontmatter___name, frontmatter___instrument]},
//           filter: { frontmatter: { templateKey: { eq: "musician" } } }
//         ) {
//           edges {
//             node {
//               id
//               html
//               fields {
//                 slug
//               }
//               frontmatter {
//                 name
//                 templateKey
//                 instrument
//                 image {
//                   childImageSharp {
//                     fluid(maxWidth: 300, quality: 100) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Musicians data={data} />}
//   />
// )
