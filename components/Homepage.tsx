

'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Homepage = () => {

  return (
   <div className='content h-screen p-14 font-pretendard w-full bg-gradient-to-t from-zinc-400 to-zinc-100'>
    <div className='flex flex-col items-start justify-center mt-24 '>
      <h1 className='text-6xl font-bold self-center bg-gradient-to-t from-zinc-500 to-zinc-700 bg-clip-text text-transparent p-10'> 
        Turning Caffeine into Code.
      </h1>
      <h2 className='text-xl font-semibold self-center bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent tracking-wider'>Hey, I'm Ratan Rathod</h2>
      <p className='text-sm font-medium self-center bg-gradient-to-r from-zinc-500 to-zinc-700 bg-clip-text text-transparent tracking-wide'>
        I'm a frontend developer and UI/UX designer based in India.
      </p>
    </div>
   </div>
  )
}

export default Homepage
