import React from "react"
import { FaInstagram, FaFacebook,  } from "react-icons/fa";

function Footer() {
  return (
    <div className="select-none flex justify-between items-center max-w-[1200px] mx-auto py-8 text-white/70 border-t-2 border-gray-700">
        <h1 className="text-2xl font-bold">Pancheewa Thapom</h1>
        <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/pancheewa.thpm/" target="_blank" className="hover:text-gray-300">
                <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/pancheewa.thpm/" target="_blank" className="hover:text-gray-300">
                <FaInstagram size={24} />
            </a>
        </div>
    </div>
  )
}

export default Footer;