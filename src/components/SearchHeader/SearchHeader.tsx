import Image from 'next/image';
import Link from 'next/link';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import Search from '../Search/Search';
import { FC } from 'react';
import SearchHeaderOptions from '../SearchOptions/SearchOptions';

const SearchHeader: FC = () => {
    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex-row md:flex w-full  md:p-6 p-3 items-center justify-between'>
                <Link href='/'
                    className='flex items-center justify-center md:mb-0 mb-3'
                >
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
                        alt='Google Logo'
                        width={100}
                        height={40}
                        priority
                        style={{ width: 'auto' }}
                    />
                </Link>
                <div className='flex-1'>
                    <Search />
                </div>
                <div className='hidden md:inline-flex space-x-2'>
                    <RiSettings3Line className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
                    <TbGridDots className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer' />
                </div>
                <button className='md:relative md:top-0 md:right-0 absolute top-[19px] right-[10px] bg-blue-500 text-white md:px-6 md:py-2 py-[5px] px-4 font-medium text-[13px] lg:text-[17px] rounded-md hover:brightness-105 hover:shadow-md transition-shadow ml-2'>
                    Sign in
                </button>
            </div>
            <SearchHeaderOptions />
        </header>
    )
}

export default SearchHeader
