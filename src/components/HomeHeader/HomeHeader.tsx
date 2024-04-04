import Link from 'next/link'
import React, { FC } from 'react'
import { TbGridDots } from "react-icons/tb";

const HomeHeader: FC = () => {
    return (
        <header className='flex justify-end lg:p-5 sm:p-3 text-sm'>
            <nav>
                <ul className='flex space-x-4 items-center'>
                    <li>
                        <Link className='hover:underline' href={'https://mail.google.com'}> Gmail </Link>
                    </li>
                    <li>
                        <Link className='hover:underline' href={'https://image.google.com'}> Images </Link>
                    </li>
                    <li>
                        <TbGridDots className='bg-transparent hover:bg-gray-200 hover:cursor-pointer rounded-full text-4xl p-2' />
                    </li>
                    <li>
                        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'> Sign in </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HomeHeader
