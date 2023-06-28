import Link from 'next/link';
import React from 'react';
import { ILink } from '.';
import links from '../../../../store/data/links';
import Image from 'next/image';


const ServicesAndSupportDropdown = ({ active }: { active: 'support' | 'services' }) => {
    const [linksToShow, setLinksToShow] = React.useState<ILink[]>([]);
    React.useEffect(() => {
        if (active === 'services') {
            setLinksToShow(links[2].subLinks!)
        } else {
            setLinksToShow(links[3].subLinks!)
        }
    }, [active])

    return (
        <div className=' absolute rounded-lg p-4 z-50 bg-gray-50 -left-[200%] w-max top-8 shadow-xl grid  xl:grid-cols-2 grid-cols-1 gap-y-6'>
            {
                linksToShow.map((link, index) => (
                    <Link href={link.href!} key={link.label}>
                        <div className='flex gap-2 group cursor-pointer'>
                            {active==='services' && <Image src={`/icons/services/${index+1}.png`} width={40} height={40} alt={link.label} />}
                            {active==='support' && <Image src={`/icons/support/${index+1}.png`} width={40} height={40} alt={link.label} />}
                            <div className=''>
                                <p className='lg:text-base text-sm font-semibold text-grayish-100 group-hover:text-primary-100 capitalize transtition-all duration-200'>{link.label}</p>
                                <p className='lg:text-sm text-xs text-[#BCBCBC] group-hover:text-primary-100 transtition-all duration-200'>{link.description}</p>
                                </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ServicesAndSupportDropdown