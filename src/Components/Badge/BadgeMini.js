import React from "react";

const Badge = ({ role }) => {
  return (
    <div
      className={`text-[10px] font-semibold text-amber-700 bg-amber-300 dark:bg-opacity-100 bg-opacity-75 w-max px-1 py-[2px] flex items-center rounded-full ml-[2px]`}
    >
      {role}
    </div>
  );
};

export default Badge;
