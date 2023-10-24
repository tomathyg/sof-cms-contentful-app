'use client'

import AudioPlayer from 'react-modern-audio-player';

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
  return (
		<AudioPlayer playList={playList} />
	)
}
