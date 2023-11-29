'use client'
 
import { useRouter } from 'next/navigation'

interface RouterButtonProps {
    url: string;
    label: string;
    classes?: string;
}
 
const RouterButton: React.FC<RouterButtonProps> = ({ url, label, classes }) => {
  const router = useRouter()
  //const pathname = usePathname()
  //const searchParams = useSearchParams()

  //router.prefetch(url);
 
  return (
    <button className={`${classes}`} type="button" onClick={() => router.push(url)}>{label}</button>
  )
}

export default RouterButton