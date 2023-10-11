import React from 'react'

const Hero = () => {
  return (
    <section className='w-full bg-slate-900 pt-8 md:pt-20'>
      <div className='p-6 md:p-12 font-poppins mx-auto max-w-[800px]'>
      <div className='flex flex-col items-center text-slate-50'>
        <p className='uppercase text-md
         text-green-300 font-semibold
         '>Growing with data analytics
        </p>

        <h1 className='text-4xl p-4 sm:text-6xl font-bold sm:p-6'>Grow with data.
        </h1>

        <h2 className='font-semibold  sm:text-4xl'>Fast & flexible financing
        </h2>

        <div className='text-sm sm:text-md flex flex-col items-center p-3'> 
          <p className='font-semibold text-center text-gray-500'>Monitor your data analytics to increase revenue
            for BTS, BTC & SASS <br className='hidden sm:block'/>
            <span>platform</span>
          </p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Hero