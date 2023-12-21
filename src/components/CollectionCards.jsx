import React from "react";
import CollectionImg1 from "../assets/images/collectionImg1.png";
import CollectionBg1 from "../assets/images/collectionBg.png";
import CollectionImg2 from "../assets/images/collectionImg2.png";
import CollectionBg2 from "../assets/images/collectionBg2.png";
import CollectionImg3 from "../assets/images/collectionImg3.png";
import CollectionBg3 from "../assets/images/collectionBg3.png";
const Collection = [
  {
   
    bgImg: CollectionBg1,
    img: CollectionImg1,
    para1: " Jozo Gators",
    para2: "1.1K",
  },
  {
  
    bgImg: CollectionBg2,
    img: CollectionImg2,
    para1: "PXN: Ghost Division",
    para2: "10K",
  },
  {
   
    bgImg: CollectionBg3,
    img: CollectionImg3,
    para1: "Ragnarok Meta",
    para2: "7.8K",
  },
];
const CollectionCard = () => {
  const MyData = Collection.map((Collection) => (
    <div className="md:w-4/12 sm:w-6/12 w-full px-3 sm:mt-4 mt-3" >
      <div style={{ backgroundImage: `url(${Collection.bgImg})` }} className={`card w-full h-full pt-[62px] pb-2 flex flex-col justify-end items-center rounded-[18px] relative z-[1] overflow-hidden  bg-no-repeat bg-cover object-cover`}>
        <img src={Collection.img} alt="dragon" />
        <p className="text-white text-center font-Inter text-base font-semibold">{Collection.para1}</p>
        <p className="text-[11px] font-Inter font-normal text-center text-white">{Collection.para2}</p>
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

export default CollectionCard;