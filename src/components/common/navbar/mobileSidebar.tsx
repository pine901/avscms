/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { LuGlobe } from "react-icons/lu";
import { RxCross2 } from 'react-icons/rx';
import { useRecoilState } from 'recoil';
import { showMobileNavAtom } from '../../../../store/atoms';
import links from '../../../../store/data/links';
import MobileSubLink from './mobileSubLink';


const languages = [
    {
        label: "English",
        href: 'https://www.avscms.com/'
    },
    {
        label: '中文',
        href: 'https://cn.avscms.com/'
    }
]


const MobileSidebar = () => {
    const router = useRouter();
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [showMobileNav, setShowMobileNav] = useRecoilState(showMobileNavAtom);
    const [showLangDropdown, setShowLangDropdown] = React.useState(false);
    const [selectedLang, setSelectedLang] = React.useState("English");
    const langDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
                setShowMobileNav(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [sidebarRef]);

    useEffect(() => {
        Router.events.on('routeChangeStart', () => {
            setShowMobileNav(false);
        }
        )
    }, [router.pathname]);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                setShowLangDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [langDropdownRef]);





    return (
        <div className='absolute top-0 left-0 bg-black/50 w-full h-screen flex z-50'>
            <div className='w-6 h-screen bg-primary-100' />
            <div
                ref={sidebarRef}
                className='h-screen overflow-x-auto w-[85vw] xs:w-[60vw] bg-white p-4 space-y-4'>
                <div className='w-full flex items-center justify-between relative'>
                    <RxCross2 className='text-gray-400' size={24} onClick={() => setShowMobileNav(false)} />
                    <div className='flex gap-2 text-sm'>
                        <LuGlobe size={18} />
                        <span className='text-[#1D2129] '>{selectedLang}</span>
                        {
                            showLangDropdown ?
                                <BsChevronUp size={18} onClick={() => setShowLangDropdown(!showLangDropdown)} />
                                :
                                <BsChevronDown size={18} onClick={() => setShowLangDropdown(!showLangDropdown)} />
                        }
                    </div>
                    {
                        showLangDropdown &&
                        <div ref={langDropdownRef} className='absolute top-8 w-max p-3 bg-gray-100 shadow-lg right-0 rounded-lg '>
                            <p className='text-sm font-medium'>Select Language</p>
                            <div className='flex flex-col space-y-2 mt-2'>
                                {
                                    languages.map((lang, index) => (
                                        <a
                                            onClick={() => setSelectedLang(lang.label)}
                                            href={lang.href}
                                            key={index}
                                            className={`text-sm font-light hover:text-primary-100 ${lang.label === selectedLang && 'text-primary-100'}`}>
                                            {lang.label}
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className='space-y-3'>
                    {
                        links.filter(link => link.hasDropdown).map((link, index) => (
                            <div key={link.label} className={`space-y-2 pb-3 ${index === 2 ? '' : 'border-b-2'}`}>
                                <h3 className='text-sm text-[#BCBCBC] capitalize'>{link.label}</h3>
                                <div className='flex flex-col gap-2'>
                                    {
                                        link.subLinks?.map((sub) => (
                                            <>
                                                {
                                                    sub.hasDropdown ?
                                                        <MobileSubLink {...sub} />
                                                        :
                                                        <Link href={sub.href!}>
                                                            <p className='text-sm text-grayish-100 capitalize'>{sub.label}</p>
                                                        </Link>
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        // </div>
    )
}

export default MobileSidebar