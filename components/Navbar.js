"use client"

import React, {useState  } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Skills", path: "#skill" },
    { title: "Contact", path: "#contact" },
];

function Navbar() {
    const [ nav, setNav ] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }
  return (
    <div className="select-none z-50 fixed flex justify-center w-full text-white font-bold">

        {/* desktop navigation */}
        <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl
                    hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
            <ul className="flex p-2 space-x-8">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link
                            className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
                            href={link.path}
                        >
                            {link.title}
                        </Link> 
                    </li>
                ))}
            </ul>
        </div>

        {/* mobile navigation */}
        <div onClick={toggleNav} className="md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white-70 p-2">
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
        </div>


        <div className={`md:hidden fixed left-0 top-0 w-full bg-black/90 transform transition-transform duration-300
            ${nav ? "translate-x-0" : "-translate-x-full"}`}
        >
            <ul className="flex flex-col items-center justify-center space-y-8 h-screen">
                {navLinks.map((link, index) => (
                    <li key={index} onClick={closeNav}>
                        <Link
                            className="text-5xl"
                            href={link.path}
                        >
                            {link.title}
                        </Link> 
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default Navbar;