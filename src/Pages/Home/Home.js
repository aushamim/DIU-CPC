import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import useAuth from "../../Hooks/useAuth";
import NavbarMini from "../../Components/Navbar/NavbarMini";

const Home = () => {
  useDocumentTitle("Computer Programming Club - DIU");
  const { refreshState, toggleRefresh, toggleTheme } = useAuth();

  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white h-[300vh]">
      <div>
        <div className="hidden xl:block mb-12 2xl:mb-16">
          <Navbar></Navbar>
        </div>
        <div className="xl:hidden">
          <NavbarMini></NavbarMini>
        </div>
      </div>
      {/* 
      
            playground
      
      */}
      lol
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
  );
};

export default Home;
