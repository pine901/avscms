import Link from 'next/link';
import React from 'react'
import { AiFillInfoCircle } from 'react-icons/ai';
import { BsChevronUp } from 'react-icons/bs';


export interface ICaution {

}


interface CautionProps {
    title: string;
    children: React.ReactNode;

}

const Caution = ({ title, children }: CautionProps) => {
    const [showCautions, setShowCautions] = React.useState(true);

    return (
        <div className='w-full rounded-2xl bg-white md:py-8 sm:py-6 py-4 md:px-6 sm:px-5 px-3 flex flex-col gap-4 transition-all duration-200'>
            <div className='border-b pb-3 transition-all duration-200'>
                <div className='w-full flex lg:items-center items-start justify-between text-primary-100 gap-2 text-xl font-medium'>
                    <div className='flex md:items-center sm:text-base text-sm items-start gap-x-2'>
                        <AiFillInfoCircle size={20} className='shrink-0' />
                        <p>{title}</p>
                    </div>
                    {showCautions ? <BsChevronUp onClick={() => setShowCautions(false)} className='cursor-pointer shrink-0' /> : <BsChevronUp onClick={() => setShowCautions(true)} className='transform rotate-180 cursor-pointer shrink-0' />}
                </div>
                {
                    showCautions && <div className='py-3 px-5'>
                        {children}
                    </div>
                }
            </div>
            <Link href={'/product/pricing-and-ordering'}>
                <button className='outlined-btn uppercase sm:w-fit w-full'>
                    purchase
                </button>
            </Link>
        </div>
    )
}

export default Caution