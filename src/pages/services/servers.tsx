import Feature from '@/components/hosting/feature';
import Head from 'next/head';
import { AiFillGift } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IFeature } from './hosting';
import Plan from '@/components/hosting/plan';
import React from 'react';
import Link from 'next/link';
export interface IPlan {
    name: string;
    price: number;
    features: string[];
}

const plans: IPlan[] = [

    {
        name: '力量',
        price: 249,
        features: [
            'Intel Xeon E-2136 - 6 core / 12 thread',
            '32GB RAM  DDR4 ECC 2666MHz',
            '2 x 4TB HDD  SATA Soft RAID',
            '無限優質帶寬',
            '1G bit 專用端口',
            "可配置的硬件、操作系統分發、控制面板、RAID、IP、私有名稱服務器",
            '完全託管、抗 DDoS 緩解',
            '已安裝 AVS 要求，包括。 Lighttpd/Nginx'
        ]
    },
    {
        name: 'Storage',
        price: 349,
        features: [
            'Intel Xeon D-1541  - 8 core / 16 thread',
            '32GB RAM DDR4 ECC 2133 MHz',
            '4x 12TB HDD Soft RAID + 2 x 240GB SSD Soft RAID',
            '無限優質帶寬',
            '1G bit 專用端口',
            "可配置的硬件、操作系統分發、控制面板、RAID、IP、私有名稱服務器",
            '完全託管、抗 DDoS 緩解',
            '已安裝 AVS 要求，包括。 Lighttpd/Nginx'
        ]
    }
]

const features: IFeature[] = [
    {
        texts: [
            { text: '已安裝所有 AVS 要求，包括 Lighttpd 1 Nginx 1 Red5。 ' },
            { text: '保證兼容性', bold: true },
        ]
    },
    {
        texts: [
            { text: '1Gbps 端口擁有大量空間和無限帶寬。 ' },
            { text: '非常適合視頻/視頻/畫廊網站 ', bold: true },
        ]
    },
    {
        texts: [
            { text: '多種的' },
            { text: '世界一流的數據中心', bold: true },
            { text: '(北美和歐洲）、按需基礎設施，以及 ' },
            { text: '頂級帶寬', bold: true },
        ]
    },
    {
        texts: [
            { text: '完全託管的 DDoS 防護 ', bold: true },
            { text: ', 全新名牌配件，99.9%正常運行時間保證 ' },
        ]
    },
]

