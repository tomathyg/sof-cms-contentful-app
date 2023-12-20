'use client'

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

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
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        if (showDropdown) {
            setShowDropdown(false);
        } else {
            setShowDropdown(true);
        }
    }

    return (
        <>
            <ul className="cursor-pointer desktop-menu w-full flex flex-wrap gap-x-5 justify-around uppercase text-base font-sans">
                {/* ... */}
                <li>
                    <button type="button" onClick={() => router.push('/about')}>ABOUT</button>
                </li>
                <li 
                    className="cursor-pointer relative"
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                >
                    <button
                        style={{ cursor: 'pointer' }}
                        type="button"
                        
                        onClick={() => router.push('/scenes')}
                        className={showDropdown ? 'active' : ''}
                    >
                        <span className="cursor-pointer">GALLERIES</span>
                    </button>
                    {showDropdown && (
                        <ul
                            className="absolute top-full left-0 bg-black leading-9 shadow-md py-2 px-4 w-full opacity-80"
                        >
                            {items.sort((a, b) => a.slug.localeCompare(b.slug)).map((item, index) => (
                                <li key={index}>
                                    <button
                                        className="uppercase"
                                        type="button"
                                        onClick={() => router.push(`/${base}/${item.slug}`)}
                                    >
                                        {item.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
                {/* ... */}
                <li>
                    <button type="button" onClick={() => router.push('/credits')}>CREDITS</button>
                </li>
            </ul>
            {/* ... */}
        </>
    )
}

{/*export default Navigation
        <li>
            <button type="button" onClick={() => router.push('/scenes/scene-1')}>SCENE GALLERIES</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <button className="uppercase" type="button" onClick={() => router.push(`/${base}/${item.slug}`)}>
                        {item.title}
                        </button>
                    </li>
                ))}
            </ul>
        </li>
        
    </ul>

    </>
  )
  // ...
}*/}

export default Navigation