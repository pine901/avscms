import Caution from '@/components/common/caution'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const ServerSetup = () => {
  return (
    <>
      <Head>
        <title>AVSCMS | 服務器設置服務</title>
      </Head>
      <main className='w-full flex flex-col items-center gap-7 page'>
        <div className='gap-3 text-center flex flex-col items-center'>
          <h2 className='page-title'>服務器設置服務</h2>
          <p className='lg:text-xl md:text-lg sm:text-base text-sm  text-grayish-100 text-center font-normal max-w-4xl'>
            只需 49 美元，我們即可安裝所需的轉換模塊，並確保您的服務器配置正確，以便順利運行 AVS。
          </p>
          <p className='text-grayish-200 lg:text-lg md:text-base sm:text-sm text-xs font-light max-w-5xl'>
            如果您的服務器沒有安裝所需的模塊，如果您在安裝/配置它們時遇到困難，如果 OS1 Apache/PHP/MySQL 錯誤配置導致模塊 1 腳本無法正常工作，我們公司可以提供專業的服務器設置服務。
          </p>
        </div>
        <Caution title='Please carefully read the following before purchasing this service' >
          <ul className='list-disc lg:text-lg md:text-base sm:text-sm text-xs font-light text-grayish-100 space-y-4'>
            <li className='space-y-2'>
              <p>
                需要對服務器進行完全 SSH 訪問，以及 FTP 1 Cpanel 訪問。 在訂購此服務之前，請確保您擁有並且可以提供 SSH 訪問權限！
              </p>
              <p>
                在 Linux 和 UNIX 中，root 帳戶是系統管理帳戶的名稱，它具有執行服務器上任何可用任務的完全權限。 管理帳戶名稱始終為“root”。
                並且用戶 ID 為 0。SSH root 訪問權限與 Cpanel I WHM/Plesk/Virtuozzo/DirectAdmin 1 等管理訪問權限不同。 SSH root 訪問與普通用戶 SSH 訪問不同。
                在 99% 的情況下，您只有“root”權限 如果您有專用服務器或 VPS（虛擬專用服務器），則可以訪問。
              </p>
              <p>
                由於客戶不了解服務條款和要求，我們將不予退款。 換句話說，如果您購買此服務並意識到您無法提供 SSH ROOT 訪問權限，我們將無法為您退款。
              </p>
            </li>
            <li>
              執行服務器設置服務後，我們始終測試並上傳所有主要視頻格式，確保所有視頻都能正常轉換和播放。
              系統會要求您進行測試並確認，然後我們才能宣布服務器安裝服務已完成。
              如果由於您後來的修改或服務器配置更改而導致腳本停止工作，我們將不承擔任何責任，也不會提供免費支持。
            </li>

            <li>
              由於需求量很大，請允許最多 2（兩）個工作日來完成服務器設置服務。
            </li>

            <li>• 服務器設置服務不包括
              <Link className='text-primary-100' href='/services/script-installation' rel='noreferrer' target='_blank'>腳本安裝服務</Link> . 我們建議您在安裝要求之前安裝腳本，以便我們在準備好後測試視頻轉換。</li>
          </ul>
        </Caution>
      </main>
    </>
  )
}

export default ServerSetup