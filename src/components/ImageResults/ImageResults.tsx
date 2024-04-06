import Link from 'next/link';
interface ImageResult {
    link: string;
    title: string;
    displayLink: string;
    image: {
        contextLink: string;
    };
}
interface Props {
    getSearchImageData: ImageResult[];
}

const ImageResults: React.FC<Props> = ({ getSearchImageData }) => {
    return (
        <div className='sm:pb-24 pb-40 mt-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 px-2 md:px-3 space-x-2 md:space-x-4'>
                {getSearchImageData.map((result: ImageResult) => (
                    <div className='mb-8' key={result?.link}>
                        <div className='group'>
                            <Link href={result?.image?.contextLink}>
                                <img
                                    src={result?.link ? result.link : 'https://cdn.vectorstock.com/i/500p/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg'}
                                    alt={result?.title}
                                    className='h-[140px] lg:h-60 group-hover:shadow-xl w-full object-cover transition-shadow duration-300'
                                />
                            </Link>
                            <Link href={result?.image?.contextLink}>
                                <h2 className='group-hover:underline truncate mt-2 md:text-lg text-[13px]'>
                                    {result?.title}
                                </h2>
                            </Link>
                            <Link href={result?.image?.contextLink}>
                                <p className='group-hover:underline truncate text-[13px] md:text-[16px] text-gray-600'>
                                    {result?.displayLink}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageResults;
