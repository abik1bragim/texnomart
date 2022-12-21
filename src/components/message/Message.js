import React from 'react'
import { TiMessages } from "react-icons/ti";
function Message() {
    return (
        <div className='w-[57px] h-[57px] rounded-full bg-[#EEC200] fixed ml-[1250px] flex items-center justify-center z-40 mt-[75px]'>
            <TiMessages className='text-white text-[30px]' />
        </div>
    )
}

export default Message