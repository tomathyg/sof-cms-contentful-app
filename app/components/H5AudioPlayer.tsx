'use client'

import React, { FC } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

interface H5PlayerProps {
    src: string;
}

const H5Player: FC<H5PlayerProps> = ({ src }) => (
  <AudioPlayer
    src={src}
    onPlay={e => console.log("onPlay")}
    showSkipControls={false}
    showJumpControls={true}
    defaultCurrentTime='00:00'
  />
);

export default H5Player