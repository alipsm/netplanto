import React, { useEffect, useState } from 'react'
import TextBox from '../../../elements/textBox'
import Button from '../../../elements/button'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoogleLogin } from '@react-oauth/google';

export default function SignUp() {
    const [verifyPhone, setVerifyPhone] = useState(false)


    function successLoginWithGoogle(response) {
        console.log('response', response)
    }
    function handleErrorLoginWithGoogle() {

    }
    return (
        <div className='f lex flex-col items-center justify-evenly relative w-full h-full z-10 sm:w-4/6'>
            <div className=' flex flex-col justify-center items-center gap-5 justify-self-start m-auto relative w-4/6  h-3/6 sm:h-4/6'>
                <TextBox placeholder={"Email"} type={"email"} />
                <TextBox placeholder={"Password"} type={"password"} />
                <TextBox placeholder={"Confirm Password"} type={"password"} />
                <TextBox placeholder={"Phone Number"} type={"number"} />
                <div className=' w-36'>
                    <Button text={"Sign Up"} />
                </div>
                {verifyPhone && (
                    <motion.div
                        initial={{ y: -20, opacity: [1, 0] }}
                        animate={{ y: 0, opacity: [0, 1] }}
                        transition={{ duration: .5 }} className=' absolute z-30 bg-[#fff] text-[#898989] bottom-0  rounded-xl flex justify-between flex-col items-center w-3/5 py-4 shadow-lg shadow-[#00000052]'>
                        <FaArrowLeft onClick={() => setVerifyPhone(false)} color='white' className=' w-10 h-10 p-2 absolute top-5 left-3 rounded-full bg-[#B8B8B8] z-20 cursor-pointer' />
                        <p><strong>Verification Code</strong></p>
                        <br />
                        <TextBox placeholder={"verify code"} />
                        <br />
                        <div className=' w-52'>
                            <Button text={"Submit"} type="success" />
                        </div>
                        <br />
                        <br />
                    </motion.div>
                )}

            </div>
            <div className='flex justify-center items-center flex-col w-64 m-auto gap-5 relative z-10 sm:top-2'>
                <p>Already have an Account ?
                    <Link to={"/accountOperation/login"} className=' w-full max-w-96 underline pl-1'>
                        Login
                    </Link>
                </p>
                <GoogleLogin
                    onSuccess={successLoginWithGoogle}
                    onError={() => handleErrorLoginWithGoogle()}
                />
            </div>
        </div>
    )
}
