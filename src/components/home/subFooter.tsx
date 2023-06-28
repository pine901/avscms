import { PAYPAL_STORE_LINK } from '@/constants';
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const SubFooter = () => {
    const { isMobile, isTablet } = useMediaQuery();

    return (
        <div className='main-padding flex flex-col items-center md:gap-3 gap-2'>
            <h3 className='lg:text-4xl md:text-3xl text-2xl text-grayish-100 capitalize'>服務了數千名客戶</h3>
            <div className='flex md:gap-3 gap-2 flex-wrap justify-between'>
                {
                    new Array(6).fill(0).map((_, index) => (
                        <Image key={index} src={`/images/clients/${index + 1}.png`} alt='client' width={isMobile ? 100 : isTablet ? 150 : 200} height={isMobile ? 100 : isTablet ? 150 : 100} />
                    ))
                }
            </div>
            <div className='w-full md:min-h-[29vh] py-5 rounded-tr-[3rem] rounded-xl bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center md:gap-3 gap-2'
                style={{ backgroundImage: 'url(/images/sub-footer-bg.png)' }}
            >
                <h3 className='text-white lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center pb-2 font-medium'>準備好運行您自己的視頻網站了嗎？</h3>

                <p className='text-white opacity-75 lg:text-xl md:text-lg sm:text-base text-sm'>幾分鐘內即可開始！</p>
                <Link href={PAYPAL_STORE_LINK}>
                    <button className='filled-btn'>
                    購買成人視頻腳本
                    </button>

                </Link>
            </div>
        </div>
    )
}

export default SubFooter