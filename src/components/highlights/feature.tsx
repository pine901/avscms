import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import React from 'react'


interface Props {
    title: string;
    description: string;
    index: number;
}
const HightlightFeature = ({ title, description, index }: Props) => {
    const { isMobile, isTablet, isDesktop } = useMediaQuery()
    return (
        <div className='flex gap-2 items-start'>
            <Image src={`/icons/features/${index + 1}.svg`} alt='' width={
                isMobile ? 30 : isTablet ? 40 : isDesktop ? 50 : 50
            } height={50} />
            <div className='space-y-1'>
                <h3 className='lg:text-2xl md:text-xl text-lg text-grayish-100 font-medium'>{title}</h3>
                <p className='md:text-lg sm:text-base text-sm text-grayish-200/80'>{description}</p>
            </div>
        </div>
    )
}

export default HightlightFeature