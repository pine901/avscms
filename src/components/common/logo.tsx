import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Logo = () => {
    const router=useRouter();
    return (
        <Link href='/'>
            <div className='flex space-x-2 cursor-pointer items-center'>
                <Image src={'/logo.png'} alt='logo' width={30} height={30} />
                <p className={`lg:text-2xl text-xl; uppercase ${router.pathname==='/' && "text-white"}`}>AVSCMS</p>
            </div>
        </Link>
    )
}

export default Logo