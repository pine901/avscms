import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'


const templates = [
    'Responsive (Bootstrap 4)',
    'CSS 3',
    'HTML 5',
    'Smarty Engine',
    '16+ Color Schemes'
]
const Templates = () => {
    const [activeTab, setActiveTab] = React.useState<'free' | 'premium'>('free');
    return (
        <>
            <Head>
                <title>AVSCMS | 模板和主題</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-7 page'>
                <div className='space-y-3 text-center'>
                    <h2 className='page-title'>模板/主題</h2>
                    <p className='sm:text-xl text-sm text-grayish-200 text-center font-normal max-w-4xl'>
                        <span className='opacity-70'>我們提供廣泛的 </span>
                        <span className='opacity-100 text-grayish-100'>自由的 </span>
                        <span className='opacity-70'>和 </span>
                        <span className='opacity-100 text-grayish-100'>優質的 </span>
                        <span className='opacity-70'>具有多種 AVS 配色方案的模板，以乾淨的方式編碼 </span>
                        <span className='opacity-100 text-grayish-100'>HTML5 </span>
                        <span className='opacity-70'>和 </span>
                        <span className='opacity-100 text-grayish-100'>CSS3</span>
                    </p>
                </div>
                <div className='rounded-2xl bg-white md:p-8 sm:p-5 p-3 flex flex-col items-center space-y-6  w-full'>
                    <div className='flex bg-grayish-400 h-12 md:rounded-lg rounded-full  sm:text-base text-sm'>
                        <button
                            onClick={() => setActiveTab('free')}
                            className={`${activeTab === 'free' ? 'filled-btn' : 'bg-transparent text-grayish-200 px-3'} md:rounded-lg rounded-full transition-all duration-100 `}>
                            免費模板
                        </button>
                        <button
                            onClick={() => setActiveTab('premium')}
                            className={`${activeTab === 'premium' ? 'filled-btn' : 'bg-transparent text-grayish-200 px-3'} md:rounded-lg rounded-full transition-all duration-100 `}>
                            高級模板
                        </button>
                    </div>
                    <>
                        {
                            activeTab === 'free' ? (
                                <div className='flex w-full min-h-[20vh] md:gap-12 sm:gap-8 gap-4 justify-between md:items-start xl:items-center items-center xl:flex-row flex-col'>
                                    <Image alt='Template' src={'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'}
                                        width={600}
                                        height={600}
                                        className='rounded-2xl bg-grayish-400'
                                    />
                                    <div className='space-y-4'>
                                        <div className='space-y-2'>
                                            <h3 className='text-grayish-100 lg:text-3xl md:text-2xl sm:text-xl text-lg font-medium'>免費模板</h3>
                                            <p className='text-grayish-200 md:text-base sm:text-sm text-xs'>
                                                響應式模板，包含在 AVS 腳本中，有多種配色方案可供選擇。
                                            </p>
                                        </div>
                                        <div className='space-y-2 pb-6'>
                                            {
                                                templates.map((template) => (
                                                    <div key={template} className='flex gap-2'>
                                                        <AiFillCheckCircle className='text-green-500' size={24} />
                                                        <p className='md:text-xl sm:text-base text-sm text-grayish-100/80 '>{template}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <Link href={'/product/live-demo'}>
                                            <button className='outlined-btn uppercase w-full sm:w-fit text-sm sm:text-base'>
                                                現場演示
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ) :
                                (
                                    <div className='w-full min-h-[40vh] text-center py-5 text-2xl text-grayish-100/90'>
                                        即將推出...
                                    </div>
                                )
                        }

                    </>

                </div>
            </main>
        </>
    )
}

export default Templates