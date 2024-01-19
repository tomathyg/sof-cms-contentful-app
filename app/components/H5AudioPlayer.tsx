'use client'

import React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

/*const styles = `
  .scene-2-article .rhap_progress-indicator, .scene-2-article .rhap_volume-indicator {
    background: var(--scene-color-2) !important;
  }
`;*/

interface H5PlayerProps {
    src: string;
    title: string;
    colour?: string;
}

const H5Player: React.FC<H5PlayerProps> = ({ src, title, colour }) => {
  //console.log("TRACK TITLE:", title);
  const PlayerHeader = () => (
    <h3 className='text-sm leading-normal tracking-wide uppercase text-center'>{title}</h3>
  );
  {/*<style>{styles}</style>*/}
  {/*<style jsx>{`
    .crossmintButton-d2-0-2-6 {
      background: ${colour} !important;
    }
  `}</style>*/}
  return (
    <AudioPlayer
      src={src}
      onPlay={e => console.log("onPlay")}
      showSkipControls={false}
      showJumpControls={false}
      defaultCurrentTime='00:00'
      layout='horizontal-reverse'
      header={<PlayerHeader />}
    />
  )
}

export default H5Player