import React from "react";
import { Link } from "react-router-dom";
import EventCardRibbon from "./EventCardRibbon";

const EventCardSmall = ({ eventState }) => {
  return (
    <Link to="/" className="first:mt-0 last:mb-0 my-5 block">
      <div className="p-3 px-5 bg-white dark:bg-slate-800 rounded-md shadow hover:bg-slate-200 dark:hover:bg-slate-600 transition duration-300 relative">
        <div className="text-slate-600 dark:text-slate-300 font-medium text-2xl">
          C-Khoon 2022
        </div>
        <div className="text-xs font-medium text-slate-400 mt-2">
          1 Jan, 2022 - 2 Jan, 2022
        </div>
        <EventCardRibbon eventState={eventState}></EventCardRibbon>
      </div>
    </Link>
  );
};

export default EventCardSmall;
