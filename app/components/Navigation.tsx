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
    <ul className="flex w-full justify-around uppercase text-base">
        <li>
            <button type="button" onClick={() => router.push('/about')}>ABOUT</button>
        </li>
        <li>
            <button type="button" onClick={() => router.push('/credits')}>CREDITS</button>
        </li>
        {items.map((item, index) => (
            <li key={index}>
                <button className="uppercase" type="button" onClick={() => router.push(`/${base}/${item.slug}`)}>
                {item.title}
                </button>
            </li>
        ))}
    </ul>
  )
  // ...
}

export default Navigation