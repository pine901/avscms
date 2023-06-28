import CoreFeature from '@/components/features/CoreFeature';
import Head from 'next/head';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { coreFeatures, versions } from '../../../store/data/versions';


const Features = () => {

    const [activeVersion, setActiveVersion] = React.useState(versions[0]);

    return (
        <>
            <Head>
                <title>AVSCMS | 系統特點</title>
            </Head>
            <main className='w-full flex flex-col items-center gap-8 page'>
                <div className='flex flex-col gap-5 items-center'>
                    <h2 className='page-title'>完整的功能列表</h2>
                    <div className='flex sm:gap-3 gap-2 items-center flex-wrap md:flex-nowrap justify-center'>
                        {
                            versions.map((version, index) => (
                                <button
                                    onClick={() => setActiveVersion(version)}
                                    key={index}
                                    className={`border border-transparent md:px-5 sm:px-4 px-3 sm:text-base text-sm py-1 transition-all duration-200 rounded-2xl md:text-lg  ${activeVersion === version ? 'bg-primary-100 text-white' : 'bg-transparent border  border-grayish-200 text-grayish-200'}`}>
                                    {version.versionNumber.toFixed(1)}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className='rounded-xl bg-white md:py-12 sm:py-8 py-6 w-full md:gap-8 gap-4 flex flex-col items-center'>
                    <h2 className='text-grayish-100 md:text-3xl text-2xl font-medium'>AVS 新功能 {activeVersion.versionNumber.toFixed(1)}</h2>
                    <ul className='grid self-start grid-cols-1 md:grid-cols-2 list-disc list-inside  md:gap-y-6 sm:gap-y-4 gap-y-2 gap-x-10 xl:px-12 md:px-8  px-8'>
                        {
                            activeVersion.features.map((feat, index) => (
                                <li key={index} className={` ${typeof feat === "string" ? "text-grayish-200" : "text-grayish-100 font-medium"} md:text-lg sm:text-base text-sm font-light space-y-2`}>
                                    {typeof feat === "string" ? feat : feat.title
                                    }
                                    {
                                        typeof feat !== "string" && (
                                            <div className='space-y-2'>
                                                {
                                                    feat.subFeatures.map((subFeat, index) => (
                                                        <div key={subFeat} className='flex space-x-2 pt-2'>
                                                            <AiFillCheckCircle className='text-green-500 shrink-0 text-md' />
                                                            <span className='text-grayish-200 font-light text-sm'>{subFeat}</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='rounded-xl bg-white w-full md:gap-8 gap-4 md:p-8 sm:p-6 p-4 flex flex-col items-center'>
                    <h2 className='text-grayish-100 md:text-3xl text-2xl font-medium'>核心特性(AVS 1.0)</h2>
                    <div
                        className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full'
                    >
                        {
                            coreFeatures.map((feature, index) => (
                                <CoreFeature key={index}  {...feature} index={index} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Features