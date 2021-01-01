import * as React from 'react';

import Shell from '../../layout/shell';
import Musicians from '../../components/Musicians';

const MusiciansIndexPage: React.FunctionComponent = () => (
  <Shell>
    <section className="fixed-width">
      <h1>Our musicians</h1>
      <p>Of course, without musicians there is no music - meet some of our members:</p>
      <Musicians />
    </section>
  </Shell>
);

export default MusiciansIndexPage;
