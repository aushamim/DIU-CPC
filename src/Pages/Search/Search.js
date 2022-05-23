import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";

const Search = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200">
      {/* Navbar */}
      <div>
        <div className="hidden xl:block mb-12 2xl:mb-16">
          <Navbar></Navbar>
        </div>
        <div className="xl:hidden">
          <NavbarMini></NavbarMini>
        </div>
      </div>

      {/* Body */}
      <div>search</div>
    </div>
  );
};

export default Search;
