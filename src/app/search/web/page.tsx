import NoResults from '@/components/NoResults/NoResults';
import SearchResults from '@/components/SearchResults/SearchResults';
import { fetchSearch } from '@/services/apiService';
import React, { FC } from 'react'
export interface SearchParams {
    searchTerm: string;
    start: string;
}

const WebSearch: FC<{ searchParams: SearchParams }> = async ({ searchParams }) => {

    const startIndex = searchParams.start || '1';
    const getSearchData = await fetchSearch(searchParams.searchTerm, startIndex);

    await new Promise((resolve) => setTimeout(resolve, 1000))

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
