import assets from "@/assets/assets";
import Image from "next/image";

const Header = () => {
    return (
      <div className="h-screen bg-[url('/assets/bgg_hero.svg')] bg-cover bg-no-repeat">
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-oswald text-primary my-2">Trusted Legal Expertise, Dedicated to Your Success</h1>
          <p className="max-w-2xl text-xl mx-auto font-fira-sans text-primary mb-10">
            Providing strategic legal solutions tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:gap-8 gap-4 mt-4">
              <a href="/contact"><Image src={assets.contactUs_button} alt="" className="w-50" /></a>

              <a href="/expertise"><Image src={assets.practiceAreas_button} alt="" className="w-50" /></a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  