/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { ILink } from '.';
import ProductDropdown from './productDropdown';
import ServicesAndSupportDropdown from './servicesAndSupportDropdown';


interface Props extends ILink {
    dropdownVisible: boolean;
    setDropdownVisible: React.Dispatch<React.SetStateAction<number>>;
    index: number
}
const Navlink = ({ label, href, subLinks, index, setDropdownVisible, dropdownVisible, hasDropdown }: Props) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownVisible(-1);
            }
        }
        hasDropdown && document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [dropdownRef, setDropdownVisible, hasDropdown])

    React.useEffect(() => {
        setDropdownVisible(-1);
    }, [router.pathname])
    return (
        <>
            {
                href ? (
                    <Link href={href}>
                        <p className={`${router.pathname === '/' ? 'text-white' : 'text-grayish-100'} opacity-70   cursor-pointer hover:opacity-100 transition-opacity duration-200 capitalize lg:text-base text-sm`}>{label}</p>
                    </Link>
                ) : (
                    <div className='relative'>
                        <div
                            onClick={() => setDropdownVisible(dropdownVisible ? -1 : index)}
                            className={`${router.pathname === '/' ? 'text-white' : 'text-grayish-100'}  hover:opacity-100 transition-opacity duration-200 lg:space-x-1 cursor-pointer flex items-center ${dropdownVisible ? 'opacity-100' : 'opacity-70'}`}>
                            <p className='capitalize lg:text-base text-sm'>{label}</p>
                            {dropdownVisible ? <FiChevronUp
                                size={24} /> : <FiChevronDown size={24}
                            />}
                        </div>
                        {/* {
                            dropdownVisible && (
                                <div ref={dropdownRef} className='absolute top-8 z-10 left-0 bg-gray-50 rounded-xl shadow-xl py-4 w-max'>
                                    {
                                        subLinks?.map((link) => (
                                            <Link key={link.label} href={link.href!}>
                                                <p className='text-grayish-100 opacity-70   cursor-pointer hover:opacity-100 transition-opacity duration-200 capitalize px-4 py-1 hover:bg-gray-200'>
                                                    {link.label}
                                                </p>
                                            </Link>
                                        ))
                                    }
                                </div>
                            )
                        } */}
                        {dropdownVisible &&
                            <div
                                ref={dropdownRef}
                                className='relative'>
                                {(index === 1 && dropdownVisible) && <ProductDropdown />}
                                {(index === 2 && dropdownVisible) && <ServicesAndSupportDropdown active='services' />}
                                {(index === 3 && dropdownVisible) && <ServicesAndSupportDropdown active='support' />}
                            </div>}
                    </div>
                )
            }
        </>
    )
}

export default Navlink