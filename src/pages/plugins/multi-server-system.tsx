import useMediaQuery from '@/hooks/useMediaQuery'
import Head from 'next/head'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const features = [
    '通過在多個服務器之間分配帶寬使用來優化網絡負載',
    '從無限數量的服務器、VPS 和/或託管帳戶存儲和流式傳輸視頻',
    '視頻僅在主服務器上轉換。 輔助服務器僅用於存儲和流媒體',
    '視頻被移動（通過 FTP）並基於隊列（通過輪換）存儲在輔助服務器上',
    '輔助服務器不需要安裝轉換模塊，只需安裝 FTP 和 Web 服務器',
]

const MultiServerSystem = () => {
    const { isMobile, isTablet } = useMediaQuery();
    return (
        <>
            <Head>
                <title>AVSCMS | 多服務器系統插件</title>
            </Head>
            <main className='page w-full flex flex-col items-center gap-5'>
                <h2 className='page-title'>多服務器系統</h2>
                <div className='rounded-lg bg-white p-5 flex flex-col gap-5 w-full'>
                    <h3 className='lg:text-2xl sm:text-xl text-lg text-grayish-100 font-light'>
                        我們的多服務器架構為您提供高可擴展性、可靠性和性能。
                    </h3>
                    <p className='text-grayish-200 md:text-xl sm:text-base text-sm max-w-6xl'>
                        從無限數量的輔助服務器存儲和流式傳輸視頻，平衡您的網站負載並優化流量
                    </p>
                    <div className='flex flex-col gap-2'>
                        {
                            features.map((feature, index) => (
                                <li key={index} className='flex items-center gap-2'>
                                    <AiFillCheckCircle className='text-green-500 shrink-0' size={isMobile ? 20 : isTablet ? 22 : 24} />
                                    <p className='text-grayish-100 md:text-lg sm:text-base text-sm'>{feature}</p>
                                </li>
                            ))
                        }
                    </div>
                    <div className='text-grayish-100 font-light p-4 rounded-lg bg-grayish-400'>
                        與移動、視頻採集器、海量視頻嵌入器和lighttpd流模塊兼容。
                    </div>
                </div>
            </main>
        </>
    )
}

export default MultiServerSystem