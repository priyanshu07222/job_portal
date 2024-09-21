import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

export const Footer = () => {
    return (
        <div className=' bg-blue-900 mt-4 h-[30vh] pt-10'>
            <div className='max-w-screen-2xl mx-auto text-white p-4'>
                <div className='flex gap-8 border-b pb-8'>
                    <span className='text-4xl font-bold'>remote1</span>
                    <div>
                        <p className='font-bold text-2xl mb-2'>Follow me on social media</p>
                        <div className='flex gap-4 mt-4'>
                            <BsFacebook size={25} />
                            <BsInstagram size={25} />
                            <BsLinkedin size={25} />
                            <BsTwitter size={25} />
                        </div>
                    </div>
                </div>
                <p className='mt-4'>© 2024 Apna | All rights reserved</p>
            </div>
        </div>
    )
}
