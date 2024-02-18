import React, { useEffect, useState } from 'react'
import TextBox from '../../../elements/textBox'
import Button from '../../../elements/button'
import { Link, Router, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoogleLogin } from '@react-oauth/google';
import useFormValidation from '../../../hook/useFormValidation';
import useApi from '../../../hook/useApi';
import { toast } from 'react-toastify';
import { convertFormDataToJson } from '../../../components/utils/convertFormDataToJson';


export default function SignUp() {
    const [verifyPhone, setVerifyPhone] = useState(false)
    const [verifyPhoneCode, setVerifyPhoneCode] = useState(false)

    const { getValidation } = useFormValidation();
    const { post } = useApi()

    const navigate = useNavigate()

    const handleSubmitRegisterForm = async (e) => {
        e.preventDefault()
        const { status, message, field } = getValidation(e);
        if (status) {
            try {
                const jsonData = convertFormDataToJson(e)
                const data = await post("/user/register/",jsonData)
                console.log('data', data)
                localStorage.setItem("token",data.token)
                setVerifyPhone(true)
                toast.success("لطفا تلفن همراه خودرا تایید کنید")
            } catch (error) {
                toast.error(error.message)
            } finally {
            }
        } else {
            toast.error(message)
        }
    }

    const handleVerifyPhoneNumber = async (e) => {
            try {
                const json = JSON.stringify({"code":verifyPhoneCode});
                const data = await post("/user/verification/",json)
                sessionStorage.setItem("user",data)
                navigate("/dashboard/scan",{replace:true})
            } catch (error) {
                toast.error(error.message)
            } finally {
            }
    }



    function successLoginWithGoogle(response) {
        console.log('response', response)
    }

    function handleErrorLoginWithGoogle() {

    }
    return (
        <div className='f lex flex-col items-center justify-evenly relative w-full h-full z-10 sm:w-4/6'>
            <div className='flex flex-col justify-center items-center  m-auto relative  h-3/6 sm:h-4/6 w-full'>
                
                <form onSubmit={handleSubmitRegisterForm} className='flex flex-col justify-center items-center gap-5 justify-self-start w-4/6  '>

                <TextBox name={"username"} value={"myUsernamea"} placeholder={"Username"} type={"text"}/>
                <TextBox name={"email"} value={"aaaaaaaa@gmail.com"} placeholder={"Email"} type={"email"}/>
                <TextBox name={"password"} value={"123456789"} placeholder={"Password"} type={"password"} />
                <TextBox name={"confirmPassword"} value={"123456789"} placeholder={"Confirm Password"} type={"password"} />
                <TextBox name={"phone"} value={"09012869416"} placeholder={"Phone Number"} type={"number"} />
                <div className=' w-36'>
                    <Button text={"Sign Up"} submit/>
                </div>
                </form>
                {verifyPhone && (
                    <motion.div
                        initial={{ y: -20, opacity: [1, 0] }}
                        animate={{ y: 0, opacity: [0, 1] }}
                        transition={{ duration: .5 }}
                        className=' absolute z-30 bg-[#fff] text-[#898989] bottom-0  rounded-xl flex justify-between flex-col items-center w-3/5 py-4 px-2 shadow-lg shadow-[#00000052]'>
                        <FaArrowLeft onClick={() => setVerifyPhone(false)} color='white' className=' w-4 h-4 p-1 box-content md:w-6 md:h-6 md:p-2 absolute top-5 left-3 rounded-full bg-[#B8B8B8] z-20 cursor-pointer' />
                        <p><strong>Verification Code</strong></p>
                        <br />
                        <TextBox placeholder={"verify code"} getValue={setVerifyPhoneCode}/>
                        <br />
                        <div className=' w-52'>
                            <Button text={"Submit"} type="success" onclick={handleVerifyPhoneNumber}/>
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
