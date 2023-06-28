import React, { useState } from 'react'
import { ILink } from '.'
import { BsChevronRight, BsChevronUp } from 'react-icons/bs'
import Link from 'next/link'

const MobileSubLink = ({ label, subLinks }: ILink) => {
    const [showSublinks, setShowsublinks] = useState(false)
    return (
        <div className='w-full transition-all duration-200'>
            <div role='button' onClick={() => setShowsublinks(!showSublinks)}
                className='w-full flex justify-between items-center'>
                <p className='text-sm text-grayish-100' >{label}</p>
                {showSublinks?<BsChevronUp size={12}/>:<BsChevronRight size={12} />}
            </div>
            {
                showSublinks && (
                    <div className='flex flex-col gap-2 p-2 transition-all duration-200'>
                        {
                            subLinks?.map((sub) => (
                                <Link href={sub.href!} key={sub.label}>
                                    <p className='text-grayish-200 text-xs hover:text-grayish-100'>{sub.label}</p>
                                </Link>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default MobileSubLink