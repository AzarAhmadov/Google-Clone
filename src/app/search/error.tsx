'use client';

const Error = () => {

    return (
        <div className='flex flex-col justify-center text-center items-center pt-10'>
            <h1 className='text-3xl mb-4'>Something went wrong!</h1>
            <button className='text-blue-500'>Try again</button>
        </div>
    );
}

export default Error