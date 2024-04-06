'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) => {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='text-center mt-11 flex-col flex items-center justify-center'>
            <h2 className='text-[20px]'>Something went wrong!</h2>
            <button
                onClick={
                    () => reset()
                }
                type="button"
                className="text-white mt-4 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Try again
            </button>
        </div>
    )
}

export default Error