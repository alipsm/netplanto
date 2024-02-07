import React, { useState } from 'react'
import { IoChevronBackOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import TextBox from '../../../elements/textBox';
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Button from '../../../elements/button';

export default function EditUserData({ setEditUser }) {
  const [editData, setEditData] = useState({ show: false, type: "" })
  const [inputValue, setInputValue] = useState("")
  return (
    <div className='w-full h-full px-5'>
      <div className="w-8 h-8 mt-2 cursor-pointer" onClick={() => setEditUser(false)}>
        <IoChevronBackOutline className="w-10 h-12" color="white" />
      </div>
      <br />
      <br />
      <div className='flex justify-between items-center w-full text-[#fff]'>
        <div className=' flex flex-col '>
          <small>username</small>
          <strong>Netplanto</strong>
        </div>
        <BiEditAlt className=' w-6 h-6 ml-auto cursor-pointer' color='#fff' onClick={() => setEditData({ show: true, type: "username" })} />
      </div>
      <br />
      <div className='flex justify-between items-center w-full text-[#fff]'>
        <div className=' flex flex-col '>
          <small>Phone Number</small>
          <strong>Netplanto</strong>
        </div>
        <BiEditAlt className=' w-6 h-6 ml-auto cursor-pointer' color='#fff' onClick={() => setEditData({ show: true, type: "phone" })} />
      </div>
      <br />
      <div className='flex justify-between items-center w-full text-[#fff]'>
        <div className=' flex flex-col '>
          <small>Email</small>
          <strong>Netplanto</strong>
        </div>
        <BiEditAlt className=' w-6 h-6 ml-auto cursor-pointer' color='#fff' onClick={() => setEditData({ show: true, type: "email" })} />
      </div>
      <br />
      {editData.show && editData.type !== "phone" && (
        <TextBox placeholder={"Edit " + editData.type} getValue={setInputValue} />
      )}
      {editData.show && editData.type === "phone" && (
          <motion.div
              initial={{ x: -20, opacity: [1, 0] }}
              animate={{ x: 0, opacity: [0, 1] }}
              transition={{ duration: .5 }} className=' absolute z-30 bg-[#D9D9D9] text-[#898989] left-2 top-20 w-full  rounded-xl flex justify-between flex-col items-center py-4 px-4 shadow-lg shadow-[#00000052]'>
              <FaArrowLeft onClick={() => setEditData({ show: false, type: "" })} color='white' className=' w-8 h-8 p-2 absolute top-5 left-3 rounded-full bg-[#B8B8B8] z-20 cursor-pointer' />
              <p className=' text-xl'><strong>Verification Code</strong></p>
              <br />
              <br />
              <br />

              <TextBox placeholder={"Phone Number"} type={"number"}/>
              <br />
              <TextBox placeholder={"verify code"} type={"number"}/>
              <br />
              <div className=' w-52'>
                  <Button text={"Submit"} type="success" />
              </div>
              <br />
              <br />
          </motion.div>
      )}
    </div>
  )
}
