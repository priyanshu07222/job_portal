import React from 'react'

export const TestimonialCard = () => {
    return (
        <div>

            {/* <h1 className="font-bold text-5xl  text-center mb-4 font-montserrat">Testimonial</h1> */}

            <div className=' h-[50vh] grid grid-cols-3'>

                <div className='col-span-1  bg-blue-900 text-white p-12 rounded-r-lg'>
                    <div className='bg-white rounded-full p-4 w-20 my-4'>
                        <img src="quote.png" alt="" className='w-12' />
                    </div>
                    <h1 className='text-5xl font-bold my-4'>Join the community of Remote job seekers...</h1>
                    <div className='flex items-center gap-4'>
                        <p>Play Store Ratings</p>
                        <div className='flex items-center'>
                            <img src="star.svg" alt="" className='w-6' />
                            <img src="star.svg" alt="" className='w-6' />
                            <img src="star.svg" alt="" className='w-6' />
                            <img src="star.svg" alt="" className='w-6' />
                            <img src="star.svg" alt="" className='w-6' />
                        </div>
                    </div>
                </div>
                <div className=' col-span-2 flex items-center overflow-x-scroll gap-4 px-4  '>

                    <ReviewCard name={'Anurag Sharma'} profile={'profile7.jpg'} review={'"Thanks remote1 for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field, you can easily find a job through the Apna app."'} />
                    <ReviewCard name={'Jay Shah'} profile={'profile2.jpg'} review={'"This app is very helpful if you are looking for a job and the team is also very supportive and friendly. They guided me through every stage. It is very easy to find a job on Apna because there are a lot of job options here for everyone. I got a job interview call very quickly after applying."'} />
                    <ReviewCard name={'Anurag Sharma'} profile={'profile3.jpg'} review={'"It is definitely a great app with correct and true information on the job details. I am happy to use it and I would also recommend my friends to use it for their career development."'} />
                    <ReviewCard name={'Anurag Sharma'} profile={'profile4.jpg'} review={"Good and helpful app, even for freshers who don't have good qualifications. There are jobs for Caretakers, Househelp and many more. It's very easy to find jobs here. Thank you, Apna app!"} />
                    <ReviewCard name={'Anurag Sharma'} profile={'profile5.jpg'} review={"Good and helpful app, even for freshers who don't have good qualifications. There are jobs for Caretakers, Househelp and many more. It's very easy to find jobs here. Thank you, Apna app!"} />
                    <ReviewCard name={'Anurag Sharma'} profile={'profile6.jpg'} review={"Good and helpful app, even for freshers who don't have good qualifications. There are jobs for Caretakers, Househelp and many more. It's very easy to find jobs here. Thank you, Apna app!"} />
                    {/* <ReviewCard name={'Anurag Sharma'} profile={'profile2.jpg'} review={''}/>
                <ReviewCard name={'Anurag Sharma'} profile={'profile2.jpg'} review={''}/> */}
                </div>
            </div>
        </div>
    )
}

const ReviewCard = ({ name, profile, review }: { name: string, profile: string, review: string }) => {
    return (
        <div className='bg-white shadow-lg p-4 rounded-lg w-96 h-72 shrink-0'>
            <div className='flex gap-8 mx-4'>
                <div className='rounded-xl overflow-hidden -translate-y-8 shadow'>
                    <img src={profile} alt="profile" className='w-24 h-24 bg-cover bg-no-repeat' />
                </div>
                <div>
                    <p className='font-bold text-xl'>{name}</p>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-slate-600'>5.0</p>
                        <div className='flex'>
                            <img src="star.svg" alt="" className='w-6' />
                            <img src="star.svg" alt="" className='w-6' />
                            <img src="star.svg" alt="" className='w-6' />
                            <img src="star.svg" alt="" className='w-6' />
                            <img src="star.svg" alt="" className='w-6 ' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-slate-600'>{review}</p>
            </div>
        </div>

    )
}
