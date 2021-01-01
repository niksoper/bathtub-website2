import * as React from 'react';

import Shell from '../../layout/shell';
// import BlogRoll from '../../components/BlogRoll';

const BlogIndexPage: React.FunctionComponent = () => (
  <Shell>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>BathTub Blog</h1>
        </div>
        {/* <BlogRoll /> */}
      </div>
    </section>
  </Shell>
);

export default BlogIndexPage;
