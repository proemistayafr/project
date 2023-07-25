"use client"

import React, { useState, useEffect } from 'react';
import getPlaceInfo from '../main/getPlaceInfo';

const IndexPage: React.FC = () => {
  const [locationText, setLocationText] = useState('');

  const handleGetLocation = () => {
    // Check if geolocation is available in the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const res = await getPlaceInfo(latitude, longitude)
          setLocationText(`${res?.place_name}\n${res?.interesting_facts}`);
        },
        (error) => {
          setLocationText('Failed to get your location. Please try again later.');
          console.error('Error getting location:', error);
        }
      );
    } else {
      setLocationText('Geolocation is not supported in this browser.');
    }
  };

  return (



   <div className="bg-auto bg-center h-64" >
<section>
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Ready For  <span className='animate-fade-up bg-gradient-to-br from-green-800 to-white bg-clip-text font-display text-transparent drop-shadow-sm '>Research?</span></h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Click button bellow , AI will tell you interesting facts
                                                                                                                        and provide information about the place you are visiting.</p>
            <button onClick={handleGetLocation} className='my-8 mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-green-700 px-7 py-2 transition-colors hover:bg-blue-400'> Get Location
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m263-263 290-143 143-290-290 143-143 290Zm217-177q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
            </button>

      <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white  dark:border-blue-400">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">You are at....</h5>
    {locationText &&  <p className="font-normal text-gray-500 dark:text-gray-400">{locationText}</p>}
</a>
            
        </div>
    </div>
</section>
   </div>

  );
};

export default IndexPage;
