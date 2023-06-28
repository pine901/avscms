import React from 'react'
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

interface IAdvantage {
  title: string;
  description: string;
  icon: string;
}

const advantages: IAdvantage[] = [
  {
    title: '視頻',
    description: '創建視頻網站/社區，用戶可以輕鬆上傳、託管、分享和觀看成人和非成人視頻。',
    icon: 'play.svg'
  },
  {
    title: '相片',
    description: '創建視頻網站/社區，用戶可以在其中輕鬆上傳、託管、共享和瀏覽成人和非成人照片庫。',
    icon: 'camera.svg'
  },
  {
    title: '博客',
    description: '創建視頻網站/社區，用戶可以在其中輕鬆託管和管理自己的成人或非成人（視頻）博客。',
    icon: 'note.svg'
  }
]

const Advantages = () => {
  const { isMobile, isTablet } = useMediaQuery();
  return (
    <div className='w-full main-padding flex flex-col items-center lg:gap-10 md:gap-8 sm:gap-6 gap-4'>
      <div className='flex flex-col items-center gap-3'>
        <h3 className='text-grayish-100 lg:text-4xl md:text-3xl text-2xl text-center capitalize'>我們的優勢是什麼</h3>
        <p className='text-grayish-100/80 lg:text-xl md:text-lg sm:text-base text-sm text-center md:text-start'>
          使用 AVSCMS 及其高效的配置功能輕鬆啟動和設置
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-6'>
        {
          advantages.map((advantage, index) => (
            <div key={index} className='flex flex-col items-center md:gap-3 gap-2'>
              <Image alt={advantage.title} src={'/icons/' + advantage.icon} width={isMobile ? 40 : isTablet ? 50 : 60} height={isMobile ? 40 : isTablet ? 50 : 60} />
              <h3 className='text-grayish-100 md:text-2xl text-xl capitalize'>{advantage.title}</h3>
              <p className='text-grayish-100/80 lg:text-lg md:text-base text-sm text-center max-w-md'>{advantage.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Advantages