import PluginAction from '@/components/plugin/action';
import PluginStaticPart from '@/components/plugin/static';
import Head from 'next/head';

const MassVideoEmbedder = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 海量視頻嵌入器插件</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-8 page'>
                <div className='sm:space-y-2 space-y-1 text-center'>
                    <h2 className='page-title'>海量視頻嵌入器插件</h2>
                    <p className='md:text-xl sm:text-base text-sm text-grayish-200 text-center font-normal max-w-4xl'>
                        通過輕鬆地批量嵌入來自其他成人和非成人視頻網站的視頻，只需幾分鐘即可填充您的網站。
                    </p>
                </div>
                <div className='rounded-2xl w-full bg-white md:p-8 sm:p-6 p-4 flex flex-col gap-8'>
                    <p className='text-grayish-200 lg:text-xl md:text-lg sm:text-base text-sm max-w-6xl pb-7'>
                        該插件擴展了標準 AVS 功能，可以在幾分鐘內向您的網站填充數百甚至數千個嵌入視頻。
                        它會自動嵌入在給定頁面（搜索結果頁面、視頻瀏覽頁面等）上找到的所有視頻，以及原始標題、
                        標籤、縮略圖、時長等嵌入其他網站的視頻，而不是在本地上傳和存儲視頻將節省 為您提供大量的服務器帶寬和空間，使您可以大大降低服務器/託管成本。
                    </p>
                    <div className='w-full flex items-center gap-6 justify-between flex-col md:flex-row'>
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
                                "vimeo.com (非成人; 也提取視頻描述)"
                            ]}
                            icon='paused.svg'
                            title="批量嵌入視頻"
                        />
                        <PluginAction
                            items={[
                                "嵌入視頻，在源網站視頻播放器中",
                                "標題",
                                "描述",
                                "標籤",
                                "期間",
                                "縮略圖"
                            ]}
                            title='自動拉動' icon='chip.svg' />
                    </div>
                    <PluginStaticPart />
                </div>
            </main>
        </>
    )
}

export default MassVideoEmbedder;