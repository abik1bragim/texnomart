import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai'
import { HiFire } from 'react-icons/hi'
function NavBottom() {
    return (
        <div className='w-full h-[65px] flex items-center'>
            <button className=' w-[125px] h-[72%] bg-[#fbc100] rounded-[8px] flex items-center justify-around text-[18px] font-medium px-[10px] mx-[30px]'> <AiOutlineAppstore className='text-[25px]' /> Katalog</button>

            <ul className='w-[85%] flex items-center justify-between'>
                <li className='flex items-center font-medium text-[#7F7F7F] text-[14px]'>
                    <HiFire className='text-[20px] text-red-500' />
                    <a href="/">AKSIYALER</a>
                </li>
                <li className='font-medium text-[#7F7F7F] text-[14px]'>
                    <a href="/">SMARTFONLAR</a>
                </li>
                <li className='font-medium text-[#7F7F7F] text-[14px]'>
                    <a href="/">MUZLATGICHLAR</a>
                </li>
                <li className='font-medium text-[#7F7F7F] text-[14px]'>
                    <a href="/">CHANGYUTGICHLAR</a>
                </li>
                <li className='font-medium text-[#7F7F7F] text-[14px]'>
                    <a href="/">XAVO SOVUTGICHLAR</a>
                </li>
                <li className='font-medium text-[#7F7F7F] text-[14px]'>
                    <a href="/">NOUTBUKLAR</a>
                </li>
                <li className='font-medium text-[#7F7F7F] text-[14px]'>
                    <a href="/">TELEVIZORLAR</a>
                </li>
                <li className='font-medium text-[#7F7F7F] text-[14px]'>
                    <a href="/">BARCHA KATEGORIYALAR</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBottom