import SearchHeader from '@/components/SearchHeader/SearchHeader'
import React, { FC, ReactNode } from 'react'

type Childern = {
    children: ReactNode
}

const layout: FC<Childern> = ({ children }) => {
    return (
        <>
            <SearchHeader />
            {children}
        </>
    )
}

export default layout
