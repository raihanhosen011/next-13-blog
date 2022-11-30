"use client"

// imports
import React, { FC, useRef } from 'react'
import { useDraggable } from "react-use-draggable-scroll";
//
import { FeedPropTypes } from '../../shared/@types'
import BlogCard from '../../common/components/BlogCard'


const Feed : FC<FeedPropTypes> = ({
  title = "Recent Uploaded",
  data = []
}) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div className='relative md:py-12 py-8' >
       <div className='container' >

          {/* Feed head */}
          <div className='mb-[50px]' >
            <h3 className="text-[26px] font-medium text-start"> {title} </h3>
          </div>

          {/* Feed body */}
            <div 
              className='flex space-x-3 overflow-x-scroll scrollbar-hide' 
              {...events}
              ref={ref} 
            >
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>            

       </div>
    </div>
  )
}

export default Feed