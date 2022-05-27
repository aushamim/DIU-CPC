import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarMini from "../../Components/Navbar/NavbarMini";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const CertificateVerify = () => {
  useDocumentTitle("Certificate Verification");
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-slate-200">
      {/* Navbar */}
      <div>
        <div className="hidden xl:block">
          <Navbar></Navbar>
          <div className="h-12 2xl:h-16"></div>
        </div>
        <div className="xl:hidden">
          <NavbarMini></NavbarMini>
        </div>
      </div>

      {/* Body */}
      <div className="flex justify-center mt-5 md:mt-16">
        <div className="bg-white dark:bg-slate-800 w-3/4 xl:w-2/5 p-2 flex items-center rounded-md shadow">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600 hidden md:block"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
          {/* Search Box */}
          <input
            type="text"
            id="verify-text"
            className="mx-2 outline-0 w-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium md:font-semibold uppercase"
            placeholder="Enter Certificate No."
            autoComplete="off"
            onKeyUp={(key) => {
              if (key.code === "Enter" || key.code === "NumpadEnter") {
                console.log(document.getElementById("verify-text").value);
              }
            }}
          />
          {/* Cross Icon */}
          <button
            onClick={() => {
              document.getElementById("verify-text").value = "";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600 hidden md:block hover:stroke-orange-700 dark:hover:stroke-orange-600"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {/* Search Button Phone */}
          <button
            className="block md:hidden"
            onClick={() => {
              console.log(document.getElementById("verify-text").value);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-home stroke-slate-500 dark:stroke-slate-300 group-hover:stroke-orange-700 dark:group-hover:stroke-orange-600"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </div>
      </div>

      {/* Result */}
      <div className="grid grid-cols-1 xl:grid-cols-4 mt-16 xl:w-3/4 mx-auto p-5 gap-5">
        {/* Certificate Holder Info */}
        <div>
          <div>
            <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
              Certificate Serial
            </div>
            <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
              A1B234C5
            </div>
          </div>
          <div>
            <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
              Certificate Holder Name
            </div>
            <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
              Amjad Uddin Shamim
            </div>
          </div>
          <div>
            <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
              ID
            </div>
            <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
              201-15-14099
            </div>
          </div>
          <div>
            <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
              Email
            </div>
            <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
              amzud15-14099@diu.edu.bd
            </div>
          </div>
          <div>
            <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
              Certificate offered for
            </div>
            <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
              C-Khoon 2022
            </div>
          </div>
          <div>
            <div className="text-xs mb-0.5 text-slate-600 dark:text-slate-400">
              Certificate Status
            </div>
            <div className="text-xl mb-3 text-slate-700 dark:text-slate-300 font-medium">
              Verified &#9989;
            </div>
          </div>
        </div>
        {/* Certificate Image */}
        <div className="xl:col-span-3 max-w-max mx-auto">
          <img
            src="https://files.catbox.moe/trbbij.png"
            alt="Certificate"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateVerify;
