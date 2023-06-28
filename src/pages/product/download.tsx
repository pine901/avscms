import HavingTrouble from '@/components/common/HavingTrouble'
import Head from 'next/head'
import Link from 'next/link'

const Download = () => {
    return (
        <>
            <Head>
                <title>AVSCMS | 下載AVS</title>
            </Head>
            <main className='w-full flex flex-col items-center sm:gap-7 gap-3 page'>
                <h2 className='page-title'>下載</h2>
                <div className='flex flex-col sm:flex-row sm:gap-10 gap-4'>
                    <a href='https://update.avscms.com/files/avscms-8.2-full.zip' download>
                        <button className='filled-btn'>
                        下載AVSCMS 8.2
                        </button>
                    </a>
                    <Link href={'https://github.com/avscms/avscms'} target='_blank' rel='noreferrer'>
                        <button className='black-btn'>
                            Github
                        </button>
                    </Link>
                </div>
                <HavingTrouble />
            </main>
        </>
    )
}

export default Download