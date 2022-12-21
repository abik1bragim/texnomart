import React from 'react'
import shop from '../../images/shopping-card.svg'
import { GrClose } from 'react-icons/gr'
function Savatcha() {
    return (
        <div className="hidden">
            <div className='absolute w-full h-screen bg-gray-500 flex items-center justify-center z-30'>
                <div className="w-[900px] h-[400px] bg-white rounded-[5px] flex flex-col">
                    <GrClose className='absolute ml-[870px] mt-[10px]' />
                    <h1 className='text-[23px] font-bold ml-[40px] mt-[25px]'>Xozir harid qilish</h1>
                    <div className="h-[180px] flex justify-between items-center flex-col m-auto mt-[30px]" >
                        <img src={shop} alt="" className='m-auto w-[70px]' />
                        <h1 className='w-[200px] font-bold text-[20px] text-center m-auto'>Savatchada hozirda xech nima yo'q</h1>
                    </div>
                    <button className='border-2 border-[#eec200] w-[150px] h-[50px] mt-[-30px] font-medium rounded-[8px] m-auto '>Harid qilish</button>
                </div>
            </div>
        </div>
    )
}

export default Savatcha