import React from 'react'
import { Balancer } from 'react-wrap-balancer'
import '../globals.css';

const Homepage = () => {
  return (
    <div>
        {/* <div className='text-white font-bold py-8 px-4 rounded text-xl md:text-2xl' style={{ fontFamily: 'var(--font-permanent-marker)' }}>
          <p>ZERTTE<span className='text-[#38B000]'>SH</span></p>
          <p className='mt-[-11px] h-[13px] w-350 text-base font-[400]'>VISIT & EXPLORE</p>
        </div>
        <h1 className='text-2xl md:text-4xl lg:text-5xl mt-4 ml-4 absolute top-[148px] text-left font-[400] text-[#38B000]' style={{ fontFamily: 'var(--font-permanent-marker)' }}>
          <Balancer>
          BE YOUR OWN GUIDE! VISIT BEAUTIFUL PLACES IN KAZAKHSTAN
          AND DISCOVER
          ITS HISTORY IN REAL-TIME
          </Balancer>
        </h1> */}


          <div className='text-white font-bold py-8 px-4 rounded text-xl md:text-2xl' style={{ fontFamily: 'var(--font-permanent-marker)' }}>
          <p>ZERTTE<span className='text-[#38B000]'>SH</span></p>
          <p className='mt-[-11px] h-[13px] w-350 text-base font-[400]'>VISIT & EXPLORE</p>
        </div>
<h1 className="mb-8 ml-1 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl  text-[#38B000]"
              style={{ fontFamily: 'var(--font-raleway)' }}> BE YOUR OWN GUIDE! VISIT BEAUTIFUL PLACES IN KAZAKHSTAN
          AND DISCOVER
          ITS HISTORY IN REAL-TIME</h1>

<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 rounded-[78px] bg-[#84D1FD]">
    Introducing Zerttesh
    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>

    </div>
  )
}

export default Homepage;