import React from 'react'
import { Outlet } from 'react-router'
import NetPlantoAnimation from '../../animation/netplanto'
import shrub_pic from '../../assets/img/shrub.png'
import green_arrow_pic from '../../assets/img/horizontal_green_arrow.png'

export default function AccountOperation() {
    return (
        <div className='w-full h-full'>
            <img src={green_arrow_pic} alt="green arrow" className=' absolute top-0 left-0 w-full h-3/6 sm:w-3/5' />
            <Outlet />
            <img src={shrub_pic} alt="shrub" className=' absolute bottom-0  h-72 max-h-80 max-w-56 w-56 sm:max-h-none sm:max-w-none sm:h-3/4 sm:w-3/4' />
            {/* small ico */}
            <div className=' absolute bottom-2 right-4 w-28 sm:hidden'>
                <NetPlantoAnimation />
            </div>
        </div>
    )
}
