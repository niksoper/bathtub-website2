import * as React from 'react';

export interface CollapserProps {
  maxHeightCollapsed?: number;
  maxHeightExpanded?: number;
}

import './Collapser.scss';

const Collapser: React.FunctionComponent<CollapserProps> = ({ children, maxHeightCollapsed, maxHeightExpanded }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const { maxHeight, fadeHeight, toggleLabel } = React.useMemo(
    () => ({
      maxHeight: isCollapsed ? maxHeightCollapsed : maxHeightExpanded,
      fadeHeight: Math.min(100, maxHeightCollapsed * 0.5),
      toggleLabel: `Read ${isCollapsed ? 'more' : 'less'}`,
    }),
    [isCollapsed, maxHeightCollapsed, maxHeightExpanded]
  );

  return (
    <div className={`collapser ${isCollapsed ? '' : 'expanded'}`}>
      <div className="collapsable" style={{ maxHeight }}>
        {children}
        <div className="fadefoot hide-expanded" style={{ height: fadeHeight }}></div>
      </div>
      <div className="more">
        <button className="toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
          {toggleLabel}
        </button>
      </div>
    </div>
  );
};

Collapser.defaultProps = {
  maxHeightCollapsed: 200,
  maxHeightExpanded: 1000,
};

export default Collapser;
