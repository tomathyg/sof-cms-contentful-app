'use client'
 
import { useRouter } from 'next/navigation'

interface RouterButtonProps {
    url: string;
    label: string;
    classes?: string;
    overflow?: boolean;
}
 
const RouterButton: React.FC<RouterButtonProps> = ({ url, label, classes, overflow }) => {
  const router = useRouter()
  //const pathname = usePathname()
  //const searchParams = useSearchParams()
  //router.prefetch(url);

  const handleClick = () => {
    //console.log("ROUTER BUTTON CLICKED");
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.remove('overflow-hidden');
    }
    router.push(url);
  }
 
  return (
    <button className={`${classes}`} type="button" onClick={handleClick}>{label}</button>
  )
}

export default RouterButton