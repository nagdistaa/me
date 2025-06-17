"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

function StationCard({ name, audioSrc, imgSrc }) {
  const [isPlayed, setIsPlayed] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const audioRef = useRef(null);

  function handlePlayed() {
    setIsPlayed((prev) => {
      if (prev) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      return !prev;
    });
  }

  function handleFavourite() {
    setIsFavourite((prev) => !prev);
  }
  return (
    <div className=" w-full md:w-[300px] h-[200px] p-5 flex justify-center items-center flex-col gap-5 rounded-md cursor-pointer shadow-md ring ring-gray-200  bg-white text-black">
      <div className="w-full h-[50px] flex justify-between items-center ">
        <h1 className="w-2/3">{name}</h1>
        <div className="w-[50px] h-full  rounded-full overflow-hidden">
          <img
            src={imgSrc || "/radio.png"}
            alt="station-img"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <audio className="w-full hidden" ref={audioRef}>
        <source src={audioSrc} type="audio/ogg" />
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
      <div className="w-full h-full flex justify-between items-center border-t-2">
        <div className="w-1/2 flex justify-start items-center gap-10">
          <div>
            <Image
              key={isPlayed ? true : false}
              src={isPlayed ? "/stop.png" : "/play.png"}
              width={20}
              height={20}
              alt=""
              onClick={handlePlayed}
            />
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-en">
          <div onClick={handleFavourite}>
            <Image
              key={isFavourite ? true : false}
              src={
                isFavourite ? "/favouriteHeart.png" : "/unFavouriteHeart.png"
              }
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StationCard;
