'use client'
 
import { useRouter } from 'next/navigation'

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
 
  return (
    <ul className='nav-list'>
      {items.map((item, index) => (
        <li key={index}>
            <button className="uppercase font-normal" type="button" onClick={() => router.push(`/${base}/${item.slug}`)}>
            {item.title}
            </button>
        </li>
      ))}
    </ul>
  )
  // ...
}

export default Navigation