import React from 'react'
import TextBox from '../../elements/textBox'
import Button from '../../elements/button'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className='f lex flex-col items-center justify-evenly relative w-full h-full z-10 sm:w-4/6'>
            <div className=' flex flex-col justify-center items-center gap-5 justify-self-start m-auto relative w-4/6  h-3/6 sm:h-4/6'>
                <TextBox placeholder={"Email"} type={"email"}/>
                <TextBox placeholder={"Password"} type={"password"}/>
                <TextBox placeholder={"Confirm Password"} type={"password"}/>
                <TextBox placeholder={"Phone Number"} type={"number"}/>
                <div className=' w-36'>
                    <Button text={"Sign Up"} />
                </div>

            </div>
            <div className='flex justify-center items-center flex-col w-64 m-auto gap-5 relative z-10 sm:top-2'>
                <p>Already have an Account ?
                    <Link to={"/accountOperation/login"} className=' w-full max-w-96 underline pl-1'>
                        Login
                    </Link>
                </p>
                <Button text={"Login with google"} />

            </div>
        </div>
    )
}