const Servers = () => {
    const [scriptOpen, setScriptOpen] = React.useState(false);
    const [installOpen, setInstallOpen] = React.useState(false);

    return (
        <>
            <Head>
                <title>AVSCMS | 專用服務器 </title>
            </Head>
            <main className='w-full flex flex-col items-center gap-8 page'>
                <h2 className='page-title'>託管專用服務器</h2>
                <div className='w-full rounded-2xl bg-white md:p-8 sm:p-6 p-4 flex flex-col md:gap-8 sm:gap-6 gap-4'>
                    <div className='md:space-y-3 space-y-2'>
                        <p className='md:text-2xl sm:text-xl text-lg   text-grayish-100/90'>
                            強大的管理能力 服務器量身定制適用於您的 AVS 視頻網站。
                        </p>
                    </div>
                    <div className='md:space-y-3 space-y-2'>
                        {
                            features.map((feature, index) => (
                                <Feature key={index} {...feature} />
                            ))
                        }
                    </div>
                    <div className='w-full'>
                        <div className='w-full border-b  border-[#D7D7D7] '>
                            <div onClick={() => setInstallOpen(!installOpen)}
                                role='button' className=' border-t border-[#D7D7D7]  flex justify-between w-full md:items-center px-1 hover:bg-grayish-400'>
                                <div

                                    className={`border-[#D7D7D7] py-2 flex justify-between w-full items-center px-1 ${installOpen ?
                                        "text-primary-100" : 'text-grayish-100 '}`}>
                                    <div className='flex sm:items-center gap-2'>
                                        <AiFillGift size={24} className='text-primary-100 shrink-0' />
                                        <p className='lg:text-xl md:text-lg sm:text-base text-sm'>
                                            <span className=''>向我們訂購服務器並獲得 </span>
                                            <Link href={'/services/script-installation'} className='text-primary-100'> 免費腳本安裝</Link>
                                        </p>
                                    </div>
                                    {installOpen ? <FiChevronUp size={24} className='cursor-pointer text-grayish-200 hover:text-primary-100' /> :
                                        <FiChevronDown size={24} className='cursor-pointer text-grayish-200 hover:text-primary-100' />}
                                </div>
                            </div>
                            {installOpen && <div className='p-3 space-y-5 pb-6'>
                                <p className='policy-normal-text pb-3'>
                                    購買我們的服務器和腳本後，為了享受免費腳本安裝服務，請通過以下地址提交票證：
                                </p>
                                <Link href={'http://helpdesk.adultvideoscript.com/index.php?_m=tickets&_a=submit&step=1&departmentid=5 '} className='text-primary-100'>
                                    http://helpdesk.adultvideoscript.com/index.php?_m=tickets&_a=submit&step=1&departmentid=5
                                </Link>
                                <p className='policy-normal-text'> 提供以下所需信息：</p>
                                <ul className='list-disc policy-normal-text lg:pl-10 md:pl-8 sm:pl-6 pl-4 text-grayish-200 space-y-3'>
                                    <li>FTP 主機名/用戶名/密碼（以便我們可以上傳文件並設置權限）</li>
                                    <li>
                                        域控制面板（Cpanel、Plesk 等）URL/用戶名/密碼（以便我們可以創建和填充數據庫）
                                    </li>
                                    <li>訂單號/Paypal 交易 ID</li>
                                    <li>託管訂單號</li>
                                </ul>
                                <div className='policy-normal-text space-y-1 max-w-5xl'>
                                    <p>如果您有特殊說明（例如，如果您需要將腳本安裝在特定文件夾或子域中），也請在票證中寫下這些說明。</p>
                                    <p>
                                        票證的主題最好是您的域名（以便我們可以輕鬆跟踪安裝情況）。
                                    </p>
                                </div>
                            </div>}
                        </div>
                        <div className='w-full border-b  border-[#D7D7D7] '>
                            <div onClick={() => setScriptOpen(!scriptOpen)}
                                role='button' className=' border-[#D7D7D7]  flex justify-between w-full md:items-center px-1 hover:bg-grayish-400'>
                                <div
                                    className={`border-[#D7D7D7] py-2 flex justify-between w-full items-center px-1 ${scriptOpen ?
                                        "text-primary-100" : 'text-grayish-100 '}`}>
                                    <div className='flex sm:items-center gap-2'>
                                        <AiFillGift size={24} className='text-primary-100 shrink-0' />
                                        <p className='lg:text-xl md:text-lg sm:text-base text-sm'>
                                            <span className=''>向我們訂購服務器並獲得 </span>
                                            <Link href={'/services/server-setup'} className='text-primary-100'>免費服務器設置</Link>
                                        </p>
                                    </div>
                                    {scriptOpen ? <FiChevronUp size={24} className='cursor-pointer text-grayish-200 hover:text-primary-100' /> :
                                        <FiChevronDown size={24} className='cursor-pointer text-grayish-200 hover:text-primary-100' />}
                                </div>
                            </div>
                            {scriptOpen && <div className='p-3 space-y-5 pb-6'>
                                <p className='policy-normal-text pb-3'>購買我們的服務器和腳本後，為了享受免費服務器設置服務，請在以下地址提交票證：</p>
                                <Link href={'http://helpdesk.adultvideoscript.com/index.php?_m=tickets&_a=submit&step=1&departmentid=6'} className='text-primary-100'>
                                    http://helpdesk.adultvideoscript.com/index.php?_m=tickets&_a=submit&step=1&departmentid=6
                                </Link>
                                <p className='policy-normal-text'> 提供以下所需信息：</p>
                                <ul className='list-disc policy-normal-text lg:pl-10 md:pl-8 sm:pl-6 pl-4 text-grayish-200 space-y-3'>
                                    <li>FTP 主機名/用戶名/密碼 </li>
                                    <li>域控制面板（Cpanel、Plesk 等）URL/用戶名/密碼</li>
                                    <li className='text-grayish-100'>SSH 主機（域或 IP）和 SSH“root” 密碼</li>
                                    <li>訂單號/Paypal 交易 ID</li>
                                    <li>服務器採購訂單號</li>
                                </ul>
                                <div className='policy-normal-text space-y-1 max-w-5xl'>
                                    <p>如果您有特殊說明，請也寫在票中。</p>
                                    <p>
                                        票證的主題最好是您的域名（以便我們可以輕鬆跟踪安裝情況）。
                                    </p>
                                </div>
                            </div>}
                        </div>
                    </div>
                    {/* plans */}
                    <div className='flex flex-col md:flex-row gap-6 w-full xl:px-8 md:px-4 px-2'>
                        {
                            plans.map((plan, index) => (
                                <Plan key={plan.name} {...plan} preferred={index === 1} butttonText='order server' buttonType={'black'} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Servers;