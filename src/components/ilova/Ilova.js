import React from 'react'
import PhoneMin from '../../images/phone-min.png'
import PM from '../../images/play-market.png'
import QC from '../../images/QC.png'
function Ilova() {
    return (
        <div className='w-[95%] h-[410px] bg-[#F7F7F7] m-auto rounded-[15px] flex items-center'>
            <div className="w-[50%] h-[100%]">
                <img src={PhoneMin} alt="" className='mt-[-13px] m-auto' />
            </div>
            <div className="w-[50%] h-[100%] flex flex-col justify-center">
                <h1 className='text-[40px] font-bold'>Иловани юкланг</h1>

                <p className='text-[18px] w-[460px] mt-[20px]'>Ҳаридларни уйдан чиқмаган ҳолда мобил илова орқали амалга оширинг!</p>
                <div className="flex items-center mt-[20px]">
                    <img src={QC} alt="" className='w-[100px]'/>
                    <p className='text=[19px] w-[175px] ml-[20px]'>Камерани йўналтиринг ва Texnomart иловасини бепул юкланг</p>
                </div>

                <img src={PM} alt="" className='w-[100px] object-cover mt-[20px]' />
            </div>
        </div>
    )
}

export default Ilova