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
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto p-4">
    <div className="my-8">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
        READY FOR RESEARCH?
      </h1>
      <h2 className="text-base md:text-lg">
        Click the button below, AI will tell you interesting facts and provide information about the place you are visiting
      </h2>

      <button
        onClick={handleGetLocation}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
      >
        <p>Get Started</p>
      </button>

      <div className="mt-4">
        {locationText && <p className="text-base md:text-lg">{locationText}</p>}
      </div>
    </div>
  </div>
  )
}

export default Feature