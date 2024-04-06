import React, { FC } from 'react'
import { SearchParams } from '../web/page'
import { fetchSearchImage } from '@/services/apiService';
import NoResults from '@/components/NoResults/NoResults';
import ImageResults from '@/components/ImageResults/ImageResults';

const ImageSearch: FC<{ searchParams: SearchParams }> = async ({ searchParams }) => {

    const getSearchImageData = await fetchSearchImage(searchParams.searchTerm);

    console.log(getSearchImageData)

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
