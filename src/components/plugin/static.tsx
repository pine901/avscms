import React from 'react'
import { RxCross2 } from 'react-icons/rx';

const PluginStaticPart = () => {
    const [showAd, setShowAd] = React.useState(true);

    return (
        <>
            {showAd && <div className='rounded-lg text-white  md:text-xl sm:text-lg text-base sm:p-5 p-3 flex w-full items-center justify-between bg-dark-primary'>
                <p className='space-x-2'>
                    <span>壽命</span>
                    <span className='opacity-80'>免費更新</span>
                    <span>包括</span>
                </p>
                <RxCross2 size={24} onClick={() => setShowAd(false)} className='hover:text-primary-100 cursor-pointer' />
            </div>}
            <div className='w-full rounded-[10px] bg-grayish-400 text-grayish-100 space-y-2 md:p-6 p-4'>
                <p className='opacity-90 sm:text-base text-sm'>
                    請注意，我們不保證視頻採集器 100% 永久發揮功能。 我們用來抓取內容的第三方網站可能隨時改變其結構，這將導致我們的抓取工具停止工作。 一旦由於第三方網站修改而導致抓取器停止工作，我們將重新研究下載方法並儘快更新抓取器代碼以便再次工作。 請不斷升級您的視頻採集器插件，從您的客戶區下載最新版本。
                </p>
                <p className='font-medium sm:text-base text-sm'>
                    請僅在同意上述內容的情況下購買。 如果抓取器停止工作，我們不承擔任何責任，因為它依賴於第三方網站，該網站可能隨時發生變化，但我們將盡力立即修復它。
                </p>
            </div>
        </>
    )
}

export default PluginStaticPart