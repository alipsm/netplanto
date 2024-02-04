import React from 'react'

export default function Button({text,onclick,img,type}) {
  return (
    <button onClick={onclick} className=' text-sm sm:text-2xl  py-3 sm:py-4 rounded-2xl bg-[#D9D9D9] w-full max-w-96 hover:opacity-80 shadow-md shadow-[#00000052] hover:shadow-none transition-all'>
      <span>
        {text}
      </span>
    </button>
  )
}
