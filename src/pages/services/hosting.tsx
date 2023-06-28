import Feature from '@/components/hosting/feature';
import Plan from '@/components/hosting/plan';
import useMediaQuery from '@/hooks/useMediaQuery';
import Head from 'next/head'
import Link from 'next/link';
import React from 'react'
import { AiFillCheckCircle, AiFillGift } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export interface IPlan {
    name: string;
    price: number;
    features: string[];
}

const plans: IPlan[] = [

    {
        name: '業務不限',
        price: 7.95,
        features: [
            '無限存儲空間',
            '無限帶寬',
            '無限域名',
            '終身免費域名',
            '沒有設置。 即時激活',
            '專用IP地址'
        ]
    },
    {
        name: 'Premium unlimited',
        price: 15.95,
        features: [
            '無限存儲空間',
            '無限帶寬',
            '無限域名',
            '終身免費域名',
            '沒有設置。 即時激活',
            '專用IP地址',
            '私有 SSL 證書（用於 HTTPS）',
            '高級備份服務'
        ]
    }
]

interface IText {
    text: string;
    bold?: boolean;
    underlined?: boolean;
}

export interface IFeature {
    texts: IText[];
}

const features: IFeature[] = [
    {
        texts: [
            { text: '安裝了所有 AdultVideoScript 要求。' },
            { text: '保證兼容性', bold: true },
            { text: '由我們的託管合作夥伴提供。' }
        ]
    },
    {
        texts: [
            { text: '低價' },
            { text: ' 無限空間和無限帶寬 ', underlined: true },
            { text: ' 非常適合管 1 視頻 1 畫廊網站', bold: true }
        ]
    },
    {
        texts: [
            { text: '24/7 支持', bold: true },
            { text: '通過實時聊天' },
            { text: '99.5% 正常運行時間', bold: true },
            { text: '保證.' },
            { text: '30 天退款', bold: true },
            { text: '保證.' }
        ]
    }
]

const Hosting = () => {
    const { isMobile, isTablet } = useMediaQuery();
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    return (
        <>
            <Head>
                <title>AVSCMS | Hosting services</title>
            </Head>
            <main className='w-full flex flex-col items-center md:gap-8 sm:gap-6 gap-4 page'>
                <h2 className='page-title'>Hosting</h2>
                <div className='w-full rounded-2xl bg-white md:p-6 sm:p-5 p-4 flex flex-col md:gap-8 sm:gap-6 gap-4'>
                    <div className='md:space-y-3 space-y-2'>
                        <p className='md:text-2xl sm:text-xl text-lg  text-grayish-100/90'>
                            <span className='font-medium'>無限 </span>
                            <span className='font-light'>AVS - 就緒共享託管，從 </span>
                            <span className='font-medium'>$7.95/月 </span>
                        </p>
                        <p className='lg:text-xl md:text-lg sm:text-base text-sm text-grayish-200 font-light'>
                            如果您剛剛入門，並且還沒有專用服務器，我們的合作夥伴可以提供廉價、無限制的共享託管，非常適合運行成人和非成人視頻網站。
                        </p>
                    </div>
                    <div className='md:space-y-3 space-y-2'>
                        {
                            features.map((feature, index) => (
                                <Feature key={index} {...feature} />
                            ))
                        }
                    </div>
                    <div className='bg-grayish-400 px-6 py-4 md:text-lg sm:text-base text-sm text-grayish-200 rounded-xl opacity-80'>
                        與我們的腳本的兼容性、正常運行率、網站性能和服務質量由我們保證
                        第三方託管合作夥伴。 對於因我們的原因而產生的任何孤立問題，我公司不承擔任何責任
                        合作夥伴的服務器、其故障、錯誤配置或性能。
                    </div>
                    <div className='w-full border-b  border-[#D7D7D7] '>
                        <div
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            role='button' className=' border-t border-[#D7D7D7] py-2 flex justify-between md:items-center px-1 hover:bg-grayish-400'>
                            <div className='flex md:items-center gap-2'>
                                <AiFillGift size={isMobile ? 20 : isTablet ? 22 : 24} className='text-primary-100 shrink-0' />
                                <p className='lg:text-xl md:text-lg sm:text-base text-sm'>
                                    <span className={`${dropdownOpen ? 'text-primary-100' : 'text-grayish-100'} `}>與我們的合作夥伴一起託管您的網站並獲得 </span>
                                    <Link href={'/services/script-installation'} className='text-primary-100'> 免費腳本安裝</Link>
                                </p>
                            </div>
                            {dropdownOpen ? <FiChevronUp size={24} className='cursor-pointer text-grayish-200 hover:text-primary-100' /> :
                                <FiChevronDown size={24} className='cursor-pointer text-grayish-200 hover:text-primary-100' />}
                        </div>
                        {
                            dropdownOpen && (
                                <div className='p-3 space-y-5 pb-6'>
                                    <p className='policy-normal-text pb-3'>
                                        購買我們的託管和腳本後，為了享受免費腳本安裝服務，請在以下地址提交票證：
                                    </p>
                                    <Link href={'http://helpdesk.adultvideoscript.com/index.php?_m=tickets&_a=submit&step=1&departmentid=5 '} className='text-primary-100'>
                                        http://helpdesk.adultvideoscript.com/index.php?_m=tickets&_a=submit&step=1&departmentid=5
                                    </Link>
                                    <p className='policy-normal-text'> 提供以下所需信息：</p>
                                    <ul className='list-disc policy-normal-text lg:pl-10 md:pl-8 sm:pl-6 pl-4 text-grayish-200 space-y-3'>
                                        <li>FTP 主機名/用戶名/密碼（以便我們可以上傳文件並設置權限）</li>
                                        <li>域控制面板（Cpanel、Plesk 等）URL/用戶名/密碼（以便我們可以創建和填充數據庫）</li>
                                        <li>訂單號/Paypal 交易 ID</li>
                                        <li>託管訂單號</li>
                                    </ul>
                                    <div className='policy-normal-text space-y-1 max-w-5xl'>
                                        <p>如果您有特殊說明（例如，如果您需要將腳本安裝在特定文件夾或子域中），也請在票證中寫下這些說明。</p>
                                        <p>
                                            票證的主題最好是您的域名（以便我們可以輕鬆跟踪安裝情況）。
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    {/* plans */}
                    <div className='flex flex-col md:flex-row gap-6 w-full xl:px-10 md:px-6 px-3'>
                        {
                            plans.map((plan, index) => (
                                <Plan key={plan.name} {...plan} preferred={index === 0} butttonText='get plan' buttonType={index === 0 ? 'black' : 'outline'} />
                            ))
                        }
                    </div>
                    <div className='w-full bg-[#1F1F27] p-4 rounded-lg'>
                        <p className='text-white lg:text-xl md:text-lg sm:text-base text-sm'>
                            使用以下優惠券代碼獲得所有託管計劃的折扣：avs20
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Hosting