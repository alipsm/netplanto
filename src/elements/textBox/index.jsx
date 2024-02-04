import React from 'react'

export default function TextBox({placeholder,onchange}) {
  return (
      <input type='text' placeholder={placeholder} onchange={onchange} className='shadow-md shadow-[#00000052] w-full py-3 px-2 sm:px-3 sm:py-4 border-none rounded-2xl outline-none text-sm sm:text-2xl'/>
  )
}
