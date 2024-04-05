import { fetchSearch } from '@/services/apiService';
import Link from 'next/link';
import React, { FC } from 'react'

interface SearchParams {
    searchTerm: string;
}

const WebSearch: FC<{ searchParams: SearchParams }> = async ({ searchParams }) => {

    const getSearchData = await fetchSearch(searchParams.searchTerm);

    if (!getSearchData) {
        return (
            <div className='flex flex-col justify-center items-center pt-8  pe-3 ps-3'>
                <h1 className='text-[17px] lg:text-[24px] mb-2 text-center'>
                    No results found for: {searchParams.searchTerm}
                </h1>
                <p className='text-[14px] lg:text-[16px] text-center'>
                    Try searching the web or images for something else{' '}
                </p>
                <button type="button" className="text-white mt-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <Link href={'/'}>
                        Home
                    </Link>
                </button>
            </div>
        )
    }

    return (
        <>
            asasdad
        </>
    );
}

export default WebSearch
