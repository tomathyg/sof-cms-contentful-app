import React, { FC, Fragment } from 'react';
import Link from 'next/link'

interface Item {
    id: string;
    slug: string;
    title: string;
}
  
interface NavListProps {
    items: Item[];
    base: string;
}
  
const NavList: React.FC<NavListProps> = ({ items, base }) => {
    return (
      <ul className='nav-list'>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={`/${base}/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    )
  }

export default NavList;