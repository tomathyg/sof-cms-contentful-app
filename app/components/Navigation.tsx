'use client'

//import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
//import MobileHeader from '../components/header';
//import GTM from '../components/GTMContainer';
interface Item {
    id: string;
    slug: string;
    title: string;
}
  
interface NavigationProps {
    items: Item[];
    base: string;
}
 
const Navigation: React.FC<NavigationProps> = ({ items, base }) => {
  const router = useRouter()
  //const pathname = usePathname()
  //const searchParams = useSearchParams()

  //router.prefetch('/scenes/scene-1');

  /*useEffect(() => {
    const handleRouteChange = (pathname) => {
        GTM.dataLayer({
        dataLayer: {
          event: 'pageview',
          page: pathname,
        },
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [pathname, searchParams]);*/
 
  return (
    <>
    <ul className="cursor-pointer desktop-menu w-full flex flex-wrap gap-x-5 justify-around uppercase text-base font-sans">
        {/*<li>
            <button type="button" onClick={() => router.push('/scenes')}>ALL SCENES</button>
        </li>*/}
        <li className="cursor-pointer">
            <button style={{ cursor: 'pointer' }} type="button" onClick={() => router.push('/about')}><span className="cursor-pointer">ABOUT</span></button>
        </li>
        <li>
            <button type="button" onClick={() => router.push('/scenes/scene-1')}>SCENE 1</button>
        </li>
        {/*<li>
            <button type="button" onClick={() => router.push('/submit')}>SUBMIT</button>
        </li>*/}
        {/*{items.map((item, index) => (
            <li key={index}>
                <button className="uppercase" type="button" onClick={() => router.push(`/${base}/${item.slug}`)}>
                {item.title}
                </button>
            </li>
        ))}*/}
        <li>
            <button type="button" onClick={() => router.push('/credits')}>CREDITS</button>
        </li>
        {/*<li>
            <button type="button" onClick={() => router.push('/float')}>FLOAT</button>
        </li>*/}
    </ul>
    {/*<div className='mobile-nav-container sm:hidden h-full w-full'>
        <MobileHeader />
    </div>*/}
    </>
  )
  // ...
}

export default Navigation