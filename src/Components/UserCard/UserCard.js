import React from "react";
import def_cover from "./../../Media/Images/def_cover.jpg";
import avatar_male from "./../../Media/Images/avatar_male.png";
import avatar_female from "./../../Media/Images/avatar_female.png";
import BadgeSpecial from "../Badge/BadgeSpecial";
import Badge from "../Badge/Badge";

const UserCard = () => {
  return (
    <div className="bg-white dark:bg-slate-800 shadow-sm w-80 xl:w-full mx-auto relative">
      {/* Cover */}
      <div className="h-[135px] xl:h-24 2xl:h-36">
        <img src={def_cover} alt="Cover" className="w-full rounded-t-md" />
      </div>
      {/* DP */}
      <div className="rounded-full relative -top-10 xl:-top-8 2xl:-top-10 left-5 xl:left-2 2xl:left-5">
        <div className="rounded-full absolute shadow-md w-20 h-20 xl:w-16 xl:h-16 2xl:w-20 2xl:h-20">
          <img src={avatar_male} alt="Avatar" className="w-full" />
        </div>
        <span className="text-xl font-semibold text-slate-600 dark:text-slate-300 absolute top-10 left-20 xl:left-16 2xl:left-20 truncate w-[220px] xl:w-40 2xl:w-[235px]">
          Amjad Uddin
        </span>
      </div>
      {/* Badge */}
      <BadgeSpecial></BadgeSpecial>
      <div className="absolute top-1 right-1 bg-yellow-200 w-max h-32 xl:h-[90px] 2xl:h-32 flex flex-col-reverse overflow-y-scroll scrollbar-hidden">
        <Badge></Badge>
        <Badge></Badge>
        <Badge></Badge>
        <Badge></Badge>
        <Badge></Badge>
        <Badge></Badge>
        <Badge></Badge>
        <Badge></Badge>
        <Badge></Badge>
      </div>
      {/* Spacing Fix */}
      <div className="h-10 xl:h-8 2xl:h-10"></div>
      <div>aghjcvjah</div>
    </div>
  );
};

export default UserCard;
