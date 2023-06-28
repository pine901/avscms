import { IPlan } from '@/pages/services/hosting';
import Link from 'next/link';
import React from 'react'

interface Props extends IPlan {
    preferred?: boolean;
    buttonType: 'black' | 'filled' | 'outline';
    butttonText: string;
}
const Plan = ({ name, price, features, preferred, buttonType, butttonText }: Props) => {
    return (
        <div className={`rounded-xl w-full  border border-[#e2e0e0]
                                `}>
            <div className={` ${preferred ? 'bg-primary-100' : 'bg-grayish-400'} flex w-full py-4 flex-col items-center gap-1 rounded-t-xl`}>

                <p className={`md:text-lg sm:text-base text-sm ${preferred ? 'text-white' : 'text-grayish-100'} opacity-70`}>{name}</p>

                <h3 className={`${preferred ? 'text-white' : 'text-grayish-100'} font-semibold md:text-5xl sm:text-4xl text-3xl`}>${price}</h3>

                <p className={`md:text-lg sm:text-base text-sm ${preferred ? 'text-white' : 'text-grayish-100'} opacity-70`}>每月</p>
            </div>
            <div className={`rounded-b-xl   border-t-0 flex flex-col items-center justify-between gap-4 py-4 pb-6 md:min-h-[45vh]`}>
                <div className='flex flex-col items-center gap-1 px-4'>
                    {
                        features.map((feature, index) => (
                            <p key={index} className='md:text-lg sm:text-base text-sm text-center text-grayish-200 font-light'>{feature}</p>
                        ))
                    }
                </div>
                <Link href={'/support/contact'}>
                    <button className={`${buttonType === "black" ? 'black-btn' : 'outlined-btn'} uppercase`}>
                        {butttonText}
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Plan