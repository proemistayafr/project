"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.css'
import getPlaceInfo from "../backend/getPlaceInfo";

const Feature = (props) => {
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
    <div className={styles['container']}>
      <div className={styles['desktop2']}>
        <span className={styles['text']}>
          <span>READY FOR RESEARCH?</span>
        </span>
        <button onClick={handleGetLocation}
                className={styles['group4']}>
          <span className={styles['text02']}>
            <span>Get Started</span>
          </span>
        </button>
        <div className={styles['rectangle5']}>
        <span className={styles['text04']}>
        {locationText &&<span>{locationText}</span>}
        </span>
        </div>
        <span className={styles['text06']}>
          <span>click button below, ai</span>
          <br></br>
          <span>will tell you interesting facts</span>
          <br></br>
          <span>and provide information about </span>
          <br></br>
          <span>the sight you visiting now</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default Feature;