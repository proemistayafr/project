// import React from 'react';
// import styles from './page.module.css'
// import Link from 'next/link';

// const Home = (props) => {
//   return (
//     <div className={styles['container']}>
//       <div className={styles['desktop1']}>
//         <span className={styles['text1']}>
//             BE YOUR OWN GUIDE! VISIT BEAUTIFUL PLACES IN KAZAKHSTAN AND DISCOVER
//             ITS HISTORY IN REAL-TIME
//         </span>
//         <div className={styles['group2']}>
//           <span className={styles['text2']}>
//             <span>VISIT&amp;EXPLORE</span>
//           </span>
//           <span className={styles['text4']}>
//             <span className={styles['text5']}>zertte</span>
//             <span className={styles['text6']}>sh</span>
//           </span>
//         </div>
//         <a
//           href="https://twitter.com/Tubussines69/status/1682683077695270913?s=20"
//           target="_blank">
//         <div className={styles['frame3']}>
//           <div className={styles['group8']}>
//             <span className={styles['text07']}>
//               <span>Introducing Zerttesh</span>
//             </span>
//             <img src='/twitter.png' alt="twitter11111" className={styles['twitter11']} />

//           </div>
//         </div>
//         </a>
//         {/* fnsjkd */}
//         <span className={styles['text09']}>
//           <span>experience a new way of researching</span>
//         </span>
//         <div className={styles['group1']}>
//           <img src='/mausoleum.jpg' alt="mausoleum1115" className={styles['mausoleum1']} />
//           <img src='/aishabibi.jpg' alt="aishabibi1116" className={styles['aishabibi1']} />
//         </div>
//         <span className={styles['text11']}>
//           <span>
//             Our AI-powered web app brings you information and captivating facts
//             about Kazakhstan sights you are visiting. It’s time for a journey of
//             discovery, right at your fingertips!
//           </span>
//         </span>
//         <div className={styles['group5']}>
//           <span className={styles['text13']}>
//             <span>aisha bibi mausoleum</span>
//           </span>
//           <span className={styles['text15']}>
//             <span>
//               <span>
//                 A historical mausoleum located in the southern region of
//                 Kazakhstan. It is an architectural gem and a significant
//                 cultural monument in Central Asia.
//               </span>
//               <br></br>
//               <span>
//                 The mausoleum is believed to have been built in the 12th
//                 century, during the period of the Karakhanid dynasty. It is
//                 named after Aisha Bibi, who ...................
//               </span>
//             </span>
//           </span>
//         </div>
//         <div className={styles['group6']}>
//           <span className={styles['text20']}>
//             <span>Yassawi Mausoleum</span>
//           </span>
//           <span className={styles['text22']}>
//             <span>
//               The construction of the mausoleum began in 1389, several centuries
//               after Akhmet Yassawi&apos;s death, during the reign of Timur
//               Tamerlane, the Central Asian conqueror. The mausoleum complex
//               includes various structures, with the main highlight being the
//               impressive domed mausoleum, which houses the tomb of Akhmet
//               Yassawi.
//             </span>
//           </span>
//         </div>
//         <img src='/gray.png' alt="back1124" className={styles['back1']} />
//         <span className={styles['text24']}>
//           <span>
//             “The world is a book, and those who do not travel read only a
//             page.”—Saint Augustine
//           </span>
//         </span>
//         <img
//           src='back.jpg'
//           alt="Screenshotfrom202307281331071126"
//           className={styles['screenshotfrom202307281331071']}
//         />
//         <span className={styles['text26']}>
//           <span>Visit, See, Explore</span>
//         </span>
//         <span className={styles['text28']}>
//           <span className={styles['text29']}>
//             Explore the beauty of Kazakhstan with
//             <span
//               dangerouslySetInnerHTML={{
//                 __html: ' ',
//               }}
//             />
//           </span>
//           <span className={styles['text30']}>Zertte</span>
//           <span>sh</span>
//         </span>
//         <img src='/4.png' alt="Rectangle2129" className={styles['rectangle2']} />
//         <span className={styles['text32']}>
//           <span>Zerttesh, 2023, Kazakhstan Aktau</span>
//         </span>
//         <Link href='/feature'>
//         <div className={styles['group7']}>
//           <span className={styles['text34']}>
//             <span>Get Location</span>
//           </span>
//         </div>
//         </Link>
//         <span className={styles['text36']}>
//           <span className={styles['text37']}>*</span>
//           <span className={styles['text38']}>generated by</span>
//           <span className={styles['text39']}>
//             <span
//               dangerouslySetInnerHTML={{
//                 __html: ' ',
//               }}
//             />
//           </span>
//           <span className={styles['text40']}>Zertte</span>
//           <span className={styles['text41']}>sh*</span>
//         </span>
//         <div className={styles['group9']}>
//         <a
//           href="https://www.linkedin.com/in/nargiza-nurmukhan-7292aktausila/"
//           target="_blank">
//           <img src='/linkedin.png' alt="linkedin1136" className={styles['linkedin1']} />
//         </a>
//         <a
//           href="https://www.instagram.com/tubusiness._/"
//           target="_blank">
//           <img src='/instagram.png' alt="instagram1137" className={styles['instagram1']} />
//         </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home;


import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='w-full md:w-2/3 lg:w-3/4 mx-auto px-4'>
      <div className='my-8'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          <p>ZERTTESH</p>
          <p>VISIT & EXPLORE</p>
        </button>
        <h1 className='text-2xl md:text-4xl lg:text-5xl mt-4'>
          BE YOUR OWN GUIDE! VISIT BEAUTIFUL PLACES IN KAZAKHSTAN AND DISCOVER
          ITS HISTORY IN REAL-TIME
        </h1>

        <a
          href='https://twitter.com/Tubussines69/status/1682683077695270913?s=20'
          target='_blank'
          className='block mt-4'
        >
          <div className='bg-blue-500 text-white p-4 flex items-center justify-between'>
            <span className='text-xl md:text-2xl'>Introducing Zerttesh</span>
            <img
              src='/twitter.png'
              alt='twitter11111'
              className='h-8 md:h-10'
            />
          </div>
        </a>

        <h1 className='text-2xl md:text-4xl lg:text-5xl mt-8'>
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
          <p className='text-base md:text-lg'>
            A historical mausoleum located in the southern region of Kazakhstan.
            It is an architectural gem and a significant cultural monument in
            Central Asia.
          </p>
          <br />
          <p className='text-base md:text-lg'>
            The mausoleum is believed to have been built in the 12th century,
            during the period of the Karakhanid dynasty. It is named after Aisha
            Bibi, who ...................
          </p>
        </div>

        <h1 className='text-2xl md:text-4xl lg:text-5xl mt-8'>
          “The world is a book, and those who do not travel read only a
          page.”—Saint Augustine
        </h1>

        <div className='my-8'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl'>Visit, See, Explore</h1>
          <h3 className='text-xl md:text-2xl'>Explore the Kazakhstan Beauty with Zerttesh</h3>
          <Link href='/feature'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
              <p>Get Location</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
