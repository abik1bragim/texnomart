import React from 'react'
import Olish from '../../images/installment.svg'
import Yetkazish from '../../images/yetkazibberish.svg'
import Kafolat from '../../images/kafolat.svg'
import Bonus from '../../images/bonus.svg'
import Yordam from '../../images/yordam.svg'
function Mudatlar() {
    return (
        <div className='w-full h-[450px] flex flex-col items-center'>
            <h1 className='text-[23px] font-semibold mt-[70px]'>Телефонлар ва маиший техника муддатли тўловга</h1>

            <div className="w-[95%] h-[250px] border border-gray-200 rounded-[5px] flex items-center justify-center mt-[20px]">
                <div className="w-[350px] h-[70%] border-r border-gray-200 flex flex-col items-center justify-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#eee] flex items-center justify-center">
                        <img src={Olish} alt="" />
                    </div>
                    <h1 className='font-semibold w-[70%] text-center mt-[10px]'>Муддатли тўловга сотиб олиш</h1>
                    <p className='w-[71%] text-center text-[13px]'>Техномартда маиший техника маҳсулотлари учун қулай онлайн тўлов</p>
                </div>

                <div className="w-[350px] h-[70%] border-r border-gray-200 flex flex-col items-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#eee] flex items-center justify-center">
                        <img src={Yetkazish} alt="" />
                    </div>
                    <h1 className='font-semibold w-[70%] text-center mt-[10px]'>Бепул етказиб бериш</h1>
                    <p className='w-[71%] text-center text-[14px]'>Техномартга товарларни eтказиб бериш шартлари</p>
                </div>

                <div className="w-[350px] h-[70%] border-r border-gray-200 flex flex-col items-center justify-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#eee] flex items-center justify-center">
                        <img src={Kafolat} alt="" />
                    </div>
                    <h1 className='font-semibold w-[70%] text-center mt-[10px]'>Маҳсулотлар учун кафолат</h1>
                    <p className='w-[100%] text-center text-[13px]'>Техномартда маҳсулотнинг кафолати ва қайтарилиши ҳақида ҳамма нарсани билиб олинг</p>
                </div>

                <div className="w-[300px] h-[70%] border-r border-gray-200 flex flex-col items-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#eee] flex items-center justify-center">
                        <img src={Bonus} alt="" />
                    </div>
                    <h1 className='font-semibold w-[70%] text-center mt-[10px]'>Бонус тизими</h1>
                    <p className='w-[71%] text-center text-[14px]'>Бонус тизими</p>
                </div>

                <div className="w-[300px] h-[70%] border-l border-gray-200 flex flex-col items-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#eee] flex items-center justify-center">
                        <img src={Yordam} alt="" />
                    </div>
                    <h1 className='font-semibold w-[70%] text-center mt-[10px]'>Ёрдам</h1>
                    <p className='w-[71%] text-center text-[14px]'>Кўп бериладиган саволлар</p>
                </div>
            </div>
        </div>
    )
}

export default Mudatlar