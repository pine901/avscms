import React from 'react'
import { reviewsData } from '.';


interface Props {
    activeReviewIndex: number;
    setActiveReviewIndex: React.Dispatch<React.SetStateAction<number>>;
}

const MobileView = ({ }: Props) => {
    return (
        <div className='block md:hidden'>

        </div>
    )
}

export default MobileView