import React from 'react'

const Quote = () => {
  return (
    <div className='mt-40 '>
<blockquote className="text-xl italic font-[400] dark:text-white text-center"
            style={{ fontFamily: 'var(--font-permanent-marker)' }}>
    <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
    <p>“The world is a book, and those who do not travel read only a
                 page.”—Saint Augustine</p>
</blockquote>

    </div>
  )
}

export default Quote