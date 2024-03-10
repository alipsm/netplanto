import React from 'react'
import TextBox from '../../../elements/textBox'
import Button from '../../../elements/button'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { toast } from 'react-toastify'
import { convertFormDataToJson } from '../../../components/utils/convertFormDataToJson'
import useApi from '../../../hook/useApi'
import useFormValidation from '../../../hook/useFormValidation'

export default function Login() {

    const { getValidation } = useFormValidation();
    const { post } = useApi()

    const navigate = useNavigate()

    function successLoginWithGoogle(response) {
        console.log('response', response)
    }
    function handleErrorLoginWithGoogle() {

    }

    const handleSubmitLoginForm = async (e) => {
        e.preventDefault()
        const { status, message, field } = getValidation(e);
        if (status) {
            try {
                const jsonData = convertFormDataToJson(e)
                const data = await post("/user/login/",jsonData)
                console.log('data', data) //TODO: comment this code
                navigate("/dashboard/scan")
                localStorage.setItem("token",data.token)
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
            <form onSubmit={handleSubmitLoginForm} className=' flex flex-col justify-center items-center gap-5 justify-self-start m-auto relative w-4/6  h-3/6 sm:h-4/6'>
                <TextBox placeholder={"Phone"} name={"phone"} type={"number"}/>
                <TextBox placeholder={"Password"} name={"password"} type={"password"}/>
                <div className=' w-36'>
                <Button text={"Login"} submit/>
                </div>
                <Link to='/user/forgotPassword' className=' underline'>
                    Forgot Password
                </Link>
            </form>
            <div className='flex justify-center items-center flex-col w-64 m-auto gap-5 relative z-10 sm:top-2'>
            <Link to={"/user/signup"} className=' w-full max-w-96'>
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
