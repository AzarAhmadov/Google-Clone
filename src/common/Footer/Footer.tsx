import CountryName from '@/components/CountryName/CountryName'
import React, { FC } from 'react'

const Footer: FC = () => {
    return (
        <footer style={{ background: '#f2f2f2' }} className='flex flex-col w-full p-5 text-gray-500'>
            <div>
                <CountryName />
            </div>
            <div className='flex justify-between w-full'>
                <ul className='flex w-full'>
                    <li className='hover:underline cursor-pointer'>
                        About
                    </li>
                    <li className='hover:underline cursor-pointer'>
                        Advertising
                    </li>
                    <li className='hover:underline cursor-pointer'>
                        Bussiness
                    </li>
                    <li className='hover:underline cursor-pointer'>
                        How Search works
                    </li>
                </ul>
                <ul className='flex'>
                    <li className='hover:underline cursor-pointer'>
                        Privacy
                    </li>
                    <li className='hover:underline cursor-pointer'>
                        Terms
                    </li>
                    <li className='hover:underline cursor-pointer'>
                        Settings
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer
