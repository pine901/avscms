import Bundle from '@/components/pricing-and-ordering/bundle';
import Product from '@/components/pricing-and-ordering/product';
import Head from 'next/head';
import products from '../../../store/data/products-and-services';
import { IPlan } from '../services/hosting';
import Link from 'next/link';
import { PAYPAL_STORE_LINK } from '@/constants';

interface IWallet {
    name: string;
    address: string;
}

const wallets: IWallet[] = [
    {
        name: "USDT (TRC20)",
        address: "TGeznWJ6u4aYEjtG1i7UhYAn7Sst9vvppy"
    },
    {
        name: "Etherium (ETH) ERC20",
        address: "0x48d531130a396234871ffeE15E8EdDEad8145dd0"
    },
    {
        name: "Bitcoin (BTC)",
        address: "3CXptGvYApphaE7TSkcRSd4Sy6UpK8kA1c"
    },
    {
        name: "BNB (BSC BEP20)",
        address: '0x48d531130a396234871ffeE15E8EdDEad8145dd0'
    }
]

const bundles: IPlan[] = [
    {
        name: 'Basic',
        price: 0,
        features: [
            '響應式模板'
        ]
    },
    {
        name: '全包',
        price: 390,
        features: [
            '終身免費更新',
            '響應式模板',
            '腳本安裝服務',
            '服務器設置服務',
            'Lighttpd 設置服務',
            '品牌免費選項',
            '視頻採集器插件',
            '質量嵌入器插件',
            '多服務器插件',
            '自動嵌入器插件',
            'CSV 嵌入導入器插件'
        ]
    }

]
const PricingAndOrdering = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 定價和訂購</title>
            </Head>
            <main className='page w-full flex flex-col items-center gap-5'>
                <h2 className='page-title pb-4'>定價和訂購</h2>
                <div className='w-full flex flex-col items-center rounded-lg bg-white  gap-5 p-5'>
                    <p className='lg:text-2xl md:text-xl text-lg text-grayish-100 text-center'>
                        如果您想使用 Paypal 購買，請使用我們的 Paypal 購物車
                    </p>
                    <Link href={PAYPAL_STORE_LINK}>
                        <button className='outlined-btn w-full sm:w-auto'>
                            貝寶購物車
                        </button>
                    </Link>
                </div>
                <div className='w-full flex flex-col items-center rounded-lg bg-white  gap-7 p-5'>
                    <div className='flex flex-col items-center gap-2'>
                        <p className='lg:text-2xl md:text-xl text-lg text-grayish-100 text-center'>如果您想使用加密貨幣訂購和支付</p>
                        <p className='text-grayish-200 md:text-lg sm:text-base text-sm text-center'>
                            請將適當的金額發送至以下錢包之一併聯繫我們
                        </p>
                    </div>
                    <ul className='flex flex-col xl:flex-row gap-4'>
                        <div className='flex flex-col gap-4'>
                            {
                                wallets.slice(0, 2).map((wallet, index) => (
                                    <li key={index} className='list-disc flex items-center text-grayish-100 font-light shrink-0 flex-wrap '>
                                        <span className='font-medium pr-1'>{wallet.name} </span> 錢包 : <span className='font-medium'>{wallet.address}</span>
                                    </li>
                                ))
                            }
                        </div>
                        <div className='flex flex-col gap-4'>
                            {
                                wallets.slice(2).map((wallet, index) => (
                                    <li key={index} className='list-disc flex items-center text-grayish-100 font-light shrink-0 flex-wrap'>
                                        <span className='font-medium pr-1'>{wallet.name} </span> 錢包 : <span className='font-medium'>{wallet.address}</span>
                                    </li>
                                ))
                            }
                        </div>
                    </ul>
                    <Link href={'/support/contact'}>

                        <button className='outlined-btn'>
                            聯繫我們
                        </button>
                    </Link>
                </div>
                <div className='w-full flex flex-col items-center rounded-lg bg-white  gap-5 p-7 rounded-tr-[3rem]'
                    style={{
                        background: "linear-gradient(298deg, #EE396B 0%, #EE396B 49%, #FF6590 100%)"
                    }}
                >

                    <h2 className='text-white lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg text-center  '>
                        2023 年春季促銷：所有商品 50% 折扣！
                    </h2>
                    <p className='md:text-xl sm:text-lg xs:text-base text-sm text-white opacity-70 text-center'>
                        請使用結帳頁面上的優惠券代碼。 優惠券代碼：SPRING23
                    </p>
                    <Link href={PAYPAL_STORE_LINK}>
                        <button className='rounded-full px-8 transition-colors hover:text-grayish-100 hover:border-grayish-100 border border-transparent py-3 bg-white uppercase text-grayish-200 sm:w-auto w-full'>
                            去貝寶商店
                        </button>
                    </Link>
                </div>
                <div className='bg-white w-full md:p-8 sm:p-6 p-4 rounded-lg flex flex-col items-center gap-7'>
                    <div className='flex flex-col items-center gap-3'>
                        <h2 className='text-grayish-100 md:text-3xl text-2xl'>捆綁</h2>
                        <p className='md:text-xl ms:text-base text-sm text-grayish-200 font-light text-center max-w-5xl'>
                            購買與一項或多項服務、插件和選項捆綁在一起的 AVS 腳本，與單獨訂購相比，可以獲得折扣價格。
                            折扣百分比適用於捆綁包中包含的所有產品和服務。
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-6 w-full xl:px-8 md:px-4 px-2'>
                        {
                            bundles.map((bundle, index) => (
                                <Bundle key={bundle.name} {...bundle} description={
                                    index === 0 ? 'Available as open source now' : 'instead of $780, 50% discount on everything'
                                } />
                            ))
                        }
                    </div>

                </div>
                <div className='bg-white w-full md:p-8 sm:p-6 p-4 rounded-lg flex flex-col items-center gap-10'>
                    <div className='flex flex-col items-center gap-3'>
                        <h2 className='text-grayish-100 lg:text-3xl sm:text-2xl text-xl'>
                            產品和服務
                        </h2>
                        <p className='lg:text-xl md:text-lg sm:text-base text-sm text-grayish-200 font-light text-center max-w-5xl'>
                            單獨購買 AVS 腳本、插件、服務、模板和選項。
                            可以同時將多個單獨的產品和服務添加到購物車中，但不會應用捆綁折扣。
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
                        {
                            products.map((product, index) => (
                                <Product key={index} {...product} />
                            ))
                        }
                    </div>

                </div>
            </main>
        </>
    )
}

export default PricingAndOrdering