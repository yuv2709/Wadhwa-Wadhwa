"use client";

import assets from "@/assets/assets";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const sideMenuRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    };

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    };

    return (
        <nav className={`w-full fixed px-5 lg:px-10 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ease-in-out 
            ${scrolling 
                ? "bg-[rgba(255,255,255,0.58)] backdrop-blur-md border border-white/20 shadow-sm" 
                : "bg-transparent border border-transparent"
            }`}>

            {/* Logo */}
            <a href="">
                <Image src={assets.logo} alt="" className="w-54 cursor-pointer"/>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-10 lg:gap-30 ml-auto rounded-full px-12 py-3">
                <li><a className="font-fira-sans-condensed text-primary" href="/">Home</a></li>
                <li><a className="font-fira-sans-condensed text-primary" href="/about">About Us</a></li>
                <li><a className="font-fira-sans-condensed text-primary" href="/expertise">Expertise</a></li>
                <li><a className="font-fira-sans-condensed text-primary" href="/contact">Contact Now</a></li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4">
                <button className="block md:hidden ml-3" onClick={openMenu}>
                    <Image src={assets.menu_icon} alt="" className="w-10 cursor-pointer"/>
                </button>
            </div>

            {/* Mobile Menu */}
            <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-white shadow-2xl transition duration-500">
                
                <div className="absolute right-6 top-6" onClick={closeMenu}>
                    <Image src={assets.close_icon} alt="" className="w-8 cursor-pointer"/>
                </div>

                <li><a className="font-fira-sans-condensed text-primary" onClick={closeMenu} href="/">Home</a></li>
                <li><a className="font-fira-sans-condensed text-primary" onClick={closeMenu} href="/about">About Us</a></li>
                <li><a className="font-fira-sans-condensed text-primary" onClick={closeMenu} href="/expertise">Expertise</a></li>
                <li><a className="font-fira-sans-condensed text-primary" onClick={closeMenu} href="/contact">Contact Now</a></li>
            </ul>

        </nav>
    );
};

export default Navbar;
