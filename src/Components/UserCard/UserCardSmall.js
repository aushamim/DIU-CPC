import React from "react";
import { Link } from "react-router-dom";
import avatar_male from "./../../Media/Images/avatar_male.png";
import avatar_female from "./../../Media/Images/avatar_female.png";
import UserCardRibbon from "./UserCardRibbon";

const UserCard = ({ img, name, relation }) => {
  return (
    <Link to="/" className="first:mt-0 last:mb-0 my-5 block">
      <div className="p-3 px-5 flex items-center bg-white dark:bg-slate-800 rounded-md shadow hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300 relative">
        <div className="w-12 rounded-full">
          <img
            src={
              img === "avatar_male"
                ? avatar_male
                : img === "avatar_female"
                ? avatar_female
                : img
            }
            alt=""
            className="w-full"
          />
        </div>
        <div className="ml-3 text-slate-600 dark:text-slate-300 font-medium text-xl">
          {name}
        </div>
        <UserCardRibbon relation={relation}></UserCardRibbon>
      </div>
    </Link>
  );
};

export default UserCard;
