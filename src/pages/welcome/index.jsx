import React from 'react'
import shrub_pic from '../../assets/img/shrub.png'
import green_arrow_pic from '../../assets/img/green_arrow.png'
import NetPlantoAnimation from '../../animation/netplanto'
import Button from '../../elements/button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

export default function Welcome() {

    

    function successLoginWithGoogle(response) {
        console.log('response', response)
    }
    function handleErrorLoginWithGoogle() {

    }
    return (
        <div className='flex justify-between items-center w-full h-full'>
             <motion.div
                initial={{ x: -100, opacity: [1, 0] }}
                animate={{ x: 0, opacity: [0, 1] }}
                transition={{ duration: 1, delay:1.3 }}
                className=' absolute top-0 left-0 w-full h-full'
                
            >
            <img src={green_arrow_pic} alt="green arrow" className=' absolute top-0 left-0 w-4/5 sm:w-3/5 h-full' />
            </motion.div>
            <motion.div
                initial={{ x: -20, opacity: [1, 0] }}
                animate={{ x: 0, opacity: [0, 1] }}
                transition={{ duration: 1, delay:.2 }}
                className='relative flex justify-center items-end w-3/6 h-full'
                
            >
                <img src={shrub_pic} alt="shrub" className=' z-10 h-72 max-h-80 max-w-56 w-56 sm:max-h-none sm:max-w-none sm:h-3/4 sm:w-[700px]' />
            </motion.div>

            <div>

            </div>
            <div className='flex flex-col justify-around items-center h-full w-4/6 ml-10 sm:m-0 sm:w-3/6 z-10 absolute sm:relative '>
                
            
            <motion.div
                initial={{ y: -20, opacity: [1, 0] }}
                animate={{ y: 0, opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.2 }}
                className=' hidden sm:inline-block'
            >
                <NetPlantoAnimation />
            </motion.div>
                <div className=' flex justify-between items-center flex-col gap-5 sm:gap-8 w-full '>
                    <Link to={"/user/login"} className=' w-full max-w-96'>
                        <Button text={"Login"} />
                    </Link>
                    <Link to={"/user/signup"} className=' w-full max-w-96'>
                        <Button text={"Sign Up"} />
                    </Link>
                    <GoogleLogin
                    onSuccess={successLoginWithGoogle}
                    onError={() => handleErrorLoginWithGoogle()}
                />
                </div>
            </div>




            {/* small ico */}
            <motion.div
                initial={{ y: -20, opacity: [1, 0] }}
                animate={{ y: 0, opacity: [0, 1] }}
                transition={{ duration: 1, delay: 0.2 }}
                className=' absolute bottom-2 right-4 w-28 sm:hidden'
            >
                <NetPlantoAnimation />
            </motion.div>
        </div>
    )
}
