import React from 'react'
import links from '../../../store/data/links';
import Link from 'next/link';
import { ILink } from './navbar';
import { BsTelegram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { IconType } from 'react-icons';

const quickLinks: ILink[] = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product/highlights' },
  { label: "services", href: '/services' },
  { label: "live support", href: '/support/contact' },
  { label: "order demo", href: '/product/live-demo' },
]

interface ISocial {
  Icon: IconType;
  href: string;
  label: string;
  position?: 'left' | 'right';
}

const socials: ISocial[] = [
  {
    Icon: BsTelegram,
    href: 'https://t.me/avscms',
    label: 'Telegram',
    position: 'right'
  },
  {
    Icon: BsFacebook,
    href: 'https://facebook.com/avscms',
    label: 'Facebook',
    position: 'right'
  },
  {
    Icon: BsTwitter,
    href: 'https://twitter.com/avscms',
    label: 'Twitter',
    position: 'left'
  }
]

const Footer = () => {
  return (
    <div className='w-full bg-white py-6 xl:px-[12%] lg:px-[10%] md:px-[7%] sm:px-[5%] px-[3%]'>
      <div className='py-6 border-b border-[#D7D7D7] w-full grid grid-cols-2  lg:grid-cols-4 gap-6'>
        {
          links.filter(link => link.hasDropdown).map((link) => (
            <div key={link.label} className='space-y-4 capitalize'>
              <h2 className='text-grayish-100 sm:text-xl text-base font-medium'>{link.label}</h2>
              <div>
                {
                  link.subLinks?.map((subLink) => (
                    <Link href={subLink.href!} key={subLink.label}>
                      <p className='text-grayish-200 text-sm xs:text-base py-[2px] opacity-80   font-normal hover:text-grayish-100 transition-colors duration-200'>{subLink.label}</p>
                    </Link>
                  ))
                }
              </div>
            </div>
          ))
        }
        <div className='space-y-3'>
          <h2 className='capitalize font-medium sm:text-xl text-base text-grayish-100'>latest news</h2>
          <div className='space-y-2'>
            <p className='text-grayish-200 text-sm xs:text-base '>海量視頻嵌入器和自動視頻嵌入器插件已更新並可在客戶區下載。</p>
            <p className='text-grayish-300 text-sm xs:text-base'>April 23, 2022</p>
          </div>
        </div>
      </div>

      <div className='py-6 w-full flex items-center md:flex-row flex-col gap-3 justify-between border-b border-[#D7D7D7]'>
        <div className='flex flex-col sm:flex-row sm:gap-5 gap-2 items-center '>
          <h2 className='capitalize text-xl font-medium text-grayish-100'>聯繫方式</h2>
          <div className='flex items-center sm:gap-5 gap-2 sm:text-base text-sm'>
            <p>
              <span className='text-grayish-100'>地址： </span>
              <span className='text-grayish-200 '>加拿大</span>
            </p>
            <p>
              <span className='text-grayish-100'>郵政: </span>
              <span className='text-grayish-200 '>聯繫表</span>
            </p>
          </div>
        </div>
        <div className='flex items-center gap-4 text-grayish-100 '>
          {
            socials.map((social) => (
              <Link href={social.href} target='_blank' rel='noreferrer' key={social.label}>
                <div className='flex gap-1 items-center sm:text-xl text-sm hover:text-grayish-200 font-medium transition-colors duration-200'>
                  {social.position === "left" && <p className='text-grayish-100 hover:text-grayish-200'>{social.label}</p>
                  }
                  <social.Icon size={20} />
                  {social.position === "right" && <p className='text-grayish-100 hover:text-grayish-200'>{social.label}</p>
                  }
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <div className='pt-6 w-full flex md:items-center gap-2 md:flex-row flex-col justify-between '>
        <p className='text-grayish-200 sm:text-base text-sm sm:text-start text-center'>版權所有 © 2008-2023 AVSCMS。 版權所有。</p>
        <div className='flex sm:gap-3 gap-2 sm:text-base text-sm xs:flex-nowrap flex-wrap'>
          {
            quickLinks.map((link) => (
              <Link href={link.href!} key={link.label}>
                <p className='text-grayish-200 opacity-80   font-normal hover:text-grayish-100 capitalize transition-colors duration-200'>{link.label}</p>
              </Link>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Footer