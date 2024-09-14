import Image from 'next/image'
import React from 'react'
import h from '../assets/remote.png'


export const HeroSection = () => {
    return (
        <div className=''>
            <div className='h-[80vh] flex justify-between items-center p-2  '>
                <div className='-translate-y-14'>
                    <h1 className='text-7xl font-extrabold text-blue-600 font-montserrat my-4 '>Find Your Perfect Remote Jobs</h1>
                    <p className='font-medium text-lg text-gray-600'>World's #1 Remote job portal that help you to find your First Remote job.</p>
                    <div className='flex gap-14 my-10'>
                        <button className='px-6 py-2 rounded-lg border border-black text-black font-semibold'>Find Job</button>
                        <button className='px-6 py-2 rounded-lg bg-black text-white font-semibold'>Post a Jobs</button>
                    </div>
                </div>
                <div className=' flex justify-center w-1/2 '>
                    <img src='remote1.png' alt="" className='' />
                </div>

            </div>
        </div>
    )
}
