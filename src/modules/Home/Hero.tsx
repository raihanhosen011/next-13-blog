// imports
import Link from 'next/link'
import React from 'react'


const Hero = () => {
  return (
    <section className='relative md:pt-48 py-36' >
      <div className='container' >

        <div className="grid grid-cols-1 justify-center text-center mt-10">
          <div className="relative">
            <div className="relative mb-5">
              <h1 className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl">Discover rate <br /> collection or
                <span className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">Arts &amp; NFTs</span>
              </h1>

              <div
                className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:left-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]">
              </div>

              <div
                className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/20 dark:after:bg-violet-600/40 after:bottom-[0] after:right-[15%] after:-z-1 after:rounded-full after:animate-ping">
              </div>
            </div>

            <p className="text-slate-400 dark:text-white/70 text-lg max-w-xl mx-auto">We are a huge marketplace dedicated to
              connecting great artists of all Giglink with their fans and unique token collectors!
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero