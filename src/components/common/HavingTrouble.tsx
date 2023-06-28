import Link from 'next/link'
import React from 'react'

const HavingTrouble = () => {
    return (
        <div className='w-full bg-white rounded-2xl py-6 flex flex-col items-center sm:gap-6 gap-3'>
            <h2 className='text-grayish-100 sm:text-[40px] text-2xl font-medium'>遇到麻煩？</h2>
            <div className='text-center text-grayish-100/80 sm:text-xl text-sm'>
                <p>我們可以在您的服務器上安裝這些要求</p>
                <p> 或者我們可以在我們的服務器上託管您的網站。</p>
            </div>
            <div className='flex flex-col sm:flex-row sm:gap-6 gap-3 items-center'>
                <Link href={'/services/server-setup'}>
                    <button className='outlined-btn w-full'>
                    服務器設置服務
                    </button>
                </Link>
                <Link href={'/services/hosting'}>
                    <button className='black-btn'>
                    託管套餐
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HavingTrouble