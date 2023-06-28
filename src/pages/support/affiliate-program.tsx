import Head from 'next/head'
import React from 'react'

const advantagesList = [
    'No need to store any software on your servers, or keep track of licenses',
    'No hassles related to invoicing or payments from customers',
    'No setup fee, no start up cost, no hidden performance targets to reach! '
]

const AffiliateProgram = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 聯盟計劃</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-5 page'>
                <h2 className='page-title'>成為會員</h2>
                <p className='md:text-xl sm:text-base text-sm text-grayish-200 text-center font-normal max-w-4xl'>
                    <span className='opacity-70'>我們很高興地向您介紹 </span>
                    <span className='opacity-100'>競爭的 </span>
                    <span className='opacity-70'>附屬機會</span>
                    <span className='opacity-100'>網絡開發公司、網頁設計師、託管公司和網絡營銷人員。</span>
                </p>
                <div className='w-full  bg-white md:p-6 p-4 rounded-2xl space-y-4'>
                    <div className='space-y-3'>
                        <h3 className='text-grayish-100 sm:text-xl text-lg font-medium'>您推薦的每筆銷售均可獲得 20.00% 的佣金！ 立即成為 AVS 會員！</h3>
                        <p className='text-grayish-200 md:text-base sm:text-sm text-xs'>我們的軟件產品可通過 Envient 聯盟網絡出售。<br />
                            要開始銷售，您只需顯示產品信息並“立即購買”即可。 您網站上的鏈接。
                        </p>
                    </div>
                    <div className='space-y-3 '>
                        <h3 className='text-grayish-100  font-medium sm:text-xl text-lg'>保證聯盟佣金</h3>
                        <p className='text-grayish-200 md:text-base sm:text-sm text-xs'>
                            當訪問者點擊您網站上的鏈接或橫幅時，Envient 會在 120 個日曆日內跟踪您的會員 ID。 在這 4 個月內，同一用戶下的任何訂單都可以保證您獲得聯屬佣金。
                        </p>
                    </div>
                    <div className='space-y-3 '>
                        <h3 className='text-grayish-100  font-medium sm:text-xl text-lg'>就像 1、2、3 一樣簡單...</h3>
                        <p className='text-grayish-200 md:text-base sm:text-sm text-xs'>Envient 負責訂購流程、產品交付和客戶支持。</p>
                        <ul className='space-y-1'>
                            {
                                advantagesList.map((advantage, index) => (
                                    <li key={index} className='text-grayish-100 list-disc list-inside sm:text-base text-sm'>{advantage}</li>
                                ))
                            }
                        </ul>
                        <p className='text-grayish-200 md:text-base sm:text-sm text-xs'>您還將受益於全面的聯盟報告，該報告將準確地顯示您的表現。</p>
                        <div className='space-y-3 '>
                            <h3 className='text-grayish-100  font-medium sm:text-xl text-lg'>每月付款</h3>
                            <p className='text-grayish-200 md:text-base sm:text-sm text-xs'>
                                您每月都會收到佣金，佣金可以轉入您的預付萬事達借記卡，也可以通過電匯、支票或 PayPal 發送。
                            </p>
                        </div>
                        <div className='rounded-2xl bg-grayish-400 p-5 space-y-5'>
                            <div className='space-y-3 text-center sm:text-start '>
                                <h3 className='text-grayish-100  font-medium text-xl'>成為會員</h3>
                                <p className='text-grayish-200 sm:text-base xs:text-sm text-xs text-start'>
                                    使用您擁有的所有可用的促銷渠道 - 博客、網站、時事通訊等！ 請記住 - 您創建的推薦鏈接越多，您賺錢的機會就越多！
                                </p>
                            </div>
                            <button className='outlined-btn uppercase w-full sm:w-fit'>
                                即將推出
                            </button>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default AffiliateProgram