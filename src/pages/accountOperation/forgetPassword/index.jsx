import React, { useState } from 'react'
import TextBox from '../../../elements/textBox'
import Button from '../../../elements/button'
import { Link } from 'react-router-dom'
import { convertFormDataToJson } from '../../../components/utils/convertFormDataToJson'
import useApi from '../../../hook/useApi'
import { toast } from 'react-toastify'
import useFormValidation from '../../../hook/useFormValidation'

export default function ForgotPassword() {
    const [showBanner, setShowBanner] = useState(false)

    const { getValidation } = useFormValidation();
    const { post } = useApi()

    const handleSubmitForgetPasswordForm = async (e) => {
        e.preventDefault()
        const { status, message, field } = getValidation(e);
        if (status) {
            try {
                const jsonData = convertFormDataToJson(e)
                const data = await post("/user/forgetPassword/",jsonData)
                console.log('data', data) //TODO: comment this code
                localStorage.setItem("token",data.token)
                setShowBanner(true)
                toast.success(data?.message)
            } catch (error) {
                toast.error(error.message)
            } finally {
            }
        } else {
            toast.error(message)
        }
    }

    return (
        <div className='f lex flex-col items-center justify-evenly relative w-full h-full z-10 sm:w-4/6'>
            {!showBanner ?(
            <form onSubmit={handleSubmitForgetPasswordForm} className=' flex flex-col justify-center items-center gap-5 justify-self-start m-auto relative w-4/6  h-3/6 sm:h-4/6'>
                <TextBox placeholder={"Phone"} name={"phone"} type={"number"} />
                <div className=' w-36'>
                    <Button text={"Sent"} />
                </div>
            </form>


            ): (
                <div className='  absolute top-0 left-0 w-full h-full  z-20 '>
                    <div className='bg-[#F1F1F1] relative top-[15%] w-5/6 m-auto rounded-3xl px-[5%] py-[15%]'>
                    <p className='text-[#6D6868]'>
                        a password reset message was sent to your email address.
                        please click the link in that message to reset your password.
                    </p>
                    <Link to={"/user/resetPassword"} className='underline absolute left-0 inline-block w-full text-center bottom-10 m-auto'>Ok</Link>
                    </div>
                </div>
            )}
        </div>
    )
}
