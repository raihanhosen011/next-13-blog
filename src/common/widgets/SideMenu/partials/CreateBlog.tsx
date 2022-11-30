// imports
import React from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'


const CreateBlog = () => {
  return (
    <div>

      {/* create blog button */}
      <button className='border-none bg-none outline-none text-[1.7rem] text-slate-300 cursor-pointer' >
        <IoMdAddCircleOutline />
      </button>

    </div>
  )
}

export default CreateBlog