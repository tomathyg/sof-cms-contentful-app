'use client'

import { useReducer } from "react";
import type { AppProps } from 'next/app';

import {
  DispatchPlayerContext,
  PlayerContext,
  playerInitialState,
  playerReducer,
} from "decent-audio-player";

const App = ({ Component, pageProps }: AppProps) => {
  const [state, dispatch] = useReducer(playerReducer, playerInitialState);
  return (
    <PlayerContext.Provider value={state}>
      <DispatchPlayerContext.Provider value={dispatch}>
        <Component {...pageProps} />
      </DispatchPlayerContext.Provider>
    </PlayerContext.Provider>
  );
};

import { AudioPlayer } from "decent-audio-player";

const DecentAudioPlayer = () => (
  <AudioPlayer
    size={56}
    audioSrc="https://nftstorage.link/ipfs/QmWNaSdhXq2WdusiBcVC2Ju5A1JJySRDVNrQMEBGcaazvC"
    callbackAfterPlay={console.log}
    active
  />
);

export default DecentAudioPlayer;