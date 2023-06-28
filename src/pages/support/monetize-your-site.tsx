import Head from 'next/head'
import React from 'react'

interface IAdNetwork {
    name: string;
    description: string;
}

const adNetworks: IAdNetwork[] = [
    {
        name: "PopAds",
        description: "PopAds 是專門提供互聯網上彈出廣告的付費最好的廣告網絡。"
    },
    {
        name: "ExoClick",
        description: "ExoClick 是一家總部位於巴塞羅那的公司，成立於 2006 年，是全球第四大廣告網絡。"
    }
]


const AdNetwork = ({ name, description }: IAdNetwork) => {
    return (
        <div className='rounded-2xl border md:p-6 p-4 md:space-y-4 space-y-2 flex flex-col items-center md:items-start'>
            <h2 className='md:text-4xl text-3xl font-medium text-grayish-100'>{name}</h2>
            <p className='md:text-xl text-lg text-grayish-200'>廣告網絡</p>
            <p className='text-grayish-200 pb-4 text-center md:text-start'>{description}</p>
            <button className='outlined-btn uppercase'>
                報名
            </button>
        </div>
    )
}
const MonetizeYourSite = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 通過您的網站獲利</title>
            </Head>
            <main className='w-full flex flex-col items-center md:gap-8 sm:gap-6 gap-4 page'>
                <div className='md:space-y-2 space-y-1 text-center '>
                    <h2 className='page-title'>通過您的 Tube 網站獲利</h2>
                    <p className='lg:text-xl md:text-lg sm:text-base text-sm text-grayish-200 text-center font-normal max-w-4xl'>
                        <span className='opacity-70'>成人 </span>
                        <span className='opacity-100'>廣告網絡 </span>
                        <span className='opacity-70'>和 </span>
                        <span className='opacity-100'>附屬機構 </span>
                        <span className='opacity-70'>程式 </span>
                    </p>
                </div>
                <div className='bg-white rounded-2xl flex md:flex-row flex-col gap-5 md:py-6 py-4 lg:px-12 md:px-10 sm:px-8 xs:px-6 px-4 w-full'>
                    {
                        adNetworks.map((adNetwork) => (
                            <AdNetwork key={adNetwork.name} {...adNetwork} />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default MonetizeYourSite