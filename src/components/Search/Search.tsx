'use client'

import React, { FC, useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter, useSearchParams } from 'next/navigation';

const Search: FC = () => {

    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('searchTerm');
    const [term, setTerm] = useState(searchTerm || '')
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
        e.preventDefault()
        if (!term.trim()) return;
        router.push(`/search/web?searchTerm=${term}`)
    }

    return (
        <>
            <form
                className='flex border border-gray-200 rounded-full shadow-lg md:px-6 md:py-1 md:ml-10 md:mr-5 w-full px-4 py-[2px] flex-grow max-w-2xl items-center'
                onSubmit={handleSubmit}
            >
                <input
                    className='w-full focus:outline-none pe-3'
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                {
                    term.length >= 1 &&
                    <RxCross2
                        className='text-2xl text-gray-500 cursor-pointer sm:mr-3'
                        onClick={() => setTerm('')}
                    />
                }
                <BsFillMicFill
                    className='hidden shrink-0 hover:cursor-pointer sm:inline-flex text-4xl text-blue-500 border-s-2 border-gray-200 mr-3 pl-4'
                />
                <AiOutlineSearch
                    className='text-2xl hidden shrink-0 sm:inline-flex text-blue-500 cursor-pointer'
                    onClick={handleSubmit}
                />
            </form>
        </>
    )
}

export default Search
