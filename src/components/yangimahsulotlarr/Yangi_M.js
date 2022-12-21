import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import arava from '../../images/arava.svg'
import torozi from '../../images/torozi.svg'
import like from '../../images/like-default.svg'
function Yangi_M() {
    return (
        <div className='w-full h-[450px] flex flex-col justify-center'>
            <div className="flex justify-between items-center px-[30px]">
                <h1 className='text-[27px] font-semibold'>Yangi Mahsulotlar</h1>
            </div>
            <div className="w-[95%] h-[85%] m-auto grid grid-cols-6">

                <div className="w-[100%] h-[80%] border-r border-gray-300 hover:shadow-md hover:scale-[1.03] duration-300 rounded-[5px] bg-white">
                    <img src="https://backend.texnomart.uz/images/gallery/product/107253/38392/detail.jpg" alt="" className='h-[50%] m-auto mt-[15px]' />

                    <h3 className='w-[90%] ml-[15px]'>Smartfon OPPO Reno7 8/128 To'q sariq</h3>

                    <h1 className='ml-[15px] font-medium mt-[15px]'>4 018 000 so'm</h1>

                    <div className="flex w-[90%] items-center pt-[10px]">
                        <button className='flex items-center rounded-[5px] w-[140px] h-[40px] bg-[#FBC100] ml-[15px] justify-center'> <img src={arava} alt="" className='mr-[10px]' /> Savatchaga</button>
                        <img src={like} alt="" className='w-[15px] ml-[5px]' />
                        <img src={torozi} alt="" className='w-[16px] ml-[5px]' />
                    </div>
                </div>

                <div className="border-r border-gray-300 w-[100%] h-[80%] hover:shadow-md hover:scale-[1.03] duration-300 rounded-[5px] bg-white">
                    <img src="https://backend.texnomart.uz/images/gallery/product/107252/38422/detail.jpg" alt="" className='h-[50%] m-auto mt-[15px]' />
                    <h3 className='w-[90%] ml-[15px]'>Smartfon Samsung Galaxy Z Fold 4 8/256Gb gray</h3>

                    <h1 className='ml-[15px] font-medium mt-[15px]'>22 049 000 so'm</h1>

                    <div className="flex w-[90%] items-center pt-[10px]">
                        <button className='flex items-center rounded-[5px] w-[140px] h-[40px] bg-[#FBC100] ml-[15px] justify-center'> <img src={arava} alt="" className='mr-[10px]' /> Savatchaga</button>
                        <img src={like} alt="" className='w-[15px] ml-[5px]' />
                        <img src={torozi} alt="" className='w-[16px] ml-[5px]' />
                    </div>
                </div>

                <div className="border-r border-gray-300 w-[100%] h-[80%] hover:shadow-md hover:scale-[1.03] duration-300 rounded-[5px] bg-white">
                    <img src="https://backend.texnomart.uz/images/gallery/product/107250/38401/detail.jpg" alt="" className='h-[50%] m-auto mt-[15px]' />
                    <h3 className='w-[90%] ml-[15px]'>Smartfon OPPO Reno7 8/128 To'q sariq</h3>

                    <h1 className='ml-[15px] font-medium mt-[15px]'>4 018 000 so'm</h1>

                    <div className="flex w-[90%] items-center pt-[10px]">
                        <button className='flex items-center rounded-[5px] w-[140px] h-[40px] bg-[#FBC100] ml-[15px] justify-center'> <img src={arava} alt="" className='mr-[10px]' /> Savatchaga</button>
                        <img src={like} alt="" className='w-[15px] ml-[5px]' />
                        <img src={torozi} alt="" className='w-[16px] ml-[5px]' />
                    </div>
                </div>

                <div className="border-r border-gray-300 w-[100%] h-[80%] hover:shadow-md hover:scale-[1.03] duration-300 rounded-[5px] bg-white">
                    <img src="https://backend.texnomart.uz/images/gallery/product/107251/38416/detail.jpg" alt="" className='h-[50%] m-auto mt-[15px]' />
                    <h3 className='w-[90%] ml-[15px]'>Smartfon OPPO Reno7 8/128 To'q sariq</h3>

                    <h1 className='ml-[15px] font-medium mt-[15px]'>4 018 000 so'm</h1>

                    <div className="flex w-[90%] items-center pt-[10px]">
                        <button className='flex items-center rounded-[5px] w-[140px] h-[40px] bg-[#FBC100] ml-[15px] justify-center'> <img src={arava} alt="" className='mr-[10px]' /> Savatchaga</button>
                        <img src={like} alt="" className='w-[15px] ml-[5px]' />
                        <img src={torozi} alt="" className='w-[16px] ml-[5px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Yangi_M