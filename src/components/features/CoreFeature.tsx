import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { ICoreFeat } from "../../../store/data/versions";

interface IProps extends ICoreFeat {
    index: number;
}
const CoreFeature = ({ index, title, sections, items }: IProps) => {
    const [open, setOpen] = React.useState(false);

    const { isMobile } = useMediaQuery()

    return (
        <div>
            <div className={`w-full flex items-center justify-between transition-all cursor-pointer duration-200 ${open ? 'border-b-2 pb-2 text-primary-100' : 'text-grayish-100/90 '}`}
                onClick={() => setOpen(!open)}
            >
                <div className='flex items-center gap-2' >
                    <Image src={`/icons/core-features/${index + 1}.png`} alt='' width={
                        isMobile ? 20 : 30
                    } height={isMobile ? 20 : 30} />
                    <p className='md:text-lg sm:text-base text-sm'>{title}</p>
                </div>
                {open ? <BsChevronUp size={18} /> : <BsChevronDown size={18} />}
            </div>
            {
                (open && sections) && (
                    <div className='py-3 px-2'>
                        {
                            sections.map(sec => (
                                <div key={sec.title} className='flex flex-col gap-2'>
                                    <h3 className='md:text-lg sm:text-base text-sm font-medium'>{sec.title}</h3>
                                    <div className='flex flex-col gap-1'>
                                        {
                                            sec.items.map((item, index) => (
                                                <div key={index} className='flex items-center gap-2 sm:text-base text-xs'>
                                                    <AiFillCheckCircle className='text-green-500 shrink-0' size={20} />
                                                    <span className='text-grayish-200 font-light'>{item}</span>

                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            {
                (open && items) && (
                    <div className='py-3 px-2'>
                        <div className='flex flex-col gap-1'>
                            {
                                items.map((item, index) => (
                                    <div key={index} className='flex items-center gap-2 sm:text-base text-xs'>
                                        <AiFillCheckCircle className='text-green-500 shrink-0' size={20} />
                                        <span className='text-grayish-200 font-light'>{item}</span>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}


export default CoreFeature