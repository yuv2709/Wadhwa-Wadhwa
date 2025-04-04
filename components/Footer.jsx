import assets from "@/assets/assets"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="mt-20">
        <div className="text-center">
            <Image src={assets.logo} alt="" className="w-60 mx-auto mb-6" />

            <div className="w-max flex items-center gap-2 mx-auto">
            <Image src={assets.email_icon} alt="" className="w-6" />
            sachinwadhwaadvocate@gmail.com
            </div>
        </div>

        <div className="text-center sm: flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>© 2025 Wadhwa & Wadhwa All Rights Reserved.</p>
        </div>
        </div>
  )
}

export default Footer