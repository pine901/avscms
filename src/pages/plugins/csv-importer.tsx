import useMediaQuery from '@/hooks/useMediaQuery';
import Head from 'next/head';
import { AiFillCheckCircle } from 'react-icons/ai';

const features = [
    'Mass Import Videos from any sponsor (affiliate) thats  supports CSV export',
    'Import videos from an uploaded CSV file, or an URL to a CSV file',
    'Configurable CSV fields structure (format)',
    'CSV fields structure can be saved as Format profiles for easier later use',
    'Configurable number of thumbnail images to be imported (max thumbs)',
    'Importing in progress can be discarded or resumed',
    'Importing progress bar',
    'Option to prevent duplicate videos to be imported',
    'Assign imported videos to a specific user',
    'Auto-detect or select category'
]

const CVSImporter = () => {
    const { isMobile, isTablet } = useMediaQuery();
    return (
        <>
            <Head>
                <title>
                    AVSCMS | CSV 導入器插件
                </title>
            </Head>
            <main className='w-full flex flex-col items-center gap-8 page'>
                <div className='space-y-4 text-center flex flex-col items-center'>
                    <h2 className='page-title'>CSV 導入器</h2>
                    <p className='text-grayish-200 text-center max-w-6xl md:text-xl sm:text-base text-sm font-light'>
                        我們易於使用的插件可讓您通過從 CSV 文件批量導入嵌入視頻，在幾秒鐘內填充您的 YouTube 網站。
                    </p>
                </div>
                <div className='rounded-2xl w-full bg-white md:p-8 sm:p-6 p-4 flex flex-col md:gap-8 sm:gap-6 gap-4'>
                    <h2 className='text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl text-grayish-100 font-medium'>主要特徵</h2>
                    <div className='flex w-full flex-col md:flex-row gap-5'>
                        <div className='space-y-4'>
                            {
                                features.slice(0, 5).map(feat => (
                                    <div key={feat} className='flex gap-2 '>
                                        <AiFillCheckCircle className='text-green-500 shrink-0' size={isMobile ? 20 : isTablet ? 23 : 26} />
                                        <p className='text-grayish-100 lg:text-xl md:text-base text-sm  font-light'>{feat}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='space-y-4'>
                            {
                                features.slice(5).map(feat => (
                                    <div key={feat} className='flex gap-2 '>
                                        <AiFillCheckCircle className='text-green-500 shrink-0' size={isMobile ? 20 : isTablet ? 23 : 26} />
                                        <p className='text-grayish-100 lg:text-xl md:text-base text-sm  font-light'>{feat}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='bg-grayish-400 w-full p-5 text-grayish-100/80 lg:text-xl md:text-lg sm:text-base text-xs font-medium rounded-xl'>
                        僅兼容 AVS 4.0+
                    </div>
                </div>
            </main>
        </>
    )
}

export default CVSImporter;