import React from 'react'
import HistoryCards from './HistoryCards'

const History = () => {
    return (
        <div>
            <div className='max-w-[320px] rounded-[18px] bg-white p-6 ]'>
                <div className='flex justify-between items-center'>
                    <p>History</p>
                    <select className='flex items-center group border text-[#4F4F4F] outline-none border-[#A8A8A8] rounded py-2 ps-2 pr-1 relative'>Last Month <svg className=' ms-1 mt-[2px] group-focus:rotate-180 duration-500' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.6663 5.6665L7.99967 10.3332L3.33301 5.6665" stroke="#7C7C7C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                        <option value='hello' className='hover:bg-slate-100'>Last Month</option>
                        <option value='hello' className='hover:bg-slate-100'>August</option>
                        <option value='hello' className='hover:bg-slate-100'>September</option>
                        <option value='hello' className='hover:bg-slate-100'>October</option>
                    </select>
                </div>
                <div>
                    <HistoryCards />
                </div>
                <button className='text-sm text-white shadow-[6px_4px_25px_0_rgba(229,156,62,0.3)] font-medium leading-5 py-2 px-4 -ml-2 bg-gradient-to-br from-20% from-[#FFC881] to-[#DA8517]  w-[290px] text-center rounded-full '>Show All</button>
            </div>
        </div>
    )
}

export default History
