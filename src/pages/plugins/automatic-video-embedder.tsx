import PluginAction from '@/components/plugin/action';
import PluginStaticPart from '@/components/plugin/static';
import Head from 'next/head';
import { AiFillCheckCircle } from 'react-icons/ai';

const features = [
    '每 1、3、6、12、24 小時、每天或每周自動檢查和嵌入新視頻',
    '使用 CRON 作業自動運行',
    '您可以選擇類別，也可以自動檢測',
    '詳細統計（添加的視頻總數、上次運行添加的視頻數量等）'
]

const AutomaticVideoEmbedder = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 自動視頻嵌入器插件</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-8 page'>
                <div className='space-y-4 text-center flex flex-col items-center'>
                    <h2 className='page-title'>自動視頻嵌入器插件</h2>
                    <p className='lg:text-xl md:text-lg text-base text-grayish-200 text-center font-normal max-w-4xl'>
                        <span className='text-grayish-100'>使用 CRON 作業，以自動駕駛模式填充您的 Tube 網站，並提供最新的嵌入式視頻</span></p>
                    <p className='text-grayish-200/80 text-center max-w-6xl lg:text-xl md:text-base text-sm font-light'>
                        該插件會定期自動嵌入在給定頁面（搜索結果頁面、視頻瀏覽頁面等）上找到的所有新視頻，以及原始標題、標籤、縮略圖、
                        時長等嵌入其他網站的視頻，而不是上傳和存儲 本地視頻將為您節省大量的服務器帶寬和空間，使您可以大大降低服務器/託管成本。
                    </p>
                </div>
                <div className='rounded-2xl w-full bg-white md:p-8 sm:p-6 p-4 flex flex-col md:gap-8 sm:gap-6 gap-4'>
                    <h2 className='text-center lg:text-4xl sm:text-3xl text-2xl text-grayish-100 font-medium'>主要特徵</h2>
                    <div className='flex w-full flex-col md:flex-row gap-5'>
                        <div className='space-y-4'>
                            {
                                features.slice(0, 2).map(feat => (
                                    <div key={feat} className='flex gap-2 '>
                                        <AiFillCheckCircle className='text-green-500 shrink-0' size={26} />
                                        <p className='text-grayish-100 lg:text-xl md:text-lg text-base font-light'>{feat}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='space-y-4'>
                            {
                                features.slice(2).map(feat => (
                                    <div key={feat} className='flex gap-2'>
                                        <AiFillCheckCircle className='text-green-500 shrink-0' size={26} />
                                        <p className='text-grayish-100 lg:text-xl md:text-lg text-base font-light'>{feat}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full flex gap-6 justify-between flex-col md:flex-row'>
                        <PluginAction
                            items={[
                                "boafoda.com (新的)",
                                "empflix.com",
                                "gaytube.com",
                                "pornhub.com",
                                "pornodoido.com (新的)",
                                "pornrabbit.com",
                                "redtube.com",
                                "tnaflix.com",
                                "xvideos.com",
                                "youporn.com",
                                "youtube.com (非成人; 也提取視頻描述)",
                                "vimeo.com (非成人; 也提取視頻描述)",
                                "dailymotion.com (非成人; 也提取視頻描述)"
                            ]}
                            icon='paused.svg'
                            title="批量嵌入視頻"
                        />
                        <PluginAction title='自動拉動' icon='chip.svg' items={[
                            "嵌入視頻，在源網站視頻播放器中",
                            "標題",
                            "描述",
                            "標籤",
                            "期間",
                            "縮略圖"
                        ]} />
                    </div>
                    <PluginStaticPart />
                </div>
            </main>
        </>
    )
}

export default AutomaticVideoEmbedder;