import { Poppins } from 'next/font/google';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { showMobileNavAtom } from '../../../store/atoms';
import Footer from '../common/footer';
import Navbar from '../common/navbar';
import MobileSidebar from '../common/navbar/mobileSidebar';
interface Props {
    children: React.ReactNode
}
const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin']
})

const MainLayout = ({ children }: Props) => {
    const showMobileNav = useRecoilValue(showMobileNavAtom);
    const router = useRouter();
    return (
        <div className={`w-full min-h-screen flex flex-col justify-between ${router.pathname === '/' ? 'bg-white' : 'bg-grayish-400'}  ${poppins.className} ${showMobileNav&&'overflow-hidden h-screen w-full'}`}>
            {(showMobileNav) && <MobileSidebar />}
            <Navbar />
            <div className={` ${router.pathname !== '/' && 'pt-[10vh]'}`}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;