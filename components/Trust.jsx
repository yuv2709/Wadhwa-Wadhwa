import React from 'react';

const Trust = () => {
  const trustPoints = [
    {
      title: "Experience & Expertise",
      description: "Our legal team brings years of experience and deep expertise across multiple legal domains."
    },
    {
      title: "Client-Centered Approach",
      description: "We prioritize our clients' needs, offering personalized solutions with transparency and integrity."
    },
    {
      title: "Proven Track Record",
      description: "We have successfully represented numerous clients, delivering favorable outcomes with dedication."
    }
  ];

  return (
    <div className="h-screen bg-[url('/assets/Background_Trust.svg')] bg-cover bg-no-repeat flex flex-col justify-between items-center px-6 lg:px-[12%] pb-20">
        {/* Centered Heading */}
        <div className="w-full text-center flex flex-col items-center pt-10 mt-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-oswald text-white my-6">
                Why Put Your Trust In Us?
            </h1>
        </div>

        {/* Three-Column Section at Bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl text-center text-white bg-opacity-20 p-6 rounded-lg shadow-md mb-10">
            {trustPoints.map((point, index) => (
                <div key={index} className="flex flex-col items-center">
                <h2 className="font-mulish font-semibold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-5 lg:mb-6 text-white">
                  {point.title}
                </h2>
                <p className="font-mulish font-semibold text-sm sm:text-base lg:text-lg text-gray-300">
                  {point.description}
                </p>
              </div>
              
            ))}
        </div>
    </div>
  );
}

export default Trust;
