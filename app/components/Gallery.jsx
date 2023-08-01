import React from 'react'

const Gallery = () => {
  return (
    <div>
<figure className="max-w-lg">
  <img className="h-auto max-w-full rounded-lg" src="./mausoleum.jpg" alt="image description"/>
  <h2 className='text-white'
                style={{ fontFamily: 'var(--font-permanent-marker)' }}>Yassawi Mausoleum</h2>
  <figcaption className="mt-2 text-sm text-left text-[#9EF01A]">   The construction of the mausoleum began in 1389, several centuries
             after Akhmet Yassawi&apos;s death, during the reign of Timur
             Tamerlane, the Central Asian conqueror. The mausoleum complex
             includes various structures, with the main highlight being the
             impressive domed mausoleum, which houses the tomb of Akhmet Yassawi.</figcaption>
</figure>

<figure className="max-w-lg mt-10">
  <img className="h-auto max-w-full rounded-lg" src="./aishabibi.jpg" alt="image description"/>
  <h2 className='text-white'
      style={{ fontFamily: 'var(--font-permanent-marker)' }}>Aishi Bibi Mausoleum</h2>
  <figcaption className="mt-2 text-sm text-left text-[#9EF01A]">   A historical mausoleum located in the southern region of Kazakhstan.
             It is an architectural gem and a significant cultural monument in
             Central Asia.
             The mausoleum is believed to have been built in the 12th century,
             during the period of the Karakhanid dynasty. It is named after Aisha
             Bibi, who ....................</figcaption>
</figure>
    </div>
  )
}

export default Gallery