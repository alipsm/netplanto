import React from 'react'
import TextBox from '../../../elements/textBox'
import Button from '../../../elements/button'
import useFormValidation from '../../../hook/useFormValidation';
import useApi from '../../../hook/useApi';
import { convertFormDataToJson } from '../../../components/utils/convertFormDataToJson';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export default function ResetPassword() {
  const { getValidation } = useFormValidation();
  const { post } = useApi()

  const navigate = useNavigate()

  const handleSubmitResetPasswordForm = async (e) => {
      e.preventDefault()
      const { status, message, field } = getValidation(e);
      if (status) {
          try {
              const jsonData = convertFormDataToJson(e)
              const data = await post("/user/resetPassword/",jsonData)
              console.log('data', data)
              toast.success(data?.message)
              navigate("/accountOperation/login")
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
      <form  onSubmit={handleSubmitResetPasswordForm}className=' flex flex-col justify-center items-center gap-5 justify-self-start m-auto relative w-4/6  h-3/6 sm:h-4/6'>
        <TextBox placeholder={"Code"} name={"code"} type={"number"} />
        <TextBox placeholder={"New Password"} name={"password"} type={"password"} />
        <TextBox placeholder={"Confirm Password"} name={"confirmPassword"} type={"password"} />
        <div className=' w-36'>
          <Button text={"Sent"} />
        </div>
      </form>



    </div>
  )
}
