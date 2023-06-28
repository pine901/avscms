import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';


interface Props {
    icon: string;
    title: string;
    items: string[];
}
const PluginAction = ({ icon, title, items }: Props) => {
    const { isMobile, isTablet } = useMediaQuery();
    const [open, setOpen] = React.useState(false);
    return (
        <div className='w-full'>
            <div
                onClick={() => setOpen(!open)}
                role='button' className={`flex w-full justify-between items-center md:px-4 px-2 py-2 bg-slate-50/50 rounded-md text-grayish-100 hover:text-primary-100 ${open && 'text-primary-100'}`}>
                <div className='flex items-center gap-4'>
                    <Image src={`/icons/${icon}`} alt='' width={isMobile ? 20 : isTablet ? 30 : 40} height={isMobile ? 20 : isTablet ? 30 : 40} />
                    <p className='lg:text-xl md:text-lg sm:text-base text-sm '>{title}</p>
                </div>
                {
                    open ? <BsChevronUp

                        size={20} className='cursor-pointer hover:text-primary-100' /> :
                        <BsChevronDown

                            size={20} className='cursor-pointer hover:text-primary-100' />}
            </div>
            {
                open && (
                    <div className='space-y-2 xl:pl-12 lg:pl-10 md:pl-8 sm:pl-6 pl-4'>
                        {
                            items.map(itm => (
                                <div key={itm} className='flex gap-2'>

                                    <FiCheck className='text-green-500' size={20} />
                                    <p className='text-grayish-200 lg:text-base md:text-sm text-xs font-light'>{itm}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default PluginAction