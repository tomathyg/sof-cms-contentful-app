'use client'

import { useState } from "react";

import AudioPlayer, {
  ActiveUI,
  InterfaceGridTemplateArea,
  PlayerPlacement,
  PlayListPlacement,
  ProgressUI,
  VolumeSliderPlacement
} from "react-modern-audio-player";

/*type ActiveUI = {
  all: boolean;
  playButton: boolean;
  playList: PlayListUI;
  prevNnext: boolean;
  volume: boolean;
  volumeSlider: boolean;
  repeatType: boolean;
  trackTime: boolean;
  trackInfo: boolean;
  artwork: boolean;
  progress: ProgressUI;
};
type ProgressUI = "waveform" | "bar" | false;
type PlayListUI = "sortable" | "unSortable" | false;*/

const playList = [
  {
    name: 'name',
    writer: 'writer',
    img: 'image.jpg',
    src: 'https://nftstorage.link/ipfs/QmWNaSdhXq2WdusiBcVC2Ju5A1JJySRDVNrQMEBGcaazvC',
    id: 1,
  },
]

export default function Player () {
  const [progressType, setProgressType] = useState<ProgressUI>("bar");
  const [activeUI, setActiveUI] = useState<ActiveUI>(
    { 
      all: true,
      artwork: false,
      trackInfo: false,
      prevNnext: false,
    }
  );
  return (
		<AudioPlayer 
      playList={playList} 
      activeUI={{
        ...activeUI,
        progress: progressType
      }}
    />
	)
}
