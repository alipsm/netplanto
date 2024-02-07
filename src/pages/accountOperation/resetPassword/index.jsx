import React from 'react'
import TextBox from '../../../elements/textBox'
import Button from '../../../elements/button'

export default function ResetPassword() {
  return (
    <div className='f lex flex-col items-center justify-evenly relative w-full h-full z-10 sm:w-4/6'>

    <div className=' flex flex-col justify-center items-center gap-5 justify-self-start m-auto relative w-4/6  h-3/6 sm:h-4/6'>
        <TextBox placeholder={"New Password"} type={"password"} />
        <TextBox placeholder={"Confirm Password"} type={"password"} />
        <div className=' w-36'>
            <Button text={"Sent"} />
        </div>
    </div>


   
</div>
  )
}
