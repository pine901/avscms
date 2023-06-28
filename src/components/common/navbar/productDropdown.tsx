import React, { useState } from 'react'
import links from '../../../../store/data/links';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import Link from 'next/link';

const ProductDropdown = () => {
    const [showPlugins, setShowPlugins] = useState(false);
    return (
        <div className='absolute  flex  top-8 -left-1/2 bg-gray-50 z-50 rounded-lg shadow-xl  w-auto pt-4'>
            <div className='flex flex-col w-56 font-medium'>
                {
                    links[1].subLinks?.map((link) => (
                        <>
                            {
                                !link.hasDropdown ?
                                    <Link key={link.label} href={link.href!}>
                                        <p className='lg:text-base text-sm text-grayish-100 capitalize py-2  px-4 hover:text-primary-100'>
                                            {link.label}
                                        </p>
                                    </Link>
                                    :
                                    <div
                                        onClick={() => setShowPlugins(!showPlugins)}
                                        role='button' key={link.label} className={`flex items-center w-full justify-between pb-4 pt-2 text-grayish-100 hover:text-primary-100 hover:bg-grayish-400 px-4 ${showPlugins && 'bg-grayish-400'}`}>
                                        <p className='lg:text-base text-sm capitalize hover:text-primary-100'>
                                            {link.label}
                                        </p>
                                        {showPlugins ? <BsChevronLeft /> : <BsChevronRight className='' />}
                                    </div>
                            }
                        </>
                    ))
                }
            </div>
            {
                showPlugins && (
                    <div className='px-2 w-max bg-grayish-400 py-4 flex flex-col gap-2'>
                        {
                            links![1].subLinks![7].subLinks?.map((link) => (
                                <Link key={link.label} href={link.href!}>
                                    <p className='text-grayish-200 hover:text-grayish-100 hover:bg-[#EDEDED] px-2 py-1 rounded-sm '>{link.label}</p>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default ProductDropdown