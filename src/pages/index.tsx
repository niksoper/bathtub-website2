import * as React from "react";
import Shell from "../layout/shell";

import "./index.scss";

const Index: React.FunctionComponent<{}> = () => {


  return (
    <Shell>
      <div className="fixed-width">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p className="intro">Intro Paragraph</p>
        <p>Paragraph</p>
      </div>
    </Shell>
  );
};

export default Index;