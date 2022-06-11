import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import useAuth from "../../Hooks/useAuth";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import homeBanner1 from "./../../Media/Images/CarouselItem 1.JPG";
import homeBanner2 from "./../../Media/Images/CarouselItem 2.JPG";
import homeBanner3 from "./../../Media/Images/CarouselItem 3.JPG";
import homeBanner4 from "./../../Media/Images/CarouselItem 4.JPG";
import homeBanner5 from "./../../Media/Images/CarouselItem 5.JPG";

const randomBanner = () => {
  const flag = Math.floor(Math.random() * 5) + 1;
  if (flag === 1) {
    return homeBanner1;
  } else if (flag === 2) {
    return homeBanner2;
  } else if (flag === 3) {
    return homeBanner3;
  } else if (flag === 4) {
    return homeBanner4;
  } else if (flag === 5) {
    return homeBanner5;
  } else {
    return homeBanner1;
  }
};

const Home = () => {
  useDocumentTitle("Computer Programming Club - DIU");
  const { refreshState, toggleRefresh, toggleTheme } = useAuth();

  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200">
      {/* Navbar */}
      <div>
        <div className="hidden xl:block">
          <Navbar></Navbar>
          {/* Space Fix */}
          {/* <div className="h-12 2xl:h-16"></div> */}
        </div>
        <div className="xl:hidden">
          <NavbarMini></NavbarMini>
        </div>
      </div>

      {/* Top Banner */}
      <div className="">
        <div className="">
          <img src={randomBanner()} alt="" />
        </div>

        <div className="flex max-w-max mx-auto -mt-36 backdrop-blur-3xl dark:backdrop-blur-lg rounded-md">
          <div className="bg-white dark:bg-slate-800 p-5 rounded-md shadow-md bg-opacity-70 dark:bg-opacity-50">
            <div className="font-medium">Daffodil International University</div>
            <div className="font-semibold text-5xl">
              <span className="text-orange-500">C</span>omputer &{" "}
              <span className="text-orange-500">P</span>rogramming{" "}
              <span className="text-orange-500">C</span>lub
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mb-12 2xl:mb-16">
        <Navbar></Navbar>
      </div> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Body */}
      <div className="h-[300vh]">
        {/* 
      
            playground
      
      */}
        Upper Boundary
        <br />
        <br />
        <br />
        Home
        <br />
        <br />
        <br />
        Buttons ⬇️
        <br />
        <Link to="/">
          <button>Home</button>
        </Link>{" "}
        <Link to="/user">
          <button>user</button>
        </Link>
        <br />
        <div className="flex justify-around">
          <button
            onClick={() => {
              toggleTheme("light");
            }}
          >
            Light
          </button>
          <button
            onClick={() => {
              toggleTheme("dark");
            }}
          >
            Dark
          </button>
          <button
            onClick={() => {
              toggleTheme("system");
            }}
          >
            System
          </button>
        </div>
        <button onClick={toggleRefresh}>Refresh</button>
        <div
          id="test"
          className={
            refreshState ? "bg-green-400 w-10 h-10" : "bg-blue-400 w-10 h-10"
          }
        ></div>
      </div>
    </div>
  );
};

export default Home;
