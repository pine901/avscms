import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    required?: boolean;
}

const ContactInput = ({ placeholder, label,value, required, onChange, type }: Props) => {
    return (
        <div className='sm:space-y-2 space-y-1'>
            <label htmlFor={label} className='text-grayish-100 opacity-70 lg:text-xl md:text-lg sm:text-base text-sm'>{label} {required && "*"}</label>
            <input
                onChange={onChange}
                type={type}
                value={value}
                className='w-full bg-grayish-400 border-grayish-100 rounded-md md:p-4 p-2 focus:outline-none text-grayish-100 sm:text-base text-sm'
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default ContactInput