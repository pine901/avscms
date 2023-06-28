import Caution from '@/components/common/caution'
import Head from 'next/head'
import React from 'react'

const ScriptInstallation = () => {
  return (
    <>
      <Head>
        <title>AVSCMS | 腳本安裝服務</title>
      </Head>
      <main className='w-full flex flex-col items-center gap-5 page'>
        <div className='space-y-2 text-center'>
          <h2 className='page-title'>腳本安裝服務</h2>
          <p className='lg:text-xl md:text-lg sm:text-base text-sm text-grayish-100 text-center font-normal max-w-4xl'>
            如果您在部署我們的腳本時遇到問題，我們可以專業地將其安裝在您的服務器上，固定費用為 29 美元。
          </p>
        </div>
        <Caution title='Automatically checks and embeds new videos, every 1, 3, 6, 12, 24 hours, or daily or weekly' >
          <ul className='list-disc lg:text-lg md:text-base sm:text-sm text-xs font-light text-grayish-100 space-y-2'>
            <li>
              請首先確保您的服務器或主機滿足我們腳本的服務器要求。
            </li>
            <li>
              我們不是如果您的服務器 1 託管不符合要求，則對與腳本功能相關的任何問題負責我們網站上提到的所有要求。
            </li>
            <li>we require <span className='font-medium'>FTP/Cpanel access </span> to your website.</li>
            <li>After performing the Installation Service, we always test and make sure that everything works fine; you will be asked to   confirm, and once you do that, we can declare the Installation Service completed. We will NOT be responsible and will NOT provide FREE support if the script stops working due to your later modifications or server configuration changes.
            </li>
            <li>Due to a high demand, please allow a maximum number of <span className='font-medium'>2 (two) working days</span>  for the Script Installation Service to be completed. </li>
            <li>Script Installation service does not include <span className='text-primary-100'>Installation of the Required Server Modules</span> </li>
          </ul>
        </Caution>
      </main>
    </>
  )
}

export default ScriptInstallation