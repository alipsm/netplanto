import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { LuUser2 } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";

DropDown.defaultProps = {
  onEdit: ()=>""
}

export default function DropDown({  items, getItem, defautlIndexItem , onEdit }) {
  const [item, setItem] = useState(items?.[defautlIndexItem])
  function handleSelectItem(item) {
    setItem(item)
    getItem?.(item)
  }
  return (
    <div className='flex justify-center items-center'>
      <Menu as="div" className="relative w-56 rounded-3xl inline-block text-left  border-none outline-none ">
        <div className=' h-full overflow-hidden z-0'>
          <Menu.Button className="inline-flex bg-[#fff] p-1 h-full items-center justify-start w-full border-none outline-none gap-x-1.5 rounded-3xl text-white  text-xs font-semibold shadow-sm ring-1 ring-inset ring-gray-300 cursor-pointer">
            <LuUser2 className=' w-11 h-11 bg-[#8E8E8E] rounded-full p-2' color='white' />
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
            <div className="py-1 px-4">
              {items?.map(item => (
                <Menu.Item key={item} >
                  <div
                    className={'text-gray-700 pb-2 border-none outline-none block  py-2 text-sm cursor-pointer'}
                    onClick={() => handleSelectItem(item)}
                  >
                    <div className=' mb-3'>
                      <span className='text-[#A5A5A5] capitalize text-xs'>{item?.title}</span>
                      <br />
                      <b className=' text-forestGreen mb-3'>{item?.value}</b>
                    </div>
                    <hr />
                  </div>
                </Menu.Item>
              ))}
              <br />
              <BiEditAlt className=' w-8 h-8 ml-auto cursor-pointer' color='#252525' onClick={()=>onEdit(true)}/>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}