import React from 'react'
import TextBox from '../../elements/textBox'
import Button from '../../elements/button'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='f lex flex-col items-center justify-evenly relative w-full h-full z-10'>
            <div className=' flex flex-col justify-center items-center gap-5 justify-self-start m-auto relative w-4/6  h-3/6'>
                <TextBox placeholder={"Email"} />
                <TextBox placeholder={"Password"} />
                <div className=' w-36'>
                <Button text={"Login"} />
                </div>
                <Link className=''>
                    Forget Password
                </Link>
            </div>
            <div className='flex justify-center items-center flex-col w-64 m-auto gap-5 relative z-10'>
            <Link to={"/accountOperation/signup"} className=' w-full max-w-96'>
                        <Button text={"Sign Up"} />
                    </Link>
                <Button text={"Login with google"} />

            </div>
        </div>
    )
}
