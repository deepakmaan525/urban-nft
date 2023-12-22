import React from "react";
import trendingImg1 from "../assets/images/trending1.png";
import trendingBg1 from "../assets/images/Trendingbg1.png";
import trendingImg2 from "../assets/images/trending2.png";
import trendingBg2 from "../assets/images/Trendingbg2.png";
import trendingImg3 from "../assets/images/trending3.png";
import trendingBg3 from "../assets/images/Trendingbg3.png";
const Trending = [
  {   
    bgImg: trendingBg1,
    img: trendingImg1,
    para1: "Noryoz",
    para2: "1.8K",
  },
  {  
    bgImg: trendingBg2,
    img: trendingImg2,
    para1: "Bored Ape Solana Club",
    para2: "6.0K",
  },
  {   
    bgImg: trendingBg3,
    img: trendingImg3,
    para1: "Boryoku Dragonz",
    para2: "7.8K",
  },
];
const TrendingCard = () => {
  const MyData = Trending.map((Trending) => (
    <div className="md:w-4/12 sm:w-6/12 w-full px-3 sm:mt-4 mt-3" >
      <div style={{ backgroundImage: `url(${Trending.bgImg})` }} className={`card w-full h-full pt-[62px] pb-2 flex flex-col justify-end items-center rounded-[18px] relative z-[1] overflow-hidden  bg-no-repeat bg-cover object-cover`}>
        <img src={Trending.img} alt="dragon" />
        <p className="text-white text-center font-Inter text-base font-semibold font-inter ">{Trending.para1}</p>
        <p className="text-[11px] font-Inter font-normal text-center text-white font-inter ">{Trending.para2}</p>
        <div className="w-full h-[69px] absolute bottom-0 left-0 -z-[1]  backdrop-blur-sm bg-[#6A6A6A] bg-opacity-70"></div>
      </div>
    </div>
  ));
  return (
    <div>    
      <div className="flex flex-wrap w-full -mx-3 flex-row justify-center">{MyData}</div>
    </div>
  );
};

export default TrendingCard;