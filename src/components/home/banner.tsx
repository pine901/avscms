import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeBanner = () => {
    /*
md:bg-[url(/images/home-banner.png)] bg-[url(/images/home-banner-mobile.png)] bg-white
    */
    return (
        <div className='md:h-[80vh] h-screen  w-full bg-cover  bg-no-repeat bg-center xl:px-[12%] lg:px-[10%]  md:px-[7%] sm:px-[5%] px-[3%]  md:bg-[url(/images/home-banner.png)] bg-[url(/images/home-banner-mobile.png)] bg-white
        pt-[10vh]'
        // style={{
        //     backgroundImage: 'url(/images/home-banner.png)'
        // }}
        >
            <div className='h-full lg:w-1/2  flex flex-col justify-center items-center md:items-start gap-8'>
                <div className='space-y-3'>
                    <h1 className='font-semibold xl:text-5xl lg:text-4xl md:text-3xl   md:leading-[66px] text-2xl text-white text-center md:text-start'>
                        創建高利潤的成人管網站。
                    </h1>
                    <p className='font-extralight text-white lg:text-2xl md:text-xl sm:text-base text-sm opacity-70 text-center md:text-start'>全新 AVS 8.1 現已推出</p>
                    <div className='text-white lg:text-xl md:text-lg sm:text-base text-sm pb-6  text-center md:text-start'>
                        <p className='md:text-start text-center '>具有完全重新設計的響應式模板和</p>
                        <p className='text-primary-100'>VAST/VPAID 視頻廣告</p>
                    </div>
                    <div className='flex items-center justify-center md:justify-start gap-5'>
                        <Link href={'/download'}>
                            <button className='filled-btn'>
                                下載
                            </button>
                        </Link>
                        <Link href={'/product/pricing-and-ordering'}>
                            <button className='black-btn border-white text-white w-fit sm:w-auto'>
                                現在下單
                            </button>
                        </Link>
                    </div>
                </div>
                <p className='lg:text-xl md:text-lg sm:text-base text-sm text-grayish-200'>最新版本: V8.2 (2023-2-22)</p>
                <Image src={'/images/banner-images.png'} alt='overview' width={400} height={400} className='md:hidden' />
            </div>

        </div>
    )
}

export default HomeBanner