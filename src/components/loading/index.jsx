import React from 'react'
import logo_pic from '../../assets/img/logo.png'

export default function LoadingPage() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
       <img src={logo_pic} alt="shrub" className=' w-[20vw] h-[20vw] max-w-52 max-h-52 animate-spin' />
    </div>
  )
}
