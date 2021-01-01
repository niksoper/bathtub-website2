import * as React from 'react';

export const MusicianImage: React.FunctionComponent<{ image: any; name: string }> = ({ name, image }) => {
  return image?.childImageSharp?.fluid?.src ? (
    <img alt={`Photo of ${name}`} src={image.childImageSharp.fluid.src} />
  ) : null;
};
