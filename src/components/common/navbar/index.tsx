import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp, FiGlobe } from "react-icons/fi";
import { useRecoilState } from 'recoil';
import { showMobileNavAtom } from '../../../../store/atoms';
import links from '../../../../store/data/links';
import Logo from '../logo';
import Navlink from './navlink';

export interface ILink {
    hasDropdown?: boolean;
    label: string;
    href?: string;
    description?: string;
    subLinks?: ILink[];
    icon?: string;
}

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


const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = React.useState<number>(-1);
    const [showLangDropdown, setShowLangdropdown] = useState(false);
    const [showMobileNav, setShowMobileNav] = useRecoilState(showMobileNavAtom);
    const [selectedLang, setSelectedLang] = useState("English");
    const langDropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    React.useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
                setShowLangdropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [langDropdownRef]);

    return (
        <div className={`flex absolute top-0 left-0 xl:px-[12%] lg:px-[10%] h-[10vh] md:px-[7%] sm:px-[5%] px-[3%] items-center justify-between w-full  py-6
        ${router.pathname === '/' ? "bg-transparent z-20" : 'bg-white'}
        `}>
            <div className='flex items-center xl:space-x-8 lg:space-x-6 md:space-x-4 space-x-3'>
                <Logo />
                <div className='sm:flex hidden items-center lg:space-x-4 space-x-2'>
                    {
                        links.map((link, index) => (
                            <Navlink
                                setDropdownVisible={setDropdownVisible}
                                dropdownVisible={dropdownVisible === index}
                                index={index} key={link.label} {...link} />
                        ))
                    }
                </div>
                <Link href={'/product/download'}>
                    <button className='rounded-full lg:text-base text-sm hidden md:block text-white bg-primary-100/90 py-2 px-4'>
                        donwload
                    </button>
                </Link>
            </div>
            <div className='relative'>
                <div role='button'
                    onClick={() => setShowLangdropdown(true)}
                    className={`rounded-2xl sm:flex hidden border  items-center lg:p-2 p-1  ${router.pathname === '/' ? 'text-white border-white bg-[#FFDDE7]/10' : 'text-grayish-100 border-grayish-100'} lg:space-x-2 space-x-1  hover:ring-2 focus:ring-2 ring-primary-100/50`}>
                    <FiGlobe size={24} />
                    <p className='lg:text-base text-sm'>{selectedLang}</p>
                    {showLangDropdown ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </div>
                {
                    showLangDropdown && (
                        <div ref={langDropdownRef} className='absolute top-10 w-max p-3 bg-gray-50 shadow-lg rounded-lg '>
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
                    )
                }
            </div>
            <div onClick={() => setShowMobileNav(true)} className={`sm:hidden flex items-center hover:text-primary-100 ${router.pathname === '/' && 'text-white'}`}>
                <AiOutlineMenu size={24} />
            </div>
        </div>
    )
}

export default Navbar