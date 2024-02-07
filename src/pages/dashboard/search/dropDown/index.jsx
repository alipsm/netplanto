import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { LuUser2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { FaDroplet } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import Toggle from '../../../../elements/toggle';

AutomationDropDown.defaultProps = {
    title: "my title",
    items: ["item one", "item two"],
    defautlIndexItem: 0
}

export default function AutomationDropDown({ items, getItem, defautlIndexItem }) {

    //   const [rotate, setRotate] = useState(false)
    const [item, setItem] = useState(items?.[defautlIndexItem])
    function handleSelectItem(item) {
        setItem(item)
        getItem?.(item)
    }
    // w-10 h-10 z-30 absolute -bottom-6 bg-[#fff] p-1 pt-2 m-auto shadow-lg shadow-[#00000052] rounded-full hover:shadow-md hover:opacity-80 transition-all cursor-pointer"
    return (
        <div className='flex justify-center items-center'>
            <Menu as="div" className="relative w-56 rounded-3xl inline-block text-left  border-none outline-none ">
                <div className=' h-full w-10 overflow-hidden z-0 m-auto'>
                    <Menu.Button className="inline-flex bg-[#fff] p-1 h-full items-center justify-end w-full border-none outline-none gap-x-1.5 rounded-3xl text-white  text-xs font-semibold shadow-sm ring-1 ring-inset ring-gray-300 cursor-pointer">
                        {/* <LuUser2 className=' w-11 h-11 bg-[#8E8E8E] rounded-full p-2' color='white' /> */}
                        <IoIosArrowDown className=" w-8 h-8 z-30 " />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-0 z-30 mt-2 w-56 bg-[#fff] rounded-3xl border-none outline-none origin-top-right shadow-lg  ">
                        <div className="flex flex-col justify-start py-10 px-4 relative">
                            <p className=' border-t border-b text-center'>
                                <b>
                                    Manual
                                </b>
                            </p>
                            <br />
                            <div className=' flex justify-end items-center gap-5 w-full mb-4'>
                                <FaDroplet className=' w-6 h-6' color='#638DA0' />
                                <span>Water</span>
                                <Toggle />
                            </div>

                            <div className=' flex justify-end items-center gap-5'>
                                <FaLightbulb className=' w-6 h-6' color='#F5CA01' />
                                <span>Light</span>
                                <Toggle />
                            </div>
                            <br />
                            <p className=' border-t border-b text-center'>
                                <b>
                                    Automatic
                                </b>
                            </p>
                            <br />
                            <div className='relative py-6  shadow-lg shadow-[#67BBCD4D] rounded-md text-[#7d6b1b]'>
                                <div>
                                    <FaDroplet className='m-auto w-6 h-6' color='#638DA0' />
                                </div>
                                <div className='flex justify-around items-center'>
                                    <div className='flex flex-col justify-center items-center'>
                                        <span>Day 3</span>
                                        <Toggle />
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <span>Day 5</span>
                                        <Toggle />
                                    </div>
                                </div>
                                <br />
                                <div className='flex justify-around items-center'>
                                    <div className='flex flex-col justify-center items-center'>
                                        <span>Day 14</span>
                                        <Toggle />
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <span>Day 7</span>
                                        <Toggle />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className='relative py-6 shadow-lg shadow-[#F5CA014D] rounded-md text-[#7d6b1b]'>
                                <div>
                                    <FaLightbulb className='m-auto w-6 h-6' color='#F5CA01' />
                                </div>
                                <div className='flex justify-around items-center'>
                                    <div className='flex flex-col justify-center items-center'>
                                        <span>Day 3</span>
                                        <Toggle />
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <span>Day 5</span>
                                        <Toggle />
                                    </div>
                                </div>
                                <br />
                                <div className='flex justify-around items-center'>
                                    <div className='flex flex-col justify-center items-center'>
                                        <span>Day 14</span>
                                        <Toggle />
                                    </div>
                                    <div className='flex flex-col justify-center items-center'>
                                        <span>Day 7</span>
                                        <Toggle />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}