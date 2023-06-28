import { PAYPAL_STORE_LINK } from '@/constants';
import { IPlan } from '@/pages/services/hosting';
import Link from 'next/link';
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';

interface Props extends IPlan {
    description: string;
}
const Bundle = ({ name, price, features, description }: Props) => {
    return (
        <div className={`rounded-xl w-full  border border-[#e2e0e0] h-fit
                                `}>
            <div className={`bg-grayish-400 flex w-full py-4 flex-col items-center gap-1 rounded-t-xl`}>

                <p className={`lg:text-lg sm:text-base text-sm  text-grayish-100} opacity-70`}>{name}</p>

                <h3 className={`text-grayish-100 font-semibold lg:text-5xl md:text-4xl text-3xl`}>{price === 0 ? 'Free' : `$${price}`}</h3>

                <p className={`lg:text-lg sm:text-base text-sm text-grayish-100 opacity-70 text-center md:px-0 px-2`}>{description}</p>
            </div>
            <div className={`rounded-b-xl   border-t-0 flex flex-col items-center justify-between gap-4 py-4 pb-6 md:min-h-[81vh] xl:min-h-[70vh]`}>
                <div className='flex flex-col items-center gap-1'>
                    <div className='flex flex-col items-center gap-2 px-4 lg:text-lg sm:text-base text-sm text-center text-grayish-100'>
                        <p>AVS 終身擁有許可證</p>
                        <p>對於 <span className='font-semibold'>無限</span> 域名/網站 </p>
                        <p>100% 未加密的源代碼</p>
                        <p>免費終身支持和錯誤修復</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 px-4 pt-2 '>
                        {
                            features.map((feature, index) => (
                                <div key={index} className='lg:text-lg sm:text-base text-sm text-center text-grayish-100 flex items-center gap-2 font-medium'>
                                    <AiFillCheckCircle className='text-green-500' size={24} />
                                    <span>{feature}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Link href={`${price === 0 ? '/product/download' : PAYPAL_STORE_LINK}`}>
                    <button className={`outlined-btn uppercase`}>
                        買
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Bundle