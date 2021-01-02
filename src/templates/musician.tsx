import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import Shell from '../layout/shell';
import { MusicianProps, Musician } from '../components/Musician';
import { MusicianByIdQuery } from '../../types/graphql-types';

export interface MusicianTemplateProps extends MusicianProps {
  helmet?: any;
}

export const MusicianTemplate: React.FunctionComponent<MusicianTemplateProps> = ({
  helmet,
  name,
  instrument,
  bio,
  image,
}) => {
  return (
    <section className="fixed-width">
      {helmet || ''}
      <Musician name={name} instrument={instrument} bio={bio} image={image} />
    </section>
  );
};

interface MusicianPageProps {
  data: MusicianByIdQuery;
}

const MusicianPage = ({ data }: MusicianPageProps) => {
  const { markdownRemark: musician } = data;

  return (
    <Shell>
      <MusicianTemplate
        helmet={
          <Helmet titleTemplate="%s | Musician">
            <title>{`${musician.frontmatter.name}`}</title>
          </Helmet>
        }
        name={musician.frontmatter.name}
        instrument={musician.frontmatter.instrument}
        image={musician.frontmatter.image}
        bio={musician.html}
      />
    </Shell>
  );
};

export default MusicianPage;

export const pageQuery = graphql`
  query MusicianByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        templateKey
        instrument
        image
      }
    }
  }
`;
// export const pageQuery = graphql`
//   query MusicianByID($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       frontmatter {
//         name
//         templateKey
//         instrument
//         image {
//           childImageSharp {
//             fluid(maxWidth: 300, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
