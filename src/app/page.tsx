// imports
import React from 'react'
//
import { Hero, Feed } from '../modules/Home'


const Page = () => {
  return (
    <div>
       
       <Hero />
       
       <Feed title='Most recent' data={[]} />
       <Feed title='Most popular' data={[]} />

    </div>
  )
}

export default Page