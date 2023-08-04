import React from 'react'
import Link from 'next/link'

const End = () => {
  return (
    <div className='text-center mt-20'>

<h1 className="mb-2 text-2xl font-[400] leading-none tracking-tight  md:text-5xl lg:text-6xl text-[#38B000]"
    style={{ fontFamily: 'var(--font-permanent-marker)' }}>VISIT, SEE, EXPLORE</h1>
<p className="mb-2 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-white">Explore the Beauty of World with <span style={{ fontFamily: 'var(--font-permanent-marker)' }}>Zerttesh</span></p>
<a href='./feature' className=" mb-20 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gradient-to-b from-[rgba(0,114,0,1)] to-[black] hover:bg-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
   Get Started
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

    </div>
  )
  }

export default End