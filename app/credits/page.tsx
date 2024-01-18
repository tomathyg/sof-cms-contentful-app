import { getCreditsPageData } from '../../lib/api-2'

interface ContributorItem {
    name: string;
    role: string;
} 
interface CreditsProps {
    items: ContributorItem[];
}

//const Page: React.FC<CreditsProps> = ({ items }) => {

export default async function Page() {

    const content = await getCreditsPageData(false);
    //console.log("CREDITS PAGE CONTENT:", content);
    const contributors = content.contributorsCollection.items;
    //console.log("CONTRIBUTORS:", contributors);

    return (
        <>
        <section className="flex justify-center text-center">
            <h1 className="text-3xl xsm:text-4xl sm:text-6xl md:text-8xl">CREDITS</h1>
        </section>
        <section className='pb-12'>
            <ul className="my-8 px-4 w-full flex flex-col items-center flex-wrap gap-x-5 justify-around uppercase text-base tracking-wide font-sans text-center">
                {contributors.map((item:any, index:any) => (
                    <li className='mb-4 sm:mb-8' key={index}>
                        <span className='text-base sm:text-3xl block sm:mb-3'>{item.name}</span>
                        <span className='text-xsm sm:text-base'>{item.role}</span>
                    </li>
                ))}
            </ul>
        </section>
        </>
    )
}