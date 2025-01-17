'use client'

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
//import Link from 'next/link';

import { useRouter } from 'next/navigation'

//import { BurgerSquare } from '../svgs/icons.js'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      // Open the menu with GSAP
      gsap.to(menuRef.current, { autoAlpha: 1, x: 0 });
    } else {
      // Close the menu with GSAP
      gsap.to(menuRef.current, { autoAlpha: 0, x: -100 });
    }
  }, [isOpen]);

  const handleNavigation = (path:any) => {
    gsap.to(menuRef.current, { autoAlpha: 0, x: -100, onComplete: () => {
      router.push(path);
      setIsOpen(false);
    }});
  };


  // style={{ position: 'absolute', left: '0', top: 0, zIndex: 10 }}

  return (
    <nav className='mobile-nav flex items-center pl-6 h-full'>
      <button onClick={() => setIsOpen(!isOpen)} className={`font-sans mobile-nav-button flex items-center z-10 h-[30px] w-[30px] overflow-visible ${isOpen ? 'active' : ''}`}>
        {/*<svg id="burger-square" viewBox="0 -20 118 158"><rect y="74.12" width="118" height="43.88" fill="#e8e0c5"/><rect y="31.39" width="118" height="32.54" fill="#e8e0c5"/><rect width="118" height="21.21" fill="#e8e0c5"/></svg>*/}EXPLORE
      </button>
      <div ref={menuRef} className='fixed left-0 top-0 w-full h-full pt-[77px] pl-6 bg-black font-sans text-xl leading-9 opacity-0'>
        <ul className='nav-list'>
          <li><button type="button" onClick={() => handleNavigation('/')}>HOME</button></li>
          <li><button type="button" onClick={() => handleNavigation('/submit')}>SUBMIT</button></li>
          <li><button type="button" onClick={() => handleNavigation('/scenes')}>ALL SCENES</button></li>
          <li><button type="button" onClick={() => handleNavigation('/scenes/scene-1')}>BUY SCENE 1</button></li>
          <li><button type="button" onClick={() => handleNavigation('/scenes/scene-2')}>BUY SCENE 2</button></li>
          <li><button type="button" onClick={() => handleNavigation('/scenes/scene-3')}>BUY SCENE 3</button></li>
          <li><button type="button" onClick={() => handleNavigation('/scenes/scene-4')}>BUY SCENE 4</button></li>
          <li><button type="button" onClick={() => handleNavigation('/scenes/scene-5')}>BUY SCENE 5</button></li>
          <li><button type="button" onClick={() => handleNavigation('/scenes/scene-6')}>BUY SCENE 6</button></li>
          <li><button type="button" onClick={() => handleNavigation('/about')}>ABOUT</button></li>
          <li><button type="button" onClick={() => handleNavigation('/credits')}>CREDITS</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
