import * as React from 'react';

import Collapser from './Collapser';
import { HTMLContent } from './Content';
import { MusicianImage } from './MusicianImage';

import './Musician.scss';

export interface MusicianProps {
  name: string;
  instrument: string;
  bio: string;
  image?: any;
}

export const Musician: React.FunctionComponent<MusicianProps> = ({ name, instrument, bio, image }) => (
  <div className="musician box notification">
    <h1>{`${name}: ${instrument}`}</h1>
    <div className="info">
      <div className="photo">
        <MusicianImage name={name} image={image} />
      </div>
      <Collapser maxHeightCollapsed={50}>
        <blockquote>
          <HTMLContent className="bio" content={bio} />
        </blockquote>
      </Collapser>
    </div>
  </div>
);
