import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { BsQuestionLg } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";

import SideBar from './sidebar'
import netplanto_logo from '../../assets/img/logo.png'
import shrub_pic from '../../assets/img/shrub.png'
import Button from '../../elements/button';

export default function Dashboard({setIsDark}) {
    const [showHint, setShowHint] = useState(false)
    const { pathname } = useLocation()
    const getSubdirectory = pathname.split("/").slice(-1)[0]

    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        !!!token && navigate("/user/login",{replace:true})
    }, [])

    return (
        <div className='flex justify-between w-full h-full relative'>
            <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: .6 }}

            >
                <SideBar setIsDark={setIsDark}/>
            </motion.div>
            <div className='relative w-full mr-5 rounded-3xl  bg-[#ffffff00] overflow-hidden'>

                <motion.div
                    key={getSubdirectory}
                    initial={{ x: -20, opacity: [1, 0] }}
                    animate={{ x: 0, opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className=' relative w-full h-full py-5 px-8  overflow-auto '
                >
                    <Outlet />
                </motion.div>
            </div>




            <img src={shrub_pic} alt="shrub" className=' absolute bottom-0 -right-10 md:-right-32 h-72 max-h-80 max-w-56 w-56 sm:max-h-none sm:max-w-none sm:h-2/4 sm:w-96' />
            <img src={netplanto_logo} alt="logo" className=' absolute right-2 top-2 w-10 h-10 max-w-16' />



            {!showHint ? (
                <BsQuestionLg onClick={() => setShowHint(true)} color='#ABAAAA' className=' w-10 h-10 p-2 absolute bottom-2 right-2 rounded-full bg-[#565656cc] z-20 cursor-pointer' />
            ) : (

                <motion.div
                    key={getSubdirectory}
                    initial={{ y: -20, opacity: [1, 0] }}
                    animate={{ y: 0, opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className='flex justify-center h-full w-full items-center absolute top-0 left-0 z-30'
                >
                    
                    <div className='flex flex-col px-6 items-center justify-center bg-[#242424cc] w-4/5 h-3/4 max-h-[670px] relative rounded-2xl'>
                        <FaArrowLeft onClick={() => setShowHint(false)} color='white' className=' w-10 h-10 p-2 absolute top-5 left-3 rounded-full bg-[#777777] z-20 cursor-pointer'/>


                        <div className='  w-full max-w-96 h-36 bg-forestGreen rounded-xl'>
                            video section
                        </div>
                        <br/>
                        <Button text={"فيلم آموزش وب اپ"}/>
                    </div>
                </motion.div>
            )}

        </div>
    )
}
