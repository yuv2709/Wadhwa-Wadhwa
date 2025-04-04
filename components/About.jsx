import assets from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-[12%] py-10 scroll-mt-20 gap-8">
      {/* Left Section - Images */}
      <div className="w-full lg:w-1/2 flex gap-4 justify-center lg:justify-start">
        <Image
          src={assets.sc_img}
          alt="Attorney 1"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/2 object-cover rounded-lg"
        />
        <Image
          src={assets.sachin_image}
          alt="Attorney 2"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/2 object-cover rounded-lg"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald text-primary my-6">
          Attorneys in Action: Get to Know Wadhwa & Wadhwa's Legal Experts
        </h2>
        <p className="text-lg sm:text-xl md:text-xl font-mulish mt-4 px-4 lg:px-0">
          At Wadhwa & Wadhwa, our skilled attorneys are dedicated to providing strategic legal solutions with unwavering commitment and expertise. With years of experience in diverse legal fields, we tirelessly advocate for our clients, ensuring justice, integrity, and exceptional representation in every case.
        </p>
        <div className="flex flex-col sm:flex-row items-center mt-10">
          <a href="/about">
            <Image src={assets.learnMore_button} alt="Learn More" className="w-40 sm:w-50" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
