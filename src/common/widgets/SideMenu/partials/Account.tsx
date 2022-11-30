// imports
import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'


const CreateAccount = () => {
  return (
    <div>

      {/* user button */}
      <button className='border-none bg-none outline-none text-[1.7rem] text-slate-300 mt-1.5 cursor-pointer' >
        <HiOutlineUserCircle />
      </button>

    </div>
  )
}

export default CreateAccount