import React from 'react'

export default function Button({ text, onclick, img, type = "default" }) {
  const btnType = {
    success: {bg:"#1C7933",textColor:"white"},
    error: {bg:"#FF2E2E",textColor:"white"},
    default: {bg:"#D9D9D9",textColor:"black"},
  }[type]

  
  
  return (
    <button style={{ backgroundColor: btnType?.bg,color:btnType?.textColor }} onClick={onclick} className={`text-sm sm:text-2xl text-center px-4 py-2 sm:py-2 rounded-2xl w-full max-w-96 hover:opacity-80 shadow-md shadow-[#00000052] hover:shadow-none transition-all`}>
       <span>
        {text}
      </span>
    </button>
  )
}
