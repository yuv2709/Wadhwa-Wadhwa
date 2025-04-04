"use client";

import { useState, useEffect } from "react";

export default function DisclaimerPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("disclaimerLastShown");
    const now = new Date().getTime();

    if (!lastShown || now - parseInt(lastShown, 10) > 20 * 60 * 1000) {
      setShowPopup(true);
    }
  }, []);

  const handleAgree = () => {
    const now = new Date().getTime();
    localStorage.setItem("disclaimerLastShown", now.toString());
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 px-4 font-mulish overflow-y-auto pt-24 pb-10">
      <div className="bg-white p-5 sm:p-8 rounded-lg shadow-2xl w-full max-w-md sm:max-w-xl border border-gray-300">
        <h2 className="text-lg sm:text-2xl font-semibold mb-4 text-center">DISCLAIMER</h2>
        <div className="text-gray-700 text-sm sm:text-base space-y-3 text-left max-h-[60vh] overflow-y-auto pr-2">
          <p>
            The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner.
          </p>
          <p>
            By accessing this website, www.wadhwaco.in, you acknowledge and confirm that you are seeking information relating to Wadhwa & Wadhwa of your own accord and that there has been no form of solicitation, advertisement, or inducement by Wadhwa & Wadhwa or its members.
          </p>
          <p>
            The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material or information provided on this website should be construed as legal advice.
          </p>
          <p>
            Wadhwa & Wadhwa shall not be liable for consequences of any action taken by relying on the material or information provided on this website.
          </p>
          <p>
            The contents of this website are the intellectual property of Wadhwa & Wadhwa.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={handleAgree}
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition text-sm sm:text-base"
          >
            I AGREE
          </button>
        </div>
      </div>
    </div>
  );
}
