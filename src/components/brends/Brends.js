import React from 'react'
import Apple from '../../images/apple.webp'
import Bosch from '../../images/bosch.webp'
import hp from '../../images/hp.webp'
import Tefal from '../../images/tefal.webp'
import Philips from '../../images/philips.webp'
import Samsung from '../../images/samsung.webp'
import LG from '../../images/LG.webp'
import OPPO from '../../images/oppo.webp'
function Brends() {
    return (
        <div className='w-full h-[150px] flex items-center justify-between px-[20px]'>
            <div className="w-[150px] h-[70px] rounded-[8px] border flex items-center justify-center bg-white">
                <img src={Apple} alt="" className='w-[80px]' />
            </div>
            <div className="w-[150px] h-[70px] rounded-[8px] border flex items-center justify-center bg-white">
                <img src={Bosch} alt="" className='w-[80px]' />
            </div>
            <div className="w-[150px] h-[70px] rounded-[8px] border flex items-center justify-center bg-white">
                <img src={hp} alt="" className='w-[80px]' />
            </div>
            <div className="w-[150px] h-[70px] rounded-[8px] border flex items-center justify-center bg-white">
                <img src={Tefal} alt="" className='w-[80px]' />
            </div>
            <div className="w-[150px] h-[70px] rounded-[8px] border flex items-center justify-center bg-white">
                <img src={Philips} alt="" className='w-[80px]' />
            </div>
            <div className="w-[150px] h-[70px] rounded-[8px] border flex items-center justify-center bg-white">
                <img src={Samsung} alt="" className='w-[80px]' />
            </div>
            <div className="w-[150px] h-[70px] rounded-[8px] border flex items-center justify-center bg-white">
                <img src={LG} alt="" className='w-[80px]' />
            </div>
            <div className="w-[150px] h-[70px] rounded-[8px] border flex items-center justify-center bg-white">
                <img src={OPPO} alt="" className='w-[80px]' />
            </div>







        </div>
    )
}

export default Brends