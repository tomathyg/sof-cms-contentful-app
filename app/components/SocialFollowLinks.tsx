import React from 'react'
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'

interface SocialMediaItem {
    title: string;
    url: string;
}
  
interface SocialIconsListProps {
    items: SocialMediaItem[];
}

const SocialIconsList: React.FC<SocialIconsListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <SocialIcon 
          key={index} 
          network={item.title.toLowerCase().replace(/\s+/g, '-')} 
          url={item.url}
          target='_blank'
          //className='social-icon'
          bgColor='black'
          fgColor='#e8e0c5'
          className=''
        />
      ))}
    </div>
  );
};

export default SocialIconsList;
