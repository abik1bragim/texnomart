import React from 'react'
import '../navbar/Navbar.css'
import Qalpoq from '../../images/qalpoq.png'
import Texnomart from '../../images/texnomart.svg'
import Buyurtma from '../../images/buyurtma.svg'
import { BiMicrophone, BiSearch } from 'react-icons/bi'
import { RiScalesFill } from 'react-icons/ri'
import { FiHeart } from 'react-icons/fi'
import { SlUser } from 'react-icons/sl'
import { HiOutlineShoppingCart } from 'react-icons/hi'

function Navbar() {

    const Open = () => {

    }
    return (
        <nav>
            <div className='w-full h-[70px] flex items-center'>
                <div className="w-[300px] h-[80%] flex flex-col items-center justify-center">
                    <img src={Qalpoq} alt="" className='mt-[-7px] ml-[-3px] absolute' />
                    <img src={Texnomart} alt="" className='mt-[5px] ml-[-9px]' />
                </div>

                <div className="w-[585px] h-[65%] mt-[13px] border-[2px] border-[#FBC100] bg-[#fbc100] rounded-[8px] overflow-hidden flex items-center">
                    <select className='w-[30%] h-[100%] outline-none text-[12px] px-[13px] bg-[#F7F7F7]'>
                        <option value="">Barcha kategoriyalar</option>
                        <option value="">Maishiy texnika</option>
                        <option value="">Ofis jihozlari</option>
                        <option value="">Oshxona uchun texnika</option>
                        <option value="">Uy uchun idishlar</option>
                        <option value="">Avtomobil uchun mahsulotlar</option>
                        <option value="">iqlim texnikasi</option>
                        <option value="">Barcha kategoriyalar</option>
                    </select>

                    <div className='w-[70%] h-[100%] rounded-r-[5px] flex items-center overflow-hidden'>
                        <input type="text" className='outline-none w-[85%] h-[100%] px-[10px]' />
                        <BiMicrophone className='bg-[#fff] h-[100%] w-[15%] p-[7px] text-[#BABAC0] text-[5px] hover:text-red-400' />
                    </div>

                    <button className='w-[8%] h-[100%] bg-[#fbc100] flex items-center justify-center'>
                        <BiSearch className='text-[24px]' />
                    </button>


                </div>
                <div className="w-[400px] h-[70%] mt-[10px] ml-[30px] flex items-center justify-between">
                    <div className="h-[100%] flex flex-col items-center justify-center">
                        <img src={Buyurtma} alt="" className='mb-[-5px]' />
                        <h1 className='text-[15px] font-medium tracking-tight'>Buyurtma holati</h1>
                    </div>
                    <div className="h-[100%] flex flex-col items-center justify-center">
                        <SlUser  className='text-[22px]'/>
                        <h1 className='text-[15px] font-medium tracking-tight'>Kirish</h1>
                    </div>
                    <div className="h-[100%] flex flex-col items-center justify-center">
                        <RiScalesFill className='text-[22px]' />
                        <h1 className='text-[15px] font-medium tracking-tight'>Taqqoslash</h1>
                    </div>
                    <div className="h-[100%] flex flex-col items-center justify-center">
                        <FiHeart  className='text-[22px]'/>
                        <h1 className='text-[15px] font-medium tracking-tight'>Sevimlilar</h1>
                    </div>
                    <div className="h-[100%] flex flex-col items-center justify-center">
                        <HiOutlineShoppingCart  className='text-[25px]' onClick={Open}/>
                        <h1 className='text-[15px] font-medium tracking-tight'>Savatcha</h1>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar