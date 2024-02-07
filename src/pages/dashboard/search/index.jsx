import React, { useState } from 'react'
import TextBox from '../../../elements/textBox'
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import Button from '../../../elements/button';
import Toggle from '../../../elements/toggle';
import AutomationDropDown from './dropDown';


export default function Search() {


    const [inputValue, setInputValue] = useState("")
    const [showDeleteAlert, setshowDeleteAlert] = useState(false)
    const [showEditAlert, setshowEditAlert] = useState(false)
    return (
        <div className='w-full h-full flex justify-center'>
            <div className='relative w-max h-max flex justify-center'>
                {!!inputValue && (
                    <motion.div
                        initial={{ x: 20, opacity: [1, 0] }}
                        animate={{ x: 0, opacity: [0, 1] }}
                        transition={{ duration: 1, delay: .3 }}
                        className=""
                    >
                        <BiEditAlt className=" w-7 h-7 absolute top-4 -left-10 cursor-pointer hover:opacity-70" color='#252525' onClick={() => setshowEditAlert(true)} />
                    </motion.div>
                )}
                <TextBox placeholder={"serial number"} getValue={setInputValue} />
                {!!inputValue && (
                    <motion.div
                        initial={{ x: -20, opacity: [1, 0] }}
                        animate={{ x: 0, opacity: [0, 1] }}
                        transition={{ duration: 1, delay: .3 }}
                    >
                        <RiDeleteBin6Line className=" w-7 h-7 absolute top-4 -right-10 cursor-pointer hover:opacity-70" onClick={() => setshowDeleteAlert(true)} />
                    </motion.div>
                )}
                <div className=' z-30 absolute -bottom-6 m-auto'>
                    <AutomationDropDown />
                </div>
            </div>




            {showDeleteAlert && (
                <motion.div
                    initial={{ y: -20, opacity: [1, 0] }}
                    animate={{ y: 0, opacity: [0, 1] }}
                    transition={{ duration: .5 }} className=' absolute z-30 bg-[#fff] text-[#898989] top-8  rounded-xl flex justify-between flex-col items-center w-3/5 py-4 shadow-lg shadow-[#00000052]'>
                    <RiDeleteBin6Line className=" w-24 h-24 " />
                    <p className=' text-2xl'>
                        <strong>Are You Sure ?</strong>
                    </p>
                    <br />
                    <div className='flex justify-center items-center w-full gap-28'>
                        <div className=' w-40'>
                            <Button text={<MdClose className=" w-10 h-10 m-auto" color="#fff" />} type='error' onclick={() => setshowDeleteAlert(false)} />
                        </div>
                        <div className=' w-40'>
                            <Button text={<IoMdCheckmark className=" w-10 h-10 m-auto" color="#fff" />} type='success' />
                        </div>
                    </div>
                </motion.div>
            )}


            {showEditAlert && (
                <motion.div
                    initial={{ y: -20, opacity: [1, 0] }}
                    animate={{ y: 0, opacity: [0, 1] }}
                    transition={{ duration: .5 }} className=' absolute z-30 bg-[#fff] text-[#898989] top-8  rounded-xl flex justify-between flex-col items-center w-3/5 py-4 shadow-lg shadow-[#00000052]'>
                    <FaArrowLeft onClick={() => setshowEditAlert(false)} color='white' className=' w-10 h-10 p-2 absolute top-5 left-3 rounded-full bg-[#B8B8B8] z-20 cursor-pointer' />
                    <TextBox placeholder={"Edit Name"} />
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
