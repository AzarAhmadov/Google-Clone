import Link from 'next/link';
import React, { FC } from 'react'
import parse from 'html-react-parser';
import Pagination from '../Pagination/Pagination';
interface SearchResult {
    link: string;
    formattedUrl: string;
    title: string;
    htmlSnippet: string;
}
interface SearchResultsProps {
    getSearchData: SearchResult[];
}

const SearchResults: FC<SearchResultsProps> = ({ getSearchData }) => {
    return (
        <>
            <div className='w-full mx-auto px-3 sm:pl-[12px] md:pl-[14%] lg:pl-52'>
                {/* <p className='text-gray-600 text-sm mb-5 mt-3'>
                    About {getSearchData?.searchInformation.formattedTotalResults} results (
                    {getSearchData?.searchInformation.formattedSearchTime} seconds)
                </p> */}
                {getSearchData?.map((result: SearchResult, idx: number) => (
                    <div className='mb-0 max-w-xl mt-5 lg:mt-6' key={idx}>
                        <div className='group flex flex-col'>
                            <Link className='text-[11px] lg:text-[13px]' href={result.link}>{result.formattedUrl}</Link>
                            <Link
                                href={result.link}
                                className='group-hover:underline decoration-blue-800 text-[15px] lg:text-[18px] truncate font-medium text-blue-800'
                            >
                                {result.title}
                            </Link>
                        </div>
                        <p className='text-gray-600 text-[11px] lg:text-[14px] line-clamp-2'>{parse(result.htmlSnippet)}</p>
                    </div>
                ))}
                <div className='mt-7 mb-7 flex justify-center md:justify-start'>
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default SearchResults
