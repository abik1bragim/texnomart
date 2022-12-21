import React from 'react'
import { CiLocationOn } from 'react-icons/ci'

function Top() {
    return (
        <div>
            <div className="w-full h-[40px]  flex bg-[#333] text-[#fff]">
                <div className="w-[8%] h-full flex justify-center items-center ">
                    <CiLocationOn className='text-[20px] mr-6 cursor-pointer' />
                    {/* <h1>Toshkent</h1> */}
                </div>
                <div className="w-[60%] h-full ">
                    <ul className='flex w-[820px] h-full   text-[13px] font-normal items-center gap-[30px]'>
                        <li>
                            <a href="/">
                                Bizning Do'konimmiz
                            </a>
                        </li>
                        <li className='w-[100px]  pl-[14px] rounded-md  bg-[#D8D8D833] '>
                            <a href="/">
                                B2B Savdosi
                            </a>
                        </li>
                        <li>
                            <a href="/">Muddatli tolovga sotib olish</a>
                        </li>
                        <li>
                            <a href="/">to'lov usullari</a>
                        </li>
                        <li>
                            <a href="/">Mahsulot uchun kafolat</a>
                        </li>

                    </ul>
                </div>
                <div className="w-[32%] h-full flex">
                    <ul className='w-[300px] h-full  flex items-center justify-center gap-4'>
                        <li><a href="/" className='text-[13px]'>Aloqa Markazi  :</a></li>
                        <li><a href="/" className='text-[18px] font-medium'>+99871 209 99 44</a></li>
                    </ul>
                    <select name="" id="" className='w-[70px] h-[25px] mt-2 flex items-center bg-transparent ml-[20px] pl-[20px]  rounded-2xl'>
                        <option value="">O'Z</option>
                        <option value="">RU</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Top