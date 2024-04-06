import Link from 'next/link'
import React, { FC } from 'react'

const NoResults: FC<{ searchParams: string }> = async ({ searchParams }) => {
    return (
        <div className='flex flex-col justify-center items-center pt-8  pe-3 ps-3'>
            <h3 className='text-[17px] lg:text-[24px] mb-2 text-center'>
                No results found for: {searchParams}
            </h3>
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

export default NoResults
