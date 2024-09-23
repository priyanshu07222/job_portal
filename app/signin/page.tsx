import { SignIn } from '@/components/sign-in';
import React from 'react'

const Singin = () => {
    return (
        <div className='shadow-2xl w-1/4 mx-auto mt-48 p-12'>
            <h2 className='text-center font-bold text-4xl mt-4 mb-8 font-montserrat'>Login</h2>
            <SignIn />
        </div>
    )
}

export default Singin;
