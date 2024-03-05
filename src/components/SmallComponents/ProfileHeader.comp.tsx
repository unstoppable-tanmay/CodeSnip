import Image, { StaticImageData } from "next/image";
import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import FallbackImage from "../UtilityComponent/FallbackImage.comp";

const ProfileHeader = ({
  profileImage,
  name,
  designation,
  className,
}: {
  profileImage: string | StaticImageData;
  name: string;
  designation: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "w-[400px] max-w-full flex items-center justify-between gap-3",
        className
      )}
    >
      <div className="profileImage w-10 aspect-square rounded-full relative">
        {<FallbackImage alt="" src={profileImage} className="object-cover" />}
      </div>
      <div className="Data flex flex-col flex-1">
        <div className="Name text-base font-FiraMono font-bold text-def_white line-clamp-1 leading-tight">
          {name}
        </div>
        <div className="connections line-clamp-1 text-[.7rem] font-FiraMono text-def_white/30">
          {designation && "Full Stack Developer"}
        </div>
      </div>
      <div className="detailsIcon text-white">
        <HiDotsHorizontal />
      </div>
    </div>
  );
};

export default ProfileHeader;
