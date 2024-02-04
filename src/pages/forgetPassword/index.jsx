import React, { useState } from 'react'
import TextBox from '../../elements/textBox'
import Button from '../../elements/button'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const [showBanner, setShowBanner] = useState(false)
    return (
        <div className='f lex flex-col items-center justify-evenly relative w-full h-full z-10 sm:w-4/6'>
            {!showBanner ?(
            <div className=' flex flex-col justify-center items-center gap-5 justify-self-start m-auto relative w-4/6  h-3/6 sm:h-4/6'>
                <TextBox placeholder={"Email & Username"} type={"text"} />
                <div className=' w-36'>
                    <Button text={"Sent"} />
                </div>
            </div>


            ): (
                <div className='  absolute top-0 left-0 w-full h-full  z-20 '>
                    <div className='bg-[#F1F1F1] relative top-[15%] w-5/6 m-auto rounded-3xl px-[5%] py-[15%]'>
                    <p className='text-[#6D6868]'>
                        a password reset message was sent to your email address.
                        please click the link in that message to reset your password.
                    </p>
                    <Link to={"/accountOperation/login"} className='underline absolute left-0 inline-block w-full text-center bottom-10 m-auto'>Ok</Link>
                    </div>
                </div>
            )}
        </div>
    )
}
