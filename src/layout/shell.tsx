import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet";

import "./shell.scss";

const Shell: React.FunctionComponent = ({ children }) => {
  // Codegen will append 'query' onto any query name so just use the root word as below.
  // Write your gql query, save the file and your typings will be generated automatically.
  // const data: HeaderQuery = useStaticQuery(graphql`
  //   query Header {
  //     site {
  //       siteMetadata {
  //         siteName
  //         companyName
  //       }
  //     }
  //   }
  // `)
  

  const siteName = "Cool site bro"; ///data.site.siteMetadata.siteName;
  const companyName = "Rocketmakers"; //data.site.siteMetadata.companyName;

  return (
    <>
      <Helmet
        defaultTitle={siteName}
        titleTemplate={`%s — ${siteName}`}
      />
      <header>
        <div className="fixed-width">
          {siteName}
        </div>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} {companyName}
      </footer>
    </>
  );
};

export default Shell;
