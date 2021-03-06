import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import useAuth from "../../Hooks/useAuth";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import EventsCarousel from "../../Components/EventsCarousel/EventsCarousel";

import homeBanner1 from "./../../Media/Images/CarouselItem 1.JPG";
import homeBanner2 from "./../../Media/Images/CarouselItem 2.JPG";
import homeBanner3 from "./../../Media/Images/CarouselItem 3.JPG";
import homeBanner4 from "./../../Media/Images/CarouselItem 4.JPG";
import homeBanner5 from "./../../Media/Images/CarouselItem 5.JPG";
import Wings from "../../Components/Wings/Wings";
import Advisors from "../../Components/Advisors/Advisors";
import Team from "../../Components/Team/Team";

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
const backgroundImage = randomBanner();

// Scrollbar Autohide
var timer = null;
window.addEventListener(
  "scroll",
  function () {
    if (timer !== null) {
      clearTimeout(timer);
    }

    var style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {width: 10px;}`;
    document.head.appendChild(style);

    timer = setTimeout(function () {
      style.innerHTML = `body::-webkit-scrollbar {width: 5px;}`;
      document.head.appendChild(style);
    }, 2000);
  },
  false
);

const Home = () => {
  useDocumentTitle("Computer Programming Club - DIU");
  const { refreshState, toggleRefresh, toggleTheme } = useAuth();

  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200">
      {/* Navbar */}
      <div>
        <div className="hidden xl:block">
          <Navbar></Navbar>
        </div>
        <div className="xl:hidden">
          <NavbarMini></NavbarMini>
        </div>
      </div>

      {/* Top Banner */}
      <div className="">
        <div className="">
          <img src={backgroundImage} alt="" />
        </div>

        <div className="flex max-w-max mx-auto -mt-7 md:-mt-20 xl:-mt-36 backdrop-blur-3xl dark:backdrop-blur-lg rounded-md">
          <div className="bg-white dark:bg-slate-800 p-2 xl:p-5 rounded-md shadow-md bg-opacity-70 dark:bg-opacity-50">
            <div className="font-medium text-xs xl:text-base">
              Daffodil International University
            </div>
            <div className="font-semibold text-lg md:text-3xl xl:text-5xl">
              <span className="text-orange-500">C</span>omputer &{" "}
              <span className="text-orange-500">P</span>rogramming{" "}
              <span className="text-orange-500">C</span>lub
            </div>
          </div>
        </div>
      </div>

      {/* Events Carousel */}
      <div className="my-20 mb-10">
        <div className="text-slate-600 dark:text-slate-200 text-2xl font-semibold text-center">
          Ongoing<span className="text-slate-400 dark:text-slate-500">/</span>
          Upcoming Events
        </div>
        <div className="px-10 xl:px-0">
          <EventsCarousel></EventsCarousel>
        </div>
      </div>
      <div className="text-slate-400 dark:text-slate-600 text-2xl font-semibold text-center my-10">
        -- - --
      </div>
      {/* Events Carousel */}
      <div>
        <div className="text-slate-600 dark:text-slate-200 text-2xl font-semibold text-center">
          CPC Wings
        </div>
        <Wings></Wings>
      </div>
      <div className="text-slate-400 dark:text-slate-600 text-2xl font-semibold text-center my-10">
        -- - --
      </div>
      {/* Advisors */}
      <div>
        <div className="text-slate-600 dark:text-slate-200 text-2xl font-semibold text-center">
          Meet The Advisors
        </div>
        <div className="text-slate-500 dark:text-slate-200 text-sm text-center mt-2">
          The advising teachers of DIU Computer & Programming Club
        </div>
        <Advisors
          advisors={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
        ></Advisors>
      </div>
      <div className="text-slate-400 dark:text-slate-600 text-2xl font-semibold text-center my-10">
        -- - --
      </div>
      {/* Team */}
      <div>
        <div className="text-slate-600 dark:text-slate-200 text-2xl font-semibold text-center">
          Meet The Team
        </div>
        <div className="text-slate-500 dark:text-slate-200 text-sm text-center mt-2">
          The core member of DIU Computer & Programming Club
        </div>
        <Team></Team>
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
        Buttons ??????
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
