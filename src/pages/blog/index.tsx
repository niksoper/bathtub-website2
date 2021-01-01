import * as React from 'react';

import Shell from '../../layout/shell';
import BlogRoll from '../../components/BlogRoll';

const BlogIndexPage: React.FunctionComponent = () => (
  <Shell>
    <section className="fixed-width">
      <div>
        <h1>BathTub Blog</h1>
      </div>
      <BlogRoll />
    </section>
  </Shell>
);

export default BlogIndexPage;
