import { PAYPAL_STORE_LINK } from '@/constants';
import Link from 'next/link';
import React from 'react'

export interface IProductProps {
    title: string | string[];
    href: string | string[];
    description: string;
    price: number;
    labels?: string[];
}

const Product = ({ title, description, href, price, labels }: IProductProps) => {
    return (
        <div className='rounded-xl border md:p-6 sm:p-6 p-4 md:space-y-3 space-y-2'>
            <h2 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium'>
                {
                    typeof title === 'string' ? (title) : (
                        <>
                            <span>{title[0]} </span>
                            <span className='font-light'>{title[1]}</span>
                        </>
                    )
                }
            </h2>
            <p className='text-grayish-200 sm:text-base text-sm'>{description}</p>
            <p className='text-primary-100 md:text-3xl text-2xl sm:pb-3 '>${price}</p>
            <div className='flex items-center gap-5'>
                <Link href={PAYPAL_STORE_LINK}>
                    <button className='outlined-btn'>
                        買
                    </button>
                </Link>
                {
                    typeof href === "string" ?
                        <Link href={href}>
                            <button className='black-btn px-5 py-3'>
                                了解更多
                            </button>
                        </Link> :
                        <div className='flex items-center gap-1 text-sm text-grayish-100'>
                            <Link href={href[0]}>
                                <button className='text-grayish-200 text-sm hover:text-grayish-100'>{labels![0]}</button>
                            </Link>
                            |
                            <Link href={href[1]}>
                                <button className='text-grayish-200 text-sm hover:text-grayish-100'>{labels![1]}</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default Product