import React, { FC } from 'react'
import { SearchParams } from '../web/page'
import { fetchSearchImage } from '@/services/apiService';
import NoResults from '@/components/NoResults/NoResults';
import ImageResults from '@/components/ImageResults/ImageResults';

const ImageSearch: FC<{ searchParams: SearchParams }> = async ({ searchParams }) => {

    const startIndex = searchParams.start || '1';
    const getSearchImageData = await fetchSearchImage(searchParams.searchTerm, startIndex);

    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (!getSearchImageData) {
        return (
            <NoResults searchParams={searchParams.searchTerm} />
        )
    }

    return (
        <>
            {
                getSearchImageData && <ImageResults getSearchImageData={getSearchImageData} />
            }
        </>
    )
}

export default ImageSearch
