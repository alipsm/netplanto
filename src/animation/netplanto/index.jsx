import React from 'react'
// import { motion } from 'framer-motion'
import netplanto_text from '../../assets/img/netplanto.png'
import netplanto_logo from '../../assets/img/logo.png'
export default function NetPlantoAnimation() {
  return (
    <div className=' flex justify-center items-center gap-[1vw] w-full max-w-96'>
      <img src={netplanto_logo} alt="logo" className=' w-[15%] max-w-16' />
      <img src={netplanto_text} alt="netplanto" className='w-[85%]'  height={57}/>
    </div>
  )
}
