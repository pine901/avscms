import useMediaQuery from "@/hooks/useMediaQuery"
import { IFeature } from "@/pages/services/hosting"
import { AiFillCheckCircle } from "react-icons/ai"

const Feature = ({ texts }: IFeature) => {
    const { isMobile, isTablet } = useMediaQuery();

    return (
        <div className='flex md:items-center gap-x-2'>
            <AiFillCheckCircle size={isMobile ? 20 : isTablet ? 24 : 28} className='text-green-500 shrink-0' />
            <p className='lg:text-xl md:text-lg sm:text-base text-sm text-grayish-100 space-x-1'>
                {texts.map((text, index) => {
                    return (
                        <span key={index} className={`${text.bold ? 'font-medium' : 'font-light'} ${text.underlined ? 'underline' : ''}`}>{text.text}</span>
                    )
                }
                )}
            </p>
        </div>
    )
}

export default Feature;