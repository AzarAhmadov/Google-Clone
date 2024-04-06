import Link from 'next/link';
import Pagination from '../Pagination/Pagination';
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
        <div className='mt-4'>
            <div className='grid md:gap-4 gap-2 grid-cols-2 md:grid-cols-5 md:px-5 px-3'>
                {getSearchImageData.map((result: ImageResult) => (
                    <div className='md:mb-3' key={result?.link}>
                        <div className='group'>
                            <Link href={result?.image?.contextLink}>
                                <img
                                    src={result?.link ? result.link : 'https://cdn.vectorstock.com/i/500p/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg'}
                                    alt={result?.title}
                                    className='h-[140px] object-center rounded-sm lg:h-60 group-hover:shadow-xl w-full object-cover transition-shadow duration-300'
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
            <div className='mb-7 mt-5 md:mt-3 flex justify-center'>
                <Pagination />
            </div>
        </div>
    );
}

export default ImageResults;
