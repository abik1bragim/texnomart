import React from 'react'
import Plesos from '../../images/pilesos.svg'
import Planshet from '../../images/planshet.svg'
import Muzlatgich from '../../images/muzlatgich.svg'
import XavoSov from '../../images/xavosovutgich.svg'
import TV from '../../images/televizor.svg'
function Ommabop() {
    return (
        <div className='w-full h-[160px]'>
            <h1 className='font-semibold text-[23px] ml-[20px]'>Ommabop Kategoriyalar</h1>
            <div className="w-[100%] flex items-center justify-between px-[20px] mt-[20px]">
                <div className="flex items-center w-[250px] h-[70px] border border-gray-300 rounded-[7px] justify-around px-[16px]">
                    <img src={Plesos} alt="" />
                    <h1>Changyutgich</h1>
                </div>
                <div className="flex items-center w-[250px] h-[70px] border border-gray-300 rounded-[7px] justify-around px-[16px]">
                    <img src={Planshet} alt="" />
                    <h1>Planshet</h1>
                </div>
                <div className="flex items-center w-[250px] h-[70px] border border-gray-300 rounded-[7px] justify-around px-[16px]">
                    <img src={Muzlatgich} alt="" />
                    <h1>Muzlatgich</h1>
                </div>
                <div className="flex items-center w-[250px] h-[70px] border border-gray-300 rounded-[7px] justify-around px-[16px]">
                    <img src={XavoSov} alt="" />
                    <h1>Xavo sovutgich</h1>
                </div>
                <div className="flex items-center w-[250px] h-[70px] border border-gray-300 rounded-[7px] justify-around px-[16px]">
                    <img src={TV} alt="" />
                    <h1>Televizor</h1>
                </div>
            </div>
        </div>
    )
}

export default Ommabop