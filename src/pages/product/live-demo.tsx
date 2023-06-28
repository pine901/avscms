import useMediaQuery from '@/hooks/useMediaQuery';
import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import { RxCross2 } from 'react-icons/rx';

const LiveDemo = () => {
    const [showDisclaimer, setShowDisclaimer] = React.useState(true);
    const { isMobile, isTablet } = useMediaQuery();
    return (
        <>
            <Head>
                <title>AVSCMS | 現場演示</title>
            </Head>
            <main className='page w-full flex flex-col items-center gap-5'>
                <h2 className='page-title'>現場演示和案例研究</h2>
                {showDisclaimer && <div className='w-full relative p-4 flex flex-col items-center gap-3 rounded-lg rounded-tr-[3rem]'
                    style={{
                        background: !isMobile ? "linear-gradient(298deg, #fbafc4 0%, #e8e8e8 50%, #f7bece 100%)" : 'white'
                    }}
                >
                    <h2 className='text-grayish-100 font-medium md:text-3xl text-2xl'>免責聲明</h2>
                    <p className='text-center text-grayish-200 md:text-base sm:text-sm text-xs'>
                        所有腳本和模塊均未預加載任何成人內容！ 我們獨家銷售軟件，而不是色情內容。 現場演示中的所有視頻、照片和遊戲均由訪客上傳，不包含在您購買的腳本中。
                    </p>
                    <RxCross2 className='absolute top-5 right-7 text-grayish-100 cursor-pointer hover:text-grayish-200' size={24} onClick={() => setShowDisclaimer(false)} />
                </div>}
                <div className='grid grid-cols-1  md:grid-cols-2 gap-4 w-full'>
                    {/* <div className='flex flex-col gap-4 w-full '> */}
                    <div className='rounded-xl bg-white w-full p-5 flex flex-col items-center gap-3'>
                        <h2 className='md:text-4xl sm:text-3xl text-2xl text-center capitalize font-light'>
                            <span className='font-medium'>公開</span> 演示
                        </h2>
                        <p className='text-center text-grayish-200 md:text-base sm:text-sm text-xs'>公共界面使您能夠從訪問者的角度查看網站。</p>
                        <p className='text-center text-grayish-200 md:text-base sm:text-sm text-xs'>
                            <span className='font-medium text-grayish-100'>警告！ 露骨的色情內容。 </span>
                            請在瀏覽器中輸入以下網址：
                        </p>
                        <Link href={'https://demo.avscms.com'}>
                            <div className='flex flex-col items-center'>
                                <h3 className='text-primary-100 text-4xl'>demo.avscms.com</h3>
                                <p className='text-grayish-200'>小縮略圖（演示/演示）</p>
                            </div>
                        </Link>
                    </div>
                    <div className='rounded-xl bg-white w-full p-5 flex flex-col items-center gap-5'>
                        <h2 className='text-grayish-100 md:text-4xl sm:text-3xl text-2xl text-center font-light'>
                            AVS <span className='font-medium'>成人</span> 演示
                        </h2>
                        <div className='flex flex-col items-center gap-1'>
                            <p className='text-grayish-200 text-center md:text-base sm:text-sm text-xs'>試用 AVS 的非成人版本。</p>
                            <p className='text-grayish-200 text-center md:text-base sm:text-sm text-xs'>用戶：demo / 密碼：demo</p>
                        </div>
                        <Link href={'https://demo-n.avscms.com'} target='_blank' rel='noreferrer'>
                            <button className='uppercase outlined-btn w-full sm:w-fit'>
                                demo-n.avscms.com
                            </button>
                        </Link>
                    </div>
                    {/* </div> */}
                    {/* <div className='flex flex-col gap-4 w-full '> */}
                    <div className='rounded-xl bg-white w-full p-5 flex flex-col items-center gap-12 pb-9'>
                        <div className='flex flex-col items-center gap-3'>
                            <h2 className='md:text-4xl sm:text-3xl text-2xl text-center capitalize font-light'>
                                <span className='font-medium'>管理面板</span> 演示
                            </h2>
                            <p className='text-center text-grayish-200 md:text-base sm:text-sm text-xs'>
                                這演示了管理員控制面板。 作為管理員，您將使用此區域來配置和管理網站的幾乎每個方面。
                            </p>
                        </div>
                        <Link href={'/support/contact'}>
                            <button className='black-btn w-full sm:w-fit'>
                                請求演示
                            </button>

                        </Link>
                        <p className='text-center text-grayish-200 md:text-base sm:text-sm text-xs'>
                            請注意，管理面板的功能可能會受到其他用戶測試和使用設置的影響。
                        </p>
                    </div>
                    <div className='rounded-xl bg-white w-full p-5 flex flex-col items-center gap-5'>
                        <h2 className='text-grayish-100 md:text-4xl sm:text-3xl text-2xl text-center font-light'>
                            響應式模板測試
                        </h2>
                        <p className='text-grayish-200 text-center md:text-base sm:text-sm text-xs'>
                            了解我們的新響應式模板如何在不同設備（包括手機和平板電腦）上完美適應和顯示。
                        </p>
                        <Link href={'https://clipsharelive.com'} target='_blank' rel='noreferrer'>
                            <button className='uppercase outlined-btn w-full sm:w-fit'>
                                現在就試試
                            </button>
                        </Link>
                    </div>
                    {/* </div> */}
                </div>
            </main >
        </>
    )
}

export default LiveDemo