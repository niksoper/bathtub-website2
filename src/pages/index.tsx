import { Link } from 'gatsby';
import * as React from 'react';

import BlogRoll from '../components/BlogRoll';
import Shell from '../layout/shell';

import './index.scss';

const Index: React.FunctionComponent<{}> = () => {
  return (
    <Shell>
      <div className="fixed-width">
        <Link to="alan">🤡 list all pages 🤠</Link>
        <div className="blog-posts">
          <h3>Latest from the blog</h3>
          <BlogRoll />
        </div>
      </div>
    </Shell>
  );
};

export default Index;
