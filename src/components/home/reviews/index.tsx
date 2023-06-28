import React from 'react'
import DesktopView from './desktopView';
import MobileView from './mobileView';

interface IUser {
    name: string;
    role: string;
    profileImage: string;
}

export const users: IUser[] = [
    {
        name: "Mike Felson",
        role: " 站長",
        profileImage: '1.png'
    },
    {
        name: "Jason Cook",
        role: ' 站長',
        profileImage: '2.png'
    },
    {
        name: "Antony Tailor",
        role: 'Adult 站長',
        profileImage: '3.png'
    },
    {
        name: "Manuel Pellegrini",
        role: '廣告專家',
        profileImage: '4.png'
    }
]

export interface IReview {
    content: string;
    user: IUser;
}

export const reviewsData: IReview[] = [
    {
        content: "The best tube script in the adult industry. Period. It has all the features you will ever need including HD support and mobile / tablet interface. The support is fast and effective. They convinced me to purchase more licenses as well as some of their other scripts.",
        user: users[0]
    },
    {
        content: "I was skeptical at first, but this tube script exceeded my expectations. The HD support and mobile/tablet interface make it incredibly user-friendly. The customer support team was prompt and helpful in resolving any issues I encountered. I would highly recommend this script to anyone in the adult industry.",
        user: users[1]
    },
    {
        content: "After using this tube script for some time now, I can confidently say that it is worth every penny. The range of features it offers is impressive, and the HD support ensures top-notch video quality. The mobile/tablet interface is a great addition, making it accessible on all devices. The support team has been responsive and provided excellent assistance whenever needed. I'm a satisfied customer and would definitely consider purchasing more licenses from them.",
        user: users[2]
    },
    {
        content: "As someone new to the adult industry, finding the right tube script was crucial for me. I'm glad I came across this one. It has proven to be the perfect solution with its comprehensive features and excellent HD support. The mobile/tablet interface makes it easy to navigate, and the customer support team has been patient and helpful throughout. I'm impressed with the performance and would recommend it to others.",
        user: users[3]
    }
];

const Reviews = () => {
    const [activeReviewIndex, setActiveReviewIndex] = React.useState<number>(0);
    return (
        <DesktopView reviewsCount={reviewsData.length} activeReviewIndex={activeReviewIndex} setActiveReviewIndex={setActiveReviewIndex} />
    )
}

export default Reviews