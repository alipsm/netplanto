import React from 'react'
import { Outlet } from 'react-router'
import { motion } from 'framer-motion'
import NetPlantoAnimation from '../../animation/netplanto'
import shrub_pic from '../../assets/img/shrub.png'
import green_arrow_pic from '../../assets/img/horizontal_green_arrow.png'

export default function AccountOperation() {
    return (
        <div className='w-full h-full sm:flex overflow-hidden'>
            <motion.div
                initial={{ y: -20, opacity: [1, 0] }}
                animate={{ y: 0, opacity: [0, 1] }}
                transition={{ duration: 1, delay: .2 }}
                className='absolute top-0 h-full w-full'
                
            >
            <img src={green_arrow_pic} alt="green arrow" className=' absolute top-0 left-0 w-full h-3/6 sm:w-4/6 sm:h-4/6' />
            </motion.div>
            <Outlet />
            <motion.div
                initial={{ x: -20, opacity: [1, 0] }}
                animate={{ x: 0, opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.2 }}
                className='absolute top-0 h-full w-full sm:max-h-none sm:max-w-none overflow-hidden'
                
            >
            <img src={shrub_pic} alt="shrub" className=' absolute bottom-0  h-72 max-h-80 max-w-56 w-56 sm:right-0 sm:max-h-none sm:max-w-none sm:h-2/4 sm:w-96' />
            </motion.div>
            {/* small ico */}
            <motion.div
                initial={{ y: -20, opacity: [1, 0] }}
                animate={{ y: 0, opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.2 }}
                className=' absolute bottom-2 right-4 w-28 sm:top-[5%] sm:w-1/4 sm:right-[4%] overflow-hidden'
            >
                <NetPlantoAnimation />
            </motion.div>
        </div>
    )
}
