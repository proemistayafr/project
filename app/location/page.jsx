'use client'
import { useState } from "react";
import getPlaceInfo from "../backend/getPlaceInfo";

const Feature = () => {
   const [locationText, setLocationText] = useState('');

   const handleGetLocation = async () => {
     if ('geolocation' in navigator) {
       navigator.geolocation.getCurrentPosition(
         async (position) => {
           const { latitude, longitude } = position.coords;
           const res = await getPlaceInfo(latitude, longitude)
           setLocationText(`${res?.place_name.address_components[0]}\n${res?.interesting_facts}`);
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
    <div className="flex items-center justify-center h-screen">
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto p-4 text-white"
         style={{ fontFamily: 'var(--font-raleway)' }}>
    <div className="my-8">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#38B000] text-center"
          style={{ fontFamily: 'var(--font-permanent-marker)' }}>
        READY FOR RESEARCH?
      </h1>
      <h2 className="text-base md:text-lg text-center mt-6"
          style={{ fontFamily: 'var(--font-raleway)' }}>
        Click the button below, AI will tell you interesting facts and provide information about the place you are visiting
      </h2>

    <div className="flex items-center justify-center mt-8">
      <button
        onClick={handleGetLocation}
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gradient-to-b from-[rgba(0,114,0,1)] to-[black] hover:bg-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      >
        <p>Get Location</p>
      </button>
    </div>
    </div>

      <div className="mt-80">
        {locationText && <p className="text-base md:text-lg pb-40">{locationText}</p>}
      </div>
    </div>
  </div>
  )
}

export default Feature