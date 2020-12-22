import * as React from "react";
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet";
import { HeaderQuery } from '../../types/graphql-types';

import "./shell.scss";

const Shell: React.FunctionComponent = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
      query Header {
        site {
          siteMetadata {
            siteName
            companyName
          }
        }
      }
    `}
    render={(data :HeaderQuery) => {
      const  { siteName, companyName } = data.site.siteMetadata
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
      )}}
    />
  );
};

export default Shell;
