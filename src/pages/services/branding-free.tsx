import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'

const BrandingFree = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 製作無品牌產品</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-5 page'>
                <div className='space-y-2 text-center'>
                    <h2 className='page-title'>無品牌</h2>
                    <p className='lg:text-xl md:text-lg sm:text-base text-sm text-grayish-200 text-center font-normal max-w-4xl'>
                        <span className='opacity-70'>為了 </span>
                        <span className='opacity-100'>僅有的 $39 </span>
                        <span className='opacity-70'>你可以刪除</span>
                        <span className='opacity-100'>任何視覺參考</span>
                        <span className='opacity-70'> 我們公司的信息，包括腳本所有頁面上的“技術支持”鏈接。</span>
                    </p>
                </div>
                <div className='bg-white rounded-2xl  md:space-y-7 space-y-5 md:p-8 sm:p-6 p-4 w-full'>

                    <div className='w-full bg-[#1F1F27] p-4 rounded-lg'>
                        <p className='text-white lg:text-xl md:text-lg sm:text-base text-sm'>
                            <span className='opacity-80'>
                                您可以更換徽標、網站標題和網站版權，而無需購買“免費品牌”選項。
                            </span>

                        </p>
                    </div>
                    <div className='w-full bg-grayish-400 p-4 rounded-lg'>
                        <p className='text-grayish-100 lg:text-xl md:text-lg sm:text-base text-sm'>
                            不允許您從 php 文件的標頭中刪除版權和引用。 最終用戶看不到這些引用
                        </p>
                    </div>
                    <Link href={'/product/pricing-and-ordering'}>
                        <button className='outlined-btn flex items-center gap-2 uppercase w-full sm:w-auto justify-center'>
                            <BsFillCartFill size={20} />
                            <span>購買</span>
                        </button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default BrandingFree