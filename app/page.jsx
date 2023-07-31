import React from 'react';
import Link from 'next/link';
import './globals.css'

const Home = () => {
  return (
    <div className='w-full md:w-2/3 lg:w-3/4 mx-auto px-0 text-white'
         style={{ fontFamily: 'var(--font-raleway)' }}>
      <div className='my-8 ml-[-8]'>
        <div className='hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[20px]'
                style={{ fontFamily: 'var(--font-permanent-marker)' }}>
          <p>ZERTTE<span className='text-[#38B000]'>SH</span></p>
          <p className='mt-[-11px] h-[13px] w-132 text-base font-[400]'>VISIT & EXPLORE</p>
        </div>


        <h1 className='text-2xl md:text-4xl lg:text-5xl mt-4 absolute top-[98px] text-left font-[400] text-[#38B000]'
                       style={{ fontFamily: 'var(--font-permanent-marker)' }}>
          BE YOUR OWN GUIDE! VISIT BEAUTIFUL PLACES IN KAZAKHSTAN
          AND DISCOVER
          ITS HISTORY IN REAL-TIME
        </h1>

        <a
  href='https://twitter.com/Tubussines69/status/1682683077695270913?s=20'
  target='_blank'
  className='block mt-4'
>
  <div className='p-4 items-center justify-between flex-col mt-80 font-raleway flex h-[60px] w-[315px] sm:w-[250px] gap-[0] rounded-[78px] bg-[#84D1FD] px-[45px] py-[17px] font-[500] text-[#1DA1F3] text-center sm:text-left'>
    <span className='text-xl md:text-2xl'>Introducing Zerttesh</span>
    <img
      src='/twitter.png'
      alt='twitter11111'
      className='h-8 md:h-10'
    />
  </div>
</a>

        <h1 className='text-2xl md:text-4xl lg:text-5xl mt-8'
            style={{ fontFamily: 'var(--font-permanent-marker)' }}>
          Experience A New way of Researching
        </h1>
        <p className='text-base md:text-lg'>
          Our AI-powered web app brings you information and captivating facts
          about Kazakhstan sights you are visiting. It’s time for a journey of
          discovery, right at your fingertips!
        </p>

        <div className='my-8'>
          <img
            src='/mausoleum.jpg'
            alt='mausoleum1115'
            className='w-full h-auto'
          />
          <span style={{ fontFamily: 'var(--font-permanent-marker)' }}>Yassawi Mausoleum</span>
          <p className='text-base md:text-lg'>
            The construction of the mausoleum began in 1389, several centuries
            after Akhmet Yassawi&apos;s death, during the reign of Timur
            Tamerlane, the Central Asian conqueror. The mausoleum complex
            includes various structures, with the main highlight being the
            impressive domed mausoleum, which houses the tomb of Akhmet Yassawi.
          </p>
        </div>

        <div className='my-8'>
          <img
            src='/aishabibi.jpg'
            alt='aishabibi1116'
            className='w-full h-auto'
          />
          <span style={{ fontFamily: 'var(--font-permanent-marker)' }}>Aisha Bibi Mausoleum</span>
          <p className='text-base md:text-lg'>
            A historical mausoleum located in the southern region of Kazakhstan.
            It is an architectural gem and a significant cultural monument in
            Central Asia.
            The mausoleum is believed to have been built in the 12th century,
            during the period of the Karakhanid dynasty. It is named after Aisha
            Bibi, who ...................
          </p>
        </div>

        <h1 className='text-2xl md:text-4xl lg:text-5xl mt-8'
            style={{ fontFamily: 'var(--font-permanent-marker)' }}>
          “The world is a book, and those who do not travel read only a
          page.”—Saint Augustine
        </h1>

        <div className='my-8'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl'
              style={{ fontFamily: 'var(--font-permanent-marker)' }}>Visit, See, Explore</h1>
          <h3 className='text-xl md:text-2xl'>Explore the Kazakhstan Beauty with Zerttesh</h3>
          <Link href='/feature'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
              <p>Get Started</p>
            </button>
          </Link>
        </div>
        
        <footer className="py-8 px-8 flex items-center md:flex-row justify-between font-raleway mt-[60px] h-[35px] w-full bg-[#3E3E3E] pb-[40px] pl-[9px] pr-[22px] pt-[11px] text-left font-[400] ">
  <p className="text-sm md:text-base">
    Zerttesh, Kazakhstan, Aqtau 2023
  </p>
  <div className="mt-4 md:mt-0">
    <a
      href="https://www.linkedin.com/in/nargiza-nurmukhan-7292aktausila/"
      target="_blank"
      className="mx-2"
    >
      <img src="/linkedin.png" alt="linkedin1136" className="h-6 w-6 md:h-8 md:w-8" />
    </a>
    <a
      href="https://www.instagram.com/tubusiness._/"
      target="_blank"
      className="mx-2"
    >
      <img src="/instagram.png" alt="instagram1137" className="h-6 w-6 md:h-8 md:w-8" />
    </a>
  </div>
</footer>

      </div>
    </div>
  );
};

export default Home;
