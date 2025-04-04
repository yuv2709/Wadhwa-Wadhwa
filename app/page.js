'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Trust from "@/components/Trust";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Expertise />
    <Trust />
    <Contact />
    <Footer />
    </>
    
  );
}
