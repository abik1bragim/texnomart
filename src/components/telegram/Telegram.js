import React from 'react'
import telegram from '../../images/telegram.svg'
function Telegram() {
    return (
        <div className='w-[45px] h-[45px] border border-gray-300 rounded-full bg-white fixed ml-[1255px] flex items-center justify-center z-40 mt-[10px]'>
            <img src={telegram} alt="" className='w-[25px]' />
        </div>
    )
}

export default Telegram