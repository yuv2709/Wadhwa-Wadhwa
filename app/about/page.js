import assets from "@/assets/assets";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <div className="bg-[url('/assets/Background_grey.png')] bg-cover bg-no-repeat min-h-screen bg-gray-100 p-8 flex flex-col">
      {/* About Us Heading at the Top Center */}
      <h1 className="text-center text-primary text-5xl mb-10 mt-20">About Us</h1>

      {/* First Lawyer Section - Mr. S.C. Wadhwa */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:ml-[100px]">
        {/* Left Section - Lawyer Image */}
        <div className="w-auto md:mr-6 my-6 md:my-0">
          <Image
            src={assets.sc_img}
            alt="Lawyer"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Description */}
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Mr. S.C. Wadhwa</h2>
          <p className="text-black font-mulish text-lg leading-loose">
            Under the esteemed leadership of Mr. S.C. Wadhwa, this law firm has been a pillar of trust and 
            excellence in the legal field since 1967. A distinguished legal scholar, he earned his Bachelor of 
            Law from Chandigarh, laying the foundation for a career dedicated to upholding justice with unwavering 
            integrity.  

            With a deep understanding of the law and an unshakable commitment to his clients, Mr. Wadhwa has guided 
            countless individuals and businesses through complex legal matters, always prioritizing fairness, 
            ethical practice, and diligence. His expertise, coupled with his ability to approach each case with 
            conviction and strategic foresight, has earned him immense respect among peers and clients alike.  
          </p>
        </div>
      </div>

      {/* Add Space Before Second Section to Ensure Scrolling */}
      <div className="mt-20"></div>

      {/* Second Lawyer Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:ml-[100px]">
        {/* Left Section - Lawyer Image */}
        <div className="w-auto md:mr-6 my-6 md:my-0">
          <Image
            src={assets.sachin_image} // Replace with actual second lawyer’s image
            alt=""
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section - Description */}
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Mr. Sachin Wadhwa</h2>
          <p className="text-black font-mulish text-lg leading-loose">
  Mr. Sachin Wadhwa, carrying forward the esteemed legacy of this law firm, has played a pivotal role in elevating its stature to new heights. A distinguished legal professional, he earned his Bachelor of Law degree from Delhi University, a foundation that enabled him to master the intricacies of the legal domain.  

  With a keen analytical mind and an unwavering commitment to justice, Mr. Wadhwa has expanded the firm&apos;s expertise into multiple legal fields. His proficiency spans corporate law, taxation, litigation, and regulatory compliance, making him a trusted advisor to individuals and businesses alike.  

  Known for his sharp legal acumen and strategic approach, Mr. Wadhwa has successfully navigated complex cases, ensuring favorable outcomes for his clients. His deep understanding of both direct and indirect taxation, including GST regulations, has positioned him as a go-to expert for businesses seeking legal clarity in financial matters.  

  Under his leadership, the firm has not only upheld its reputation for integrity and excellence but has also embraced modern legal practices to adapt to the ever-evolving landscape. With a vision for the future and a deep respect for the firm&apos;s heritage, Mr. Sachin Wadhwa continues to drive its success, ensuring that it remains a beacon of trust, expertise, and legal excellence.  
</p>

        </div>
      </div>
    </div>
    <Footer />
    </>
  );
  
  
}
