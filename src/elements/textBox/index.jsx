import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { BiSolidHide } from "react-icons/bi";
TextBox.defaultProps = {
  getValue: () => "",
  type: "text"
}
export default function TextBox({name, placeholder, onchange, getValue, type, success }) {
  const [inputType, setInputType] = useState(type);
  return (
    <div className='relative w- max'>
      {type === "password" && <BiSolidHide onClick={() => setInputType(inputType === "password" ? "text" : "password")} className="w-8 h-8 absolute top-4 right-2 cursor-pointer" color='#9B9B9A' />}
      <input name={name} type={inputType} placeholder={placeholder} onChange={e => getValue(e.target.value)} className='shadow-md shadow-[#00000052] w-full py-3 px-2 sm:px-3 sm:py-4 border-none rounded-2xl outline-none text-sm sm:text-2xl max-w-96' />
      {success && <IoMdCheckmark className="w-10 h-10 absolute top-3 -right-10" color="#1C7933" />}
    </div>
  )
}
