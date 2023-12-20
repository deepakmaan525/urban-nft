import React from 'react';
import HistoryImg1 from '../assets/images/history1.png'
import HistoryImg2 from '../assets/images/history2.png'
import HistoryImg3 from '../assets/images/history3.png'
import sIcon from '../assets/images/sIcon.svg'

const Hcards = [
    {
        image: HistoryImg1,
        para1: 'Cets on Creck',
        heading: 'Cet #6882',
        number: '250',
        sIcon: sIcon,
    },
    {
        image: HistoryImg2,
        para1: 'Cets on Creck',
        heading: 'Cet #6882',
        number: '250',
        sIcon: sIcon,
    },
    {
        image: HistoryImg3,
        para1: 'Cets on Creck',
        heading: 'Cet #6882',
        number: '250',
        sIcon: sIcon,
    },
   

]

const HistoryCards
 = () => {
    const HcardsList = Hcards.map((Hcards) => (
       <div className='flex pb-3'>
            <img className=' pr-3' src={Hcards.image} alt="HistoryImg" />
            <div className=' justify-between flex w-full items-center'>
                <div>
                    <h2 className='text-[#474749] text-sm font-bold leading-4 pb-[6px]'>{Hcards.heading}</h2>
                    <p className='text-[#474749] text-xs font-normal leading-4'>{Hcards.para1}</p>
                </div>
                <div className='flex items-center'>
                    <img src={Hcards.sIcon} alt="icon" />
                    <p className='text-[#474749] text-xs font-normal leading-4'>{Hcards.number}</p>
                </div>
            </div>
       </div>
    ))
    return (
        <>
                {HcardsList}
        </>
    )
}

export default HistoryCards

