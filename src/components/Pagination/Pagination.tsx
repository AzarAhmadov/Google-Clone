'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation';
import React, { FC } from 'react'

const Pagination: FC = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm: string | null = searchParams.get('searchTerm');
    const startIndex: number = +(searchParams.get('start') || '1');

    return (
        <div className="flex gap-3">
            {startIndex >= 10 && (
                <Link
                    href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
                    className='bg-blue-500 hover:bg-blue-400 transition-all text-sm text-white flex items-center rounded-lg py-[6px] px-3'>
                    <svg fill='#fff' className='w-4 h-[13px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                    Previous
                </Link>
            )}
            {startIndex <= 90 && (
                <Link
                    href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
                    className='bg-blue-500 hover:bg-blue-400 transition-all text-sm text-white flex items-center rounded-lg py-1 px-3'>
                    Next
                    <svg fill='#fff' className='w-4 h-[13px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                </Link>
            )}
        </div>
    )
}

export default Pagination
