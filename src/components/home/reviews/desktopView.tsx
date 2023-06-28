import Image from 'next/legacy/image';
import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { reviewsData } from '.';

interface Props {
  activeReviewIndex: number;
  reviewsCount: number;
  setActiveReviewIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DesktopView = ({
  activeReviewIndex,
  setActiveReviewIndex,
  reviewsCount,
}: Props) => {

  return (
    <div className="w-full ">
      <div
        className="w-full rounded-tr-[3rem] bg-center bg-cover bg-no-repeat sm:h-[63vh] h-[60vh] pt-12 xl:pl-[12%] lg:pl-[9%] md:pl-[6%] pl-[3%] bg-gray-900  flex justify-between relative"
        style={{
          backgroundImage: 'url(/images/reviews-bg.png)',
        }}
      >
        <div className="space-y-4 w-full">
          <h2 className="lg:text-4xl md:text-2xl sm:text-xl text-lg text-white font-medium">
          他們對 AVSCMS 的評論
          </h2>
          <div className="w-full flex flex-col items-start pr-6 gap-6">
            <p className='lg:text-2xl md:text-xl sm:text-lg text-base text-white'>
              <span className=''>{reviewsData[activeReviewIndex].user.name}</span>
              <span className='opacity-70'> /  {reviewsData[activeReviewIndex].user.role} </span>
            </p>
            <p className="2xl:max-w-4xl xl:max-w-3xl lg:max-w-2xl  md:max-w-lg max-w-md  text-white opacity-70 font-light xl:text-2xl lg:text-lg  md:text-base sm:text-sm text-xs">
              {reviewsData[activeReviewIndex].content}
            </p>
            <div className="flex items-center gap-3 absolute 2xl:bottom-12 xl:bottom-3 lg:bottom-8 bottom-6 ">
              <button
                disabled={activeReviewIndex === 0}
                className={`w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center ${activeReviewIndex === 0 && 'cursor-default'
                  }`}
                onClick={() => setActiveReviewIndex(activeReviewIndex - 1)}
              >
                <BsArrowLeft
                  className={`text-2xl  ${activeReviewIndex > 0 ? 'text-white hover:text-primary-100' : 'text-grayish-400/50'
                    }`}
                />
              </button>
              <button
                disabled={activeReviewIndex === reviewsCount - 1}
                className={`w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center ${activeReviewIndex === reviewsCount - 1 && 'cursor-default'
                  }`}
                onClick={() => setActiveReviewIndex(activeReviewIndex + 1)}
              >
                <BsArrowRight
                  className={`text-2xl  ${activeReviewIndex < reviewsCount - 1 ? 'hover:text-primary-100 text-white' : 'text-grayish-400/50'
                    }`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 right-3 sm:h-full h-1/2 sm:w-[25vw] w-[40vw] z-10 shrink-0'>
          <Image
            src={`/images/reviewers/${reviewsData[activeReviewIndex].user.profileImage}`}
            layout='fill'
            objectFit='cover'
            alt='reviewer'
            className='z-20 shrink-0'
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
