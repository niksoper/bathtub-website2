import * as React from 'react';

export const MusicianImage: React.FunctionComponent<{ image: string; name: string }> = ({ name, image }) => {
  return <img alt={`Photo of ${name}`} src={image} />;
};
