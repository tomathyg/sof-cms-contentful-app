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

/*type InitialStates = Omit<
  React.AudioHTMLAttributes<HTMLAudioElement>,
  "autoPlay"
> & {
	isPlaying?: boolean;
  repeatType?: RepeatType;
  volume?: number;
  currentTime?: number;
  duration?: number;
  curPlayId: number;
};

interface AudioPlayerProps {
  playList: PlayList;
  audioInitialState?: InitialStates;
  audioRef?: React.MutableRefObject<HTMLAudioElement>;
  activeUI?: ActiveUI;
  customIcons?: CustomIcons;
  coverImgsCss?: CoverImgsCss;
  placement?: {
    player?: PlayerPlacement;
    playList?: PlayListPlacement;
    interface?: InterfacePlacement;
    volumeSlider?: VolumeSliderPlacement;
  };
  rootContainerProps?: RootContainerProps
}*/

const defaultInterfacePlacement = {
  templateArea: {
    artwork: "row1-1",
    trackInfo: "row1-2",
    trackTimeCurrent: "row1-3",
    trackTimeDuration: "row1-4",
    progress: "row1-5",
    repeatType: "row1-6",
    volume: "row1-7",
    playButton: "row1-8",
    playList: "row1-9",
  },
};

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
  const [playerPlacement, setPlayerPlacement] = useState<PlayerPlacement>(
    "bottom-left"
  );
  const [playListPlacement, setPlayListPlacement] = useState<PlayListPlacement>(
    "bottom"
  );
  const [volumeSliderPlacement, setVolumeSliderPlacement] = useState<
    VolumeSliderPlacement
  >();
  const [theme, setTheme] = useState<"dark" | "light" | undefined>();
  const [width, setWidth] = useState("100%");
  const [activeUI, setActiveUI] = useState<ActiveUI>(
    { 
      all: true,
      artwork: false,
      trackInfo: false,
      prevNnext: false
    }
  );
  return (
		<AudioPlayer 
      playList={playList} 
      activeUI={{
        ...activeUI,
        progress: progressType
      }}
      placement={{
        playList: playListPlacement,
        volumeSlider: volumeSliderPlacement
      }}
      rootContainerProps={{
        colorScheme: theme,
        width
      }}
    />
	)
}
