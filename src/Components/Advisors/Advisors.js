import React from "react";

const advisorsRenderer = (advisors, splitSize = 5) => {
  let newAdvisors = [];
  if (advisors.length > 5) {
    for (let i = 0; i < advisors.length; i += splitSize) {
      const x = advisors.slice(i, i + splitSize);
      newAdvisors.push(x);
    }
    return newAdvisors.map((advisors) => (
      <div
        key={Math.random()}
        className="flex items-center justify-center gap-16 mb-16 last:mb-0"
      >
        {advisors.map((x) => (
          <div key={Math.random()} className="max-w-max">
            <div className="w-20 h-20 md:w-36 md:h-36 mx-auto">
              <img
                src="https://cpc.daffodilvarsity.edu.bd/img/5.png"
                alt="Tanzina Afroz Rimi"
                className="w-full"
              />
            </div>
            <div className="text-center font-semibold text-lg mt-2">
              Tanzina Afroz Rimi
            </div>
            <div className="text-center font-semibold text-sm">
              Advisor (ACM)
            </div>
          </div>
        ))}
      </div>
    ));
  } else {
    return (
      <div className="flex items-center justify-center gap-16">
        {advisors.map((x) => (
          <div key={Math.random()} className="max-w-max">
            <div className="w-20 h-20 md:w-36 md:h-36 mx-auto">
              <img
                src="https://cpc.daffodilvarsity.edu.bd/img/5.png"
                alt="Tanzina Afroz Rimi"
                className="w-full"
              />
            </div>
            <div className="text-center font-semibold text-lg mt-2">
              Tanzina Afroz Rimi
            </div>
            <div className="text-center font-semibold text-sm">
              Advisor (ACM)
            </div>
          </div>
        ))}
      </div>
    );
  }
};

const Advisors = ({ advisors = [] }) => {
  const width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
  return (
    <div className="mt-10 p-5">
      <div>
        {advisorsRenderer(advisors, width < 768 ? (width < 500 ? 2 : 3) : 5)}
      </div>
    </div>
  );
};

export default Advisors;
