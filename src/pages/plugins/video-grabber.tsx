import PluginAction from '@/components/plugin/action';
import PluginStaticPart from '@/components/plugin/static';
import Head from 'next/head';

const VideoGrabber = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 視頻採集器插件</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-8 page'>
                <div className='sm:space-y-2 space-y-1 text-center'>
                    <h2 className='page-title'>視頻採集器插件</h2>
                    <p className='md:text-xl sm:text-base text-sm text-grayish-200 text-center font-normal max-w-4xl'>
                        輕鬆從其他視頻共享網站導入視頻。
                    </p>
                </div>
                <div className='rounded-2xl w-full bg-white md:p-8 sm:p-6 p-4 flex flex-col md:gap-6 gap-4'>
                    <p className='text-grayish-200 lg:text-xl md:text-lg sm:text-base text-sm max-w-5xl'>
                        該插件通過新的上傳替代方案（僅適用於網站管理員）擴展了 AVS 功能：只需輸入視頻 URL，即可從其他視頻網站自動導入視頻及其標題、描述、標籤、持續時間和縮略圖。
                    </p>
                    <p className='text-grayish-100 font-medium md:text-xl sm:text-lg text-base max-w-5xl'>
                        您現在還可以選擇多個視頻版本/分辨率（高清、標清、移動等）（如果有）。
                    </p>
                    <div className='w-full flex gap-6 justify-between flex-col md:flex-row'>
                        <PluginAction
                            items={[
                                "Analdin (新的)",
                                "BoysFood (新的)",
                                "Empflix (新的)",
                                "ExtremeTube",
                                "GayTube (新的)",
                                "MovieFap (新的)",
                                "MyLust (新的)",
                                "PornFun (新的)",
                                "PornHub",
                                "RealGFPorn (新的)",
                                "RedTube",
                                "SlutLoad",
                                "SpankWire",
                                "TnAflix (新的)",
                                "Tube8",
                                "VPorn (新的)",
                                "XHamster",
                                "XTube",
                                "XVideos",
                                "YouPorn",
                                "Youtube",
                                "Vimeo",
                                "DailyMotion"
                            ]
                            }
                            icon='video.svg'
                            title="導入視頻來自"
                        />
                        <PluginAction items={[
                            "視頻文件（高清、標清、移動等）",
                            "標題",
                            "描述",
                            "標籤",
                            "期間",
                            "縮略圖"
                        ]} title='自動抓取' icon='grab.svg' />
                    </div>
                    <PluginStaticPart />
                </div>
            </main>
        </>
    )
}

export default VideoGrabber