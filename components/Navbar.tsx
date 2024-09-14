import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <div className=' p-4  shadow'>
            <div className='flex justify-between items-center max-w-screen-2xl mx-auto'>
                <div className='font-bold text-4xl font-inter'>remote1</div>
                <div className='flex justify-between gap-8 text-lg'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'} >Find jobs</Link>
                    <Link href={'/'}>Create Jobs</Link>
                </div>
                <div className='flex justify-between items-center gap-8'>
                    <button className='px-6 py-2 rounded-lg border font-semibold'>Log in</button>
                    <button className='px-6 py-2 rounded-lg bg-black text-white font-semibold'>Sign up</button>
                </div>
            </div>
        </div>
    )
}
