import React from 'react'
import { Outlet } from 'react-router'
import NetPlantoAnimation from '../../animation/netplanto'
import shrub_pic from '../../assets/img/shrub.png'
import green_arrow_pic from '../../assets/img/horizontal_green_arrow.png'

export default function AccountOperation() {
    return (
        <div className='w-full h-full sm:flex'>
            <img src={green_arrow_pic} alt="green arrow" className=' absolute top-0 left-0 w-full h-3/6 sm:w-4/6 sm:h-4/6' />
            <Outlet />
            <img src={shrub_pic} alt="shrub" className=' absolute bottom-0  h-72 max-h-80 max-w-56 w-56 sm:right-0 sm:max-h-none sm:max-w-none sm:h-2/4 sm:w-96' />
            {/* small ico */}
            <div className=' absolute bottom-2 right-4 w-28 sm:top-[5%] sm:w-1/4 sm:right-[4%]'>
                <NetPlantoAnimation />
            </div>
        </div>
    )
}
