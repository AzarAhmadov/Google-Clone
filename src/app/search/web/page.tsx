import NoResults from '@/components/NoResults/NoResults';
import SearchResults from '@/components/SearchResults/SearchResults';
import { fetchSearch } from '@/services/apiService';
import Link from 'next/link';
import React, { FC } from 'react'

export interface SearchParams {
    searchTerm: string;
}

const WebSearch: FC<{ searchParams: SearchParams }> = async ({ searchParams }) => {

    const getSearchData = await fetchSearch(searchParams.searchTerm);

    if (!getSearchData) {
        return (
            <NoResults searchParams={searchParams.searchTerm} />
        )
    }

    return (
        <>
            {getSearchData && <SearchResults getSearchData={getSearchData} />}
        </>
    );
}

export default WebSearch
