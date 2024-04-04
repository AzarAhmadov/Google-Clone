import HomeHeader from '@/components/HomeHeader/HomeHeader'
import HomeSearch from '@/components/HomeSearch/HomeSearch'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <HomeHeader />
      <section className='flex items-center justify-center flex-col mt-24 sm:mt-12'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          alt='Google Logo'
          width={300}
          height={100}
          className='md:w-[300px] sm:w-[180px]'
          priority
        />
        <HomeSearch />
      </section>
    </>
  )
}

export default Home
