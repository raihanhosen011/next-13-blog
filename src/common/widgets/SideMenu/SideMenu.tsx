// imports
import React from 'react'
//
import CreateAccount from './partials/Account'
import CreateBlog from './partials/CreateBlog'


const SideMenu = () => {
  return (
    <div className='fixed top-4 left-4 p-[8px_9px_3px_9px] bg-[rgb(38_58_104)] rounded-[25px]' >
       
      <CreateBlog />
        <div className='bg-slate-500 h-[1px] w-full' />
      <CreateAccount />

    </div>
  )
}

export default SideMenu