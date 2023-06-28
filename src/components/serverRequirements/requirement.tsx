import { IRequirement } from '@/pages/product/server-requirements'
import { AiFillCheckCircle } from 'react-icons/ai'

const ServerRequirement = ({ name, list }: IRequirement) => {
    return (
        <div className='space-y-2 space-x-2'>
            <div className='flex gap-2'>
                <AiFillCheckCircle className='text-green-500' size={24} />
                <p className='md:text-xl sm:text-lg text-base text-grayish-100 font-medium'>{name}</p>
            </div>
            {
                list && (
                    <ul className=' pl-2 space-y-2'>
                        {
                            list.map((item) => (
                                <li key={item} className='text-grayish-200 sm:text-base text-sm '>{item}</li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default ServerRequirement