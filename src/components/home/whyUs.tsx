import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react'

interface IReason {
    title: string;
    description: string;
    icon: string;
}

const reasons: IReason[] = [
    {
        title: '高清和移動視頻',
        description: '借助我們新的視頻轉碼引擎，上傳的視頻將轉換為多種分辨率和質量的網絡就緒和移動就緒格式，您可以在管理面板中設置和配置。',
        icon: 'hd.svg'
    },
    {
        title: '多服務器系統',
        description: '我們的多服務器系統為您的網站提供高可擴展性、可靠性和性能。 存儲和流式傳輸來自多個輔助服務器的視頻，平衡您的網站負載並優化流量。',
        icon: 'server.svg'
    },
    {
        title: '搜索引擎優化',
        description: '我們的腳本實現了先進的 SEO 技術，例如搜索引擎友好的 URL、乾淨有效的 HTML 代碼和組織良好的內容，以便在搜索引擎中更好地建立索引和排名。',
        icon: 'search-2.svg'
    },
    {
        title: '響應式模板',
        description: '允許訪問者通過適合任何屏幕的響應式界面瀏覽您的網站、觀看和上傳視頻或照片，從而在台式機、筆記本電腦、平板電腦和智能手機上提供完美的體驗。',
        icon: 'mobile.svg'
    },
    {
        title: "多語言系統",
        description: '我們的多語言系統使用語言文件，允許訪問者以他們選擇的語言使用網站。 您的願望現在可以真正反映互聯網的全球性。',
        icon: 'globe.svg'
    },
    {
        title: '完全可定制',
        description: '與其他公司不同，我們提供 100% 未加密的源代碼訪問，使您可以完全自定義網站的功能和佈局、添加或集成新功能',
        icon: 'custom.svg'
    }
]
const WhyUs = () => {
    const { isMobile, isTablet } = useMediaQuery();
    return (
        <div className='w-full main-padding flex flex-col items-center lg:gap-10 md:gap-8 sm:gap-6 gap-4'>
            <div className='flex flex-col items-center md:gap-3 gap-2'>
                <h3 className='text-grayish-100 lg:text-4xl md:text-3xl text-2xl capitalize'>為什麼選擇AVSCMS</h3>
                <p className='text-grayish-100/80 lg:text-xl md:text-lg sm:text-base text-sm text-center md:text-start'>AVSCMS 為您的白標 OTT 平台提供完整的端到端幫助和最佳解決方案。</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:gap-12 md:gap-10 sm:gap-8 gap-6'>
                {
                    reasons.map((reason) => (
                        <div key={reason.title} className='flex gap-3 w-full'>
                            <Image alt={reason.title} src={'/icons/' + reason.icon} width={isMobile ? 30 : isTablet ? 40 : 50} height={isMobile ? 30 : isTablet ? 40 : 50} className='h-fit' />
                            <div>
                                <h3 className='text-grayish-100 md:text-2xl text-xl capitalize'>{reason.title}</h3>
                                <p className='text-grayish-200/80 lg:text-lg md:text-base text-sm max-w-md'>{reason.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhyUs