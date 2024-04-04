import React, { FC } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

const Search: FC = () => {
    return (
        <>
            <form
                className='flex border border-gray-200 rounded-full shadow-lg px-6 mdMax:m-0 mdMax:py-0 mdMax:mr-4 py-1 ml-10 mr-5 flex-grow max-w-2xl items-center'
            >
                <input
                    className='w-full focus:outline-none pe-3'
                    type="text"
                />
                <RxCross2
                    className='text-2xl text-gray-500 cursor-pointer sm:mr-3'
                />
                <BsFillMicFill className='hidden hover:cursor-pointer sm:inline-flex text-4xl text-blue-500 border-s-2 border-gray-200 mr-3 pl-4' />
                <AiOutlineSearch
                    className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer'
                />
            </form>
        </>
    )
}

export default Search
