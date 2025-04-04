import React from 'react';
import { useRouter } from 'next/navigation'; // ✅ Next 13+ App Router

const Expertise = () => {
  const router = useRouter();

  const practiceAreas = [
    { title: "Real Estate Law", id: "real-estate" },
    { title: "Civil Litigation", id: "civil-litigation" },
    { title: "Matrimonial Disputes", id: "matrimonial" },
    { title: "Insolvency & Bankruptcy", id: "insolvency" },
    { title: "Labour & Employment", id: "labour" },
    { title: "Direct Tax", id: "direct-tax" },
    { title: "Indirect Tax & GST", id: "indirect-tax" },
    { title: "Consumer Law", id: "consumer-law" },
    { title: "Criminal Matters", id: "criminal-matters" },
    { title: "Dispute Resolution", id: "dispute-resolution" },
    { title: "Arbitration", id: "arbitration" },
    { title: "Commercial Law", id: "commercial-law" },
  ];

  const handleClick = (id) => {
    router.push(`/expertise#${id}`);
  };

  return (
    <div className="h-screen bg-[url('/assets/Background_Expertise.svg')] bg-cover bg-no-repeat flex items-start justify-center lg:justify-start pt-10 px-6 lg:px-[12%]">
      <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start lg:my-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-oswald text-white my-6">Expertise</h1>
        <h3 className="text-lg sm:text-xl md:text-2xl font-mulish mt-4 px-4 lg:px-0 text-white">Practice Areas</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-y-20 mt-10 w-full h-full max-h-50 max-w-10xl">
          {practiceAreas.map((area, index) => (
            <button
              key={index}
              onClick={() => handleClick(area.id)}
              className="bg-white text-primary font-mulish py-3 px-6 lg:py-5 lg:px-8 rounded-lg shadow-lg hover:bg-gray-200 text-center w-full text-sm sm:text-base lg:text-lg font-normal"
            >
              {area.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
