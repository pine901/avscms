import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const CustomWork = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 定制設計和開發</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-8 page'>
                <h2 className='page-title'>定制設計和開發</h2>
                <div className='bg-white rounded-2xl space-y-5 p-8  w-full'>
                    <p className='text-grayish-100 lg:text-3xl md:text-2xl sm:text-xl text-lg sm:text-start text-center'>
                        <span className='opacity-80'>
                            我們可以提供各種設計功能定制添加
                            為您的項目開發。
                        </span>
                    </p>
                    <p className='text-grayish-200 lg:text-xl md:text-base sm:text-sm text-xs pb-6 sm:text-start text-center'>
                        如有任何疑問，請聯繫我們。
                    </p>
                    <Link href={'/support/contact'}>
                        <button className='outlined-btn uppercase w-full sm:w-fit'>
                            聯繫我們
                        </button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default CustomWork