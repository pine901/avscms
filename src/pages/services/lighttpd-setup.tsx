import Head from 'next/head';
import Image from 'next/image';
import { features } from '../plugins/lighttpd-streaming';
import Caution from '@/components/common/caution';
import Link from 'next/link';
import useMediaQuery from '@/hooks/useMediaQuery';


const LighttpdSetup = () => {
  const { isMobile, isTablet } = useMediaQuery();
  return (
    <>
      <Head>
        <title>AVSCMS | Lighttpd 設置服務</title>
      </Head>
      <main className='w-full flex flex-col items-center gap-5 page'>
        <div className='space-y-2 text-center'>
          <h2 className='page-title'>Lighttpd 設置服務</h2>
          <p className='lg:text-xl md:text-lg sm:text-base text-sm text-grayish-200 text-center font-normal max-w-4xl'>
            漸進式下載的專業視頻流替代方案。
          </p>
        </div>
        <div className='bg-white rounded-2xl  md:space-y-5 sm:space-y-4 space-y-3 md:p-8 sm:p-6 p-4 w-full transition-all duration-200'>
          <div className='flex flex-col gap-6'>
            {
              features.map((feature) => (
                <div key={feature.title} className='flex items-start md:items-center md:gap-5 sm:gap-4 gap-3'>
                  <Image alt={feature.title} src={'/icons/' + feature.icon} width={isMobile ? 40 : isTablet ? 50 : 60} height={isMobile ? 40 : isTablet ? 50 : 60} />
                  <div className='space-y-1'>
                    <h3 className='font-medium sm:text-2xl text-xl text-grayish-100/90'>{feature.title}</h3>
                    <p className='text-grayish-200/90 lg:text-lg md:text-base sm:text-sm text-xs max-w-5xl'>{feature.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Caution title='Please carefully read the following before purchasing this service' >
          <ul className='list-disc lg:text-lg md:text-base sm:text-sm text-xs font-light text-grayish-100 space-y-4'>
            <li>Lighttpd 只能在專用服務器或 VPS 服務器上安裝和配置。</li>
            <li className='space-y-2'>
              <p>
                需要對服務器進行完全 SSH 訪問，以及 FTP 1 Cpanel 訪問。 在訂購此服務之前，請確保您擁有並且可以提供 SSH 訪問權限！
              </p>
              <p>
                在 Linux 和 UNIX 中，root 帳戶是系統管理帳戶的名稱，它具有執行服務器上任何可用任務的完全權限。 管理帳戶名稱始終為“root”。
                並且用戶 ID 為 0。SSH root 訪問權限與 Cpanel I WHM/Plesk/Virtuozzo/DirectAdmin 1 等管理訪問權限不同。
                SSH root 訪問與普通用戶 SSH 訪問不同。 在 99% 的情況下，您只有“root”權限 如果您有專用服務器或 VPS（虛擬專用服務器），則可以訪問。
              </p>
              <p>
                由於客戶不了解服務條款和要求，我們將不予退款。 換句話說，如果您購買此服務並發現無法提供 SSH ROOT 訪問權限，我們將無法為您退款。
              </p>
            </li>
            <li>執行 Lighttpd 設置服務後，我們總是測試其功能。 系統會要求您進行測試並確認，然後我們才能宣布 Lighttpd 設置服務已完成。
              如果由於您後來的修改或服務器配置更改而導致腳本停止工作，我們將不承擔任何責任，也不會提供免費支持。</li>
            <li>由於需求量很大，請允許最多需要 2（兩）個工作日來完成 Lighttpd 設置服務。 </li>
            <li>Lighttpd 設置服務不包括
              <Link className='text-primary-100' href='/services/script-installation' rel='noreferrer' target='_blank'> 腳本安裝服務</Link> 或者
              <Link className='text-primary-100' href='/services/server-setup' rel='noreferrer' target='_blank'> 服務器設置服務</Link>
              . We recommend that you have those installed before we install Lighttpd, in order for us to test when ready.</li>
          </ul>
        </Caution>

      </main>
    </>
  )
}

export default LighttpdSetup