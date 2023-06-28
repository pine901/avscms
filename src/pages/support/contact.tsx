import ContactInput from '@/components/contact/contactInput'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 聯繫我們</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-6 page'>
                <div className='space-y-2 text-center'>
                    <h2 className='page-title'>我們隨時為您解答問題</h2>
                    <div className='lg:text-xl md:text-lg sm:text-base text-sm text-grayish-200 text-center font-normal max-w-4xl'>
                        <span className='opacity-70'>如果您對我們的產品或服務有任何疑問，我們很樂意為您提供幫助</span>
                        <Link href={'/support'}>
                            <span className='opacity-100 cursor-pointer'>技術支援 </span>
                        </Link>
                        <span className='opacity-70'>Please use </span>
                        <Link href={'/support/helpdesk'}>
                            <span className='opacity-100 text-primary-100 cursor-pointer'>服務台</span>
                        </Link>
                    </div>
                </div>
                <div className='bg-white rounded-2xl  space-y-5 md:py-6  py-4  xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 w-full'>
                    <ContactInput
                        label='主題'
                        type='text'
                        value={'Pre-Sales'}
                    />

                    <ContactInput
                        label='你的名字'
                        type='text'
                        required
                    />
                    <ContactInput
                        label='你的郵件'
                        type='email'
                        required
                    />
                    <ContactInput
                        label='您的手機'
                        type='tel'
                        required
                    />
                    <ContactInput
                        label='您的留言'
                        type='textarea'
                        required
                    />
                    <button className='outlined-btn uppercase'>
                        發信息
                    </button>

                </div>

            </main>
        </>
    )
}

export default Contact