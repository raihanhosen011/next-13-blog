// imports
import Image from 'next/legacy/image'
import React from 'react'

import { HiOutlineCalendar } from 'react-icons/hi'
import { BsArrowRight } from 'react-icons/bs'


const BlogCard = () => {
    return (
        <div className="group min-w-[330px] max-w-[330px] relative overflow-hidden bg-[rgb(9_9_14/22%)] rounded-2xl border border-[#343434]">
            <div className='w-full h-[285px] relative overflow-hidden' >
                <Image 
                    src="/images/blog/01.jpg" 
                    blurDataURL="/images/blog/01.jpg"
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    alt='loading...' 
                />                
            </div>

                <div className="relative p-6">
                    <div className="absolute left-6 -top-4">
                        <span className="bg-violet-900 text-white dark:bg-violet-800 text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">Arts</span>
                    </div>

                    <div className="">
                        <div className="flex mb-4">
                            <span className="text-slate-400 text-[16px] flex items-center gap-2">
                                <HiOutlineCalendar />
                                20th October, 2022
                            </span>
                        </div>

                        <a href="blog-detail.html" className="title text-lg font-medium hover:text-violet-600 duration-300 ease-in-out">
                            Mindfulness Activities for Kids &amp; Toddlers with NFT
                        </a>

                        <div className="flex justify-between mt-4">
                            <a href="blog-detail.html" className="flex items-center gap-2 btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out">
                                Read More <BsArrowRight />
                            </a>

                            <span className="text-slate-400 text-[16px]">
                                by <a href="creator-profile.html" className="text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-600 font-medium">
                                @StreetBoy</a>
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default BlogCard