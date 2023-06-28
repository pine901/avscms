import Head from 'next/head'
import React from 'react'
import features from '../../../store/data/features'
import HightlightFeature from '@/components/highlights/feature'
import Link from 'next/link'

const Highlights = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 強調</title>
            </Head>
            <main className='page w-full flex flex-col items-center gap-5'>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='page-title'>強調</h2>
                    <p className='text-grayish-200 xl:text-xl md:text-lg sm:text-base  text-sm  text-center font-light'>
                        使用我們靈活、強大且可靠的視頻/照片庫共享和託管平台，您現在可以輕鬆創建高利潤的成人視頻網站。
                    </p>
                    <div className='flex flex-col sm:flex-row items-center gap-4'>
                        <Link href={'#latest-version-key-features'}>
                            <button className='outlined-btn'>
                                最新版本主要特點
                            </button>
                        </Link>
                        <Link
                            href={'#core-key-features'}>
                            <button className='black-btn'>
                                核心關鍵特性
                            </button>
                        </Link>
                    </div>
                </div>
                <div id='latest-version-key-features' className='w-full rounded-lg lg:p-6 md:p-4 p-2 flex flex-col lg:gap-10 md:gap-8 sm:gap-6 gap-4 items-center bg-white'>
                    <h2 className='page-title xl:text-4xl lg:text-3xl md:text-2xl text-xl'>最新版本 主要功能</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            features.slice(0, 6).map((feature, index) => (
                                <HightlightFeature key={feature.title} {...feature} index={index} />
                            ))
                        }
                    </div>
                </div>
                <div id='core-key-features' className='w-full rounded-lg lg:p-6 md:p-4 p-2 flex flex-col lg:gap-10 md:gap-8 sm:gap-6 gap-4 items-center bg-white'>
                    <h2 className='page-title xl:text-4xl lg:text-3xl md:text-2xl text-xl'>核心關鍵特性</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {
                            features.slice(6).map((feature, index) => (
                                <HightlightFeature key={feature.title} {...feature} index={index + 6} />
                            ))
                        }
                    </div>
                </div>

            </main>
        </>
    )
}

export default Highlights