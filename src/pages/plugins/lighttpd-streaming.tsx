import useMediaQuery from '@/hooks/useMediaQuery';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RxCross2 } from 'react-icons/rx';


interface IFeature {
    title: string,
    description: string
    icon: string;
}

export const features: IFeature[] = [
    {
        title: '尋找視頻中的任意位置',
        description: "搜索視頻中的任意位置，即使視頻尚未下載到該位置。 節省帶寬和時間，因為您不必等到視頻加載後才能跳到某個位置。",
        icon: 'search.svg'
    },
    {
        title: '防止視頻盜鏈/盜鏈',
        description: '防止帶寬盜竊。 flv 文件的 URL 根據密碼和時間戳動態加密，並且每隔幾分鐘更改一次。',
        icon: 'protect.svg'
    },
    {
        title: '限制帶寬使用（每個訪客）',
        description: '節省帶寬。 限制每個連接（訪客）的下載速度。 您可以為每個訪問者設置最大下載速度（帶寬限額），這樣您就可以防止高速連接佔用大量帶寬。 所有訪問者將平等分享您的帶寬。',
        icon: 'bandwidth.svg'
    }
]
const LighttpdStreaming = () => {
    const [showInfo, setShowInfo] = React.useState(true);
    const { isMobile, isTablet } = useMediaQuery();

    return (
        <>
            <Head>
                <title>AVSCMS | Lighttpd 流媒體</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-5 page'>
                <div className='space-y-2 text-center'>
                    <h2 className='page-title'>Lighttpd 流媒體</h2>
                    <p className='md:text-xl sm:text-base text-sm text-grayish-200 text-center font-normal max-w-4xl'>漸進式下載的專業視頻流替代方案。</p>
                </div>
                <div className='bg-white rounded-2xl  space-y-5 md:p-8 sm:p-6 p-4 w-full transition-all duration-200'>
                    <div className='flex flex-col gap-6'>
                        {
                            features.map((feature) => (
                                <div key={feature.title} className='flex items-start sm:items-center md:gap-5 sm:gap-3 gap-2'>
                                    <Image alt={feature.title} src={'/icons/' + feature.icon} width={isMobile ? 35 : isTablet ? 50 : 60} height={isMobile ? 35 : isTablet ? 50 : 60} />
                                    <div className='space-y-1'>
                                        <h3 className='font-medium md:text-2xl text-xl text-grayish-100/90'>{feature.title}</h3>
                                        <p className='text-grayish-200/90 md:text-lg sm:text-base text-sm max-w-5xl'>{feature.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {showInfo && <div className='rounded-lg w-full bg-grayish-400 p-4 flex justify-between gap-5'>
                        <div className='text-grayish-200 lg:text-xl md:text-lg sm:text-base text-xs'>
                            <span className='opacity-80'>Lighttpd 流選項是</span>
                            <span className='opacty-100 text-grayish-100'>免費包含在 AVS 腳本中， </span>
                            <span className='opacity-80'>和 </span>
                            <span className='opacty-100 text-grayish-100'>需要 Lighttp 服務器 </span>
                            <span className='opacity-80'>安裝並配置</span>
                        </div>
                        <RxCross2 size={isMobile ? 20 : isTablet ? 22 : 24} className='text-grayish-200 cursor-pointer hover:text-primary-100' onClick={() => setShowInfo(false)} />
                    </div>}
                    <div className='lg:text-2xl md:text-xl sm:text-base text-sm text-grayish-100/80'>
                        <span>we can provide</span>
                        <Link href={'/services/lighttpd-setup'}>
                            <span className='text-primary-100'> Lighttpd 設置 </span>
                        </Link>
                        <span>服務需額外付費。</span>
                    </div>

                </div>
            </main>
        </>
    )
}

export default LighttpdStreaming