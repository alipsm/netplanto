import React from 'react'
import TextBox from '../../../elements/textBox'
import Button from '../../../elements/button'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'

export default function Login() {

    function successLoginWithGoogle(response) {
        console.log('response', response)
    }
    function handleErrorLoginWithGoogle() {

    }
    return (
        <div className='f lex flex-col items-center justify-evenly relative w-full h-full z-10 sm:w-4/6'>
            <div className=' flex flex-col justify-center items-center gap-5 justify-self-start m-auto relative w-4/6  h-3/6 sm:h-4/6'>
                <TextBox placeholder={"Email"} type={"email"}/>
                <TextBox placeholder={"Password"} type={"password"}/>
                <div className=' w-36'>
                <Button text={"Login"} />
                </div>
                <Link to='/accountOperation/forgotPassword' className=' underline'>
                    Forgot Password
                </Link>
            </div>
            <div className='flex justify-center items-center flex-col w-64 m-auto gap-5 relative z-10 sm:top-2'>
            <Link to={"/accountOperation/signup"} className=' w-full max-w-96'>
                        <Button text={"Sign Up"} />
                    </Link>
                    <GoogleLogin
                    onSuccess={successLoginWithGoogle}
                    onError={() => handleErrorLoginWithGoogle()}
                />

            </div>
        </div>
    )
}
