import Head from 'next/head'
import React from 'react'
import { terms, personalData, usageData, trackingTechnologies, cookies, useOfYourPersonalData, whereYourDataCanBeShared, retentionOfYourPersonalData, transferOfYourPersonalData, deleteYourPersonalData, disClosureOfqYourPersonalData, otherSections } from '../../../store/data/privacy-policy'
import Link from 'next/link'

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 隱私政策</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-5 page'>
                <h2 className='page-title'>隱私政策</h2>
                <div className='flex flex-col items-center lg:text-lg md:text-base sm:text-sm text-xs text-grayish-200 gap-3'>
                    <p>最後更新時間：2023 年 2 月 1 日</p>
                    <p className='text-center'>
                        本隱私政策描述了我們在您使用服務時收集、使用和披露您的信息的政策和程序，並告訴您您的隱私權以及法律如何保護您。
                    </p>
                    <p className='text-center'>
                        我們使用您的個人數據來提供和改進服務。 使用服務即表示您同意根據本隱私政策收集和使用信息。
                    </p>
                </div>
                <div className='w-full  bg-white md:p-10 sm:p-8  p-4 rounded-2xl md:space-y-10 sm:space-y-6 space-y-4'>
                    <h3 className='policy-title'>
                        解釋和定義
                    </h3>
                    <div className='space-y-2'>
                        <h4 className='policy-subtitle'>解釋</h4>
                        <p className='policy-normal-text'>
                            首字母大寫的單詞具有在以下條件下定義的含義。 下列定義無論以單數還是複數形式出現，均具有相同的含義。
                        </p>
                    </div>
                    <div className='space-y-3'>
                        <h3 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-grayish-100'>定義</h3>
                        <p className='text-grayish-200 md:text-base text-sm'>
                            就本隱私政策而言:
                        </p>
                        <ul className='list-disc space-y-3 lg:pl-8 md:pl-6 pl-4'>
                            {
                                terms.slice(0, terms.length - 1).map((term, index) => (
                                    <li key={index} className='text-grayish-200 md:text-base text-sm'>
                                        <span className='text-grayish-100 font-medium'>{term.title}</span>
                                        <span className='text-grayish-200 font-light'> {term.description}</span>
                                    </li>
                                ))
                            }
                            <li className='text-grayish-200  md:text-base text-sm  gap-2'>
                                <span className='text-grayish-100 font-medium'>網站</span>
                                <span className='text-grayish-200 font-light'>  指 AVSCMS，可從
                                    <Link href={'https://www.avscms.com/'} target='_blank' className='text-primary-100 pl-1'>https://www.avscms.com/ </Link> 或者 <Link href={'https://www.adultvideoscript.com/'} target='_blank' className='text-primary-100'>
                                        https://www.adultvideoscript.com/
                                    </Link>
                                </span>
                            </li>
                            <li className='text-grayish-200 md:text-base text-sm'>
                                <span className='text-grayish-100 font-medium'>{terms[terms.length - 1].title}</span>
                                <span className='text-grayish-200 font-light'> {terms[terms.length - 1].description}</span>
                            </li>
                        </ul>
                    </div>
                    <h3 className='policy-title'>收集和使用您的個人數據</h3>
                    <div className='space-y-5'>
                        <h3 className='policy-subtitle'>收集數據的類型</h3>
                        <div className='space-y-3'>
                            <h4 className=' lg:text-2xl md:text-xl text-lg text-grayish-100'>個人資料</h4>
                            <p className='policy-normal-text'>{personalData.description}</p>
                            <ul className='list-disc space-y-3 list-inside'>
                                {
                                    personalData.items.map((data, index) => (
                                        <li key={index} className='text-grayish-200 md:text-base text-sm'>
                                            {data}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='space-y-3'>
                            <h4 className=' lg:text-2xl md:text-xl text-lg text-grayish-100'>使用數據</h4>
                            <ul className='list-disc space-y-3 list-inside'>
                                {
                                    usageData.map((data) => (
                                        <li key={data} className='text-grayish-200 md:text-base text-sm'>
                                            {data}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='space-y-3'>
                            <h4 className=' lg:text-2xl md:text-xl text-lg text-grayish-100'>追踪技術和 Cookie</h4>
                            <p className='policy-normal-text'>{trackingTechnologies.description}</p>
                            <ul className='list-disc space-y-3 pl-6'>
                                {
                                    trackingTechnologies.items.map((item) => (
                                        <li key={item.title} className='text-grayish-200 md:text-base text-sm'>
                                            <span className='text-grayish-100 font-medium'>{item.title}</span>
                                            <span className='text-grayish-200 font-light'> {item.description}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            {
                                trackingTechnologies.others.map((item, index) => (
                                    <p key={index} className='text-grayish-200 md:text-base text-sm'>
                                        {item}
                                    </p>
                                ))
                            }
                            <ul className='list-disc font-light space-y-3  lg:pl-8 md:pl-6 pl-4'>
                                {
                                    cookies.map((item, index) => (
                                        <li key={item.title} className='text-grayish-200 md:text-base text-sm space-y-3'>
                                            <span className='text-grayish-100 font-medium'>{item.title}</span>
                                            <div className='space-y-3'>
                                                <p>類型 :{item.type} </p>
                                                <p>管理人 : {item.admin}</p>
                                                <p>目的 : {item.purpose}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p className='policy-normal-text'>
                                有關我們使用的 Cookie 以及您對 Cookie 的選擇的更多信息，請訪問我們的 Cookie 政策或隱私政策的 Cookie 部分。
                            </p>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='policy-subtitle'>您的個人數據的使用</h3>

                            <p className='policy-normal-text'>公司可能將個人數據用於以下目的：</p>
                            <ul className='list-disc space-y-3  lg:pl-10 md:pl-8 sm:pl-6 pl-4'>
                                {
                                    useOfYourPersonalData.map((data) => (
                                        <li key={data.title} className='text-grayish-200 md:text-base text-sm'>
                                            <span className='text-grayish-100 font-medium'>{data.title}</span>
                                            <span className='text-grayish-200 font-light'> {data.description}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                            <p className='policy-normal-text'>我們可能在以下情況下共享您的個人信息:</p>
                            <ul className='list-disc space-y-3  lg:pl-10 md:pl-8 sm:pl-6 pl-4'>
                                {
                                    whereYourDataCanBeShared.map((data) => (
                                        <li key={data.title} className='text-grayish-200 md:text-base text-sm'>
                                            <span className='text-grayish-100 font-medium'>{data.title}</span>
                                            <span className='text-grayish-200 font-light'> {data.description}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h4 className='policy-subtitle'>保留您的個人數據:</h4>
                            {
                                retentionOfYourPersonalData.map(itm => (
                                    <p key={itm} className='policy-normal-text'>{itm}</p>
                                ))
                            }
                        </div>
                        <div className='space-y-4'>
                            <h4 className='policy-subtitle'>您的個人數據的轉移</h4>
                            {
                                transferOfYourPersonalData.map(itm => (
                                    <p key={itm} className='policy-normal-text'>{itm}</p>
                                ))
                            }
                        </div>
                        <div className='space-y-4'>
                            <h4 className='policy-subtitle'>刪除您的個人數據</h4>
                            {
                                deleteYourPersonalData.map(itm => (
                                    <p key={itm} className='policy-normal-text'>{itm}</p>
                                ))
                            }
                        </div>
                        <div className='space-y-4'>
                            <h2 className='policy-title'>披露您的個人數據</h2>
                            {
                                disClosureOfqYourPersonalData.map(section => (
                                    <div key={section.title} className='space-y-3'>
                                        <h3 className='policy-subtitle'>{section.title}</h3>
                                        <p className='policy-normal-text'>{section.description}</p>
                                        {
                                            section.list && (
                                                <ul className='list-disc space-y-3  lg:pl-10 md:pl-8 sm:pl-6 pl-4'>
                                                    {section.list.map(itm => (
                                                        <li key={itm} className='policy-normal-text'>{itm}</li>
                                                    ))}
                                                </ul>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        {
                            otherSections.map(section => (
                                <div key={section.title} className='space-y-3'>
                                    <h3 className='policy-subtitle'>{section.title}</h3>
                                    {
                                        section.items && (
                                            section.items.map(itm => (
                                                <p key={itm} className='policy-normal-text'>{itm}</p>
                                            ))

                                        )
                                    }
                                </div>
                            ))
                        }
                        <div className='space-y-4'>
                            <h2 className='policy-title'>聯繫我們</h2>
                            <p className='policy-normal-text'>如果您對本隱私政策有任何疑問，您可以聯繫我們：</p>
                            <ul className='list-disc lg:pl-10 md:pl-8 sm:pl-6 pl-4 policy-normal-text space-y-3'>
                                <li>通過電子郵件: office@adultvideoscript.com</li>
                                <li>通過訪問我們網站上的此頁面： <Link href={' https://www.avscms.com/contact/'} target='_blank' className='text-primary-100'>
                                    https://www.avscms.com/contact/
                                </Link> 或者 <Link className='text-primary-100' href={'https://www.adultvideoscript.com/contact/'} target='_blank'>
                                        https://www.adultvideoscript.com/contact/
                                    </Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}

export default PrivacyPolicy