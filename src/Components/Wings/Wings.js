import React from "react";

const Wings = () => {
  return (
    <div className="text-slate-600 dark:text-slate-200 p-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mb-14">
      <div className="flex justify-end">
        <div className="bg-white dark:bg-slate-800 rounded-md p-5 w-full md:w-3/4 2xl:w-3/5 shadow-sm hover:shadow-lg transition duration-500">
          <div className="text-2xl font-semibold mb-3">ACM Task Force</div>
          <div className="text-xl text-slate-500">
            Where programmers become Gladiators. We organize workshop, classes,
            contests and many more.
          </div>
        </div>
      </div>

      <div className="flex justify-start md:mt-14 md:-mb-14">
        <div className="bg-white dark:bg-slate-800 rounded-md p-5 w-full md:w-3/4 2xl:w-3/5 shadow-sm hover:shadow-lg transition duration-500">
          <div className="text-2xl font-semibold mb-3">Development</div>
          <div className="text-xl text-slate-500">
            The best way to get a project done faster is to start sooner Start
            development today.
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="bg-white dark:bg-slate-800 rounded-md p-5 w-full md:w-3/4 2xl:w-3/5 shadow-sm hover:shadow-lg transition duration-500">
          <div className="text-2xl font-semibold mb-3">Research & Journal</div>
          <div className="text-xl text-slate-500">
            Why do we do basic research? To learn about ourselves. Start
            learning yourself today.
          </div>
        </div>
      </div>

      <div className="flex justify-start md:mt-14 md:-mb-14">
        <div className="bg-white dark:bg-slate-800 rounded-md p-5 w-full md:w-3/4 2xl:w-3/5 shadow-sm hover:shadow-lg transition duration-500">
          <div className="text-2xl font-semibold mb-3">
            Jobs, Career & Industry Collaboration
          </div>
          <div className="text-xl text-slate-500">
            Worried about your career Lets learn how to build a better and
            skilled career.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wings;
