import React from 'react'

const End = () => {
  return (
    <div className='text-center mt-20'>

<h1 className="mb-2 text-2xl font-[400] leading-none tracking-tight  md:text-5xl lg:text-6xl text-[#38B000]"
    style={{ fontFamily: 'var(--font-permanent-marker)' }}>VISIT, SEE, EXPLORE</h1>
<p className="mb-2 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-white">Explore the Beauty of Kazakhstan with <span style={{ fontFamily: 'var(--font-permanent-marker)' }}>Zerttesh</span></p>
{/* <a href='./feature2' className=" mb-20 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gradient-to-b from-[rgba(0,114,0,1)] to-[black] hover:bg-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
   Get Started
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a> */}

<div className="inline-flex rounded-md shadow-sm">
<a href='./webcam'>
  <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-500  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
  <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-7 mr-2'height="48" viewBox="0 -960 960 960" width="48"><path d="M440-437ZM100-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h274v60H348l-73 87H100v513h680v-414h60v414q0 24-18.5 42T780-120H100Zm680-574v-86h-86v-60h86v-87h60v87h87v60h-87v86h-60ZM439.5-267q72.5 0 121.5-49t49-121.5q0-72.5-49-121T439.5-607q-72.5 0-121 48.5t-48.5 121q0 72.5 48.5 121.5t121 49Zm0-60q-47.5 0-78.5-31.5t-31-79q0-47.5 31-78.5t78.5-31q47.5 0 79 31t31.5 78.5q0 47.5-31.5 79t-79 31.5Z"/></svg>
    Photo
  </button>
</a>

<a href='./location'>
  <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
  <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-7 mr-1' height="48" viewBox="0 -960 960 960" width="48"><path d="M480.089-490Q509-490 529.5-510.589q20.5-20.588 20.5-49.5Q550-589 529.411-609.5q-20.588-20.5-49.5-20.5Q451-630 430.5-609.411q-20.5 20.588-20.5 49.5Q410-531 430.589-510.5q20.588 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.292-192.895Q589.417-820 480-820t-184.708 75.105Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
    Location
  </button>
</a>
  </div>
    </div>
  )
  }

export default End