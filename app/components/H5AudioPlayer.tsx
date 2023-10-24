'use client'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS

const H5Player = () => (
  <AudioPlayer
    autoPlay
    src="https://nftstorage.link/ipfs/bafybeicnigbsdd6duwjjjompu5slw3iohdksf5p5ip2rcny2pn2jealkg4/moths 2 - beat demo 135 (interlude).mp3?id=0"
    onPlay={e => console.log("onPlay")}
    showSkipControls={false}
    showJumpControls={true}
    defaultCurrentTime='00:00'
  />
);

export default H5Player