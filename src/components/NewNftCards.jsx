import React from 'react';
import NftImg1 from '../assets/images/NftCards1.png'
import NftImg2 from '../assets/images/NftCards2.png'
import NftImg3 from '../assets/images/NftCards3.png'
import LikedImg from '../assets/images/likesImg.svg'
import sIcon from '../assets/images/sIcon.svg'

const NCards = [
    {
        image: NftImg1,
        para1: 'Metroverse Genesis',
        heading: 'Block #1460',
        para: "Owned by <span class='bg-gradient-to-b from-[#ECA54A] from-15% to-[#E59937] bg-clip-text text-transparent font-bold'>BabyKee</span>",
        liked: '1K',
        likedImg: LikedImg,
        number: '21',
        sIcon: sIcon,
    },
    {
        image: NftImg2,
        para1: 'Metroverse Genesis',
        heading: 'Block #1460',
        para: "Owned by <span class='bg-gradient-to-b from-[#ECA54A] from-15% to-[#E59937] bg-clip-text text-transparent font-bold'>BabyKee</span>",
        liked: '1K',
        likedImg: LikedImg,
        number: '21',
        sIcon: sIcon,
    },
    {
        image: NftImg3,
        para1: 'Metroverse Genesis',
        heading: 'Block #1460',
        para: "Owned by <span class='bg-gradient-to-b from-[#ECA54A] from-15% to-[#E59937] bg-clip-text text-transparent font-bold'>BabyKee</span>",
        liked: '1K',
        likedImg: LikedImg,
        number: '21',
        sIcon: sIcon,
    },

]

const NewNftCards = () => {
    const NftCardsList = NCards.map((NCards) => (
        <div className="xl:max-w-[319px] p-[9px] bg-white rounded-[18px] mb-3">
            <div className="flex w-full gap-3">
                <div>
                    <img className='w-full h-full' src={NCards.image} alt="Nft-img-1" />
                </div>
                <div className='w-full'>
                    <p className="text-[#7C7C7C] text-[7px] font-medium leading-3 font-inter " >{NCards.para1}</p>
                    <h2 className='text-[#474749] text-sm font-bold leading-4 pt-2 font-inter '>{NCards.heading}</h2>
                    <p className="text-[#7C7C7C] text-[7px] font-medium leading-3 pt-2 pb-3 font-inter " dangerouslySetInnerHTML={{ __html: NCards.para }}></p>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1'>
                            <img className='mt-[2px]' src={NCards.likedImg} alt="likedimg" />
                            <p className=' text-sm font-medium leading-4 ff-inter text-[#130F26] font-inter '>{NCards.liked}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img className='mt-[2px]' src={NCards.sIcon} alt="icon" />
                            <p className=' pr-4  text-sm font-medium leading-4 ff-inter text-[#130F26] font-inter '>{NCards.number}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <>
            {NftCardsList}
        </>
    )
}

export default NewNftCards
