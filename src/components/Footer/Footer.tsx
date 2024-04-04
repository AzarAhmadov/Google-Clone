import CountryName from '@/components/CountryName/CountryName'
import React, { FC } from 'react'

const Footer: FC = () => {
    return (
        <footer className='text-sm text-gray-500 bg-[#f2f2f2] w-full'>
            <div className='border-b sm:px-4 py-3 sm:py-2 lg:px-8'>
                <CountryName />
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center px-8 py-3 space-y-3 md:space-y-3'>
                <ul className='flex items-center space-x-6'>
                    <li className='hover:underline cursor-pointer'>About</li>
                    <li className='hover:underline cursor-pointer'>Advertising</li>
                    <li className='hover:underline cursor-pointer'>Business</li>
                </ul>
                <ul className='flex items-center space-x-6'>
                    <li className='hover:underline cursor-pointer'>Privacy</li>
                    <li className='hover:underline cursor-pointer'>Terms</li>
                    <li className='hover:underline cursor-pointer'>Settings</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
