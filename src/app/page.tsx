"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Menu, X, ShoppingCart, RefreshCw, TrendingUp, User, Briefcase, Banknote, PhoneCall, Plane, Wrench, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //Hamburg

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", name: "Home" },
        { id: "about", name: "About" },
        { id: "services", name: "Services" },
        { id: "contact", name: "Contact" }
      ];
      sections.forEach(({ id, name }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string, name: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(name);
    setIsMobileMenuOpen(false); //Hamburg
  };

  return (
    <div className=" bg-white font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-8 md:px-16 py-4 flex justify-between items-center z-50">
        <span className="text-[#205781] text-xl font-semibold font-montserrat">Topologics Solutions Inc.</span>
        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={32} className="text-[#205781]" /> : <Menu size={32} className="text-[#205781]" />}
        </button>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          {["Home", "About", "Services"].map((item) => (
            <li
              key={item}
              className={`cursor-pointer px-3 py-1 rounded-md transition ${
                activeSection === item ? "bg-[#205781] text-white" : "hover:text-[#205781]"}`}
              onClick={() => handleNavClick(item.toLowerCase(), item)}> {item}
            </li>
          ))}
        </ul>
        <button
          onClick={() => handleNavClick("contact", "Contact")}
          className="hidden md:block px-6 py-2 bg-[#205781] text-white rounded-lg"> Contact Us
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center space-y-6 shadow-lg transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <button className="absolute top-5 right-5" onClick={() => setIsMobileMenuOpen(false)}>
          <X size={32} className="text-[#205781]" />
        </button>
        {["Home", "About", "Services", "Process", "Contact"].map((item) => (
          <button
            key={item}
            className={`text-lg px-4 py-2 rounded-md transition ${
              activeSection === item ? "bg-[#205781] text-white" : "hover:text-[#205781]"}`}
            onClick={() => handleNavClick(item.toLowerCase(), item)}>{item}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section id="home" className="bg-[#4F959D] py-40 px-6 flex flex-col items-center justify-center text-center md:text-left md:flex-row md:gap-10">
        <div className="max-w-xl">
          <h3 className="text-[#205781] font-medium font-lato">Pay Easy.</h3>
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase mb-4 font-montserrat">Digital Transactions, Redefined.</h1>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
            {["Secure", "Innovative", "Accessible", "User-Friendly"].map((skill, index) => (
              <span key={index} className="bg-white text-sm px-3 py-1 rounded-lg shadow">
                {skill}
              </span>
            ))}
          </div>
          <p className="text-gray-200 text-lg mt-4 font-lato">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#205781] text-white rounded-lg shadow-md">
                Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#205781", color: "white" }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#205781] text-[#205781] px-6 py-2 rounded-lg shadow-md">
              Learn More
            </motion.button>
          </div>
        </div>
        {/* Right Side: Image + Info Card */}
        <div className="relative flex flex-col items-center md:items-start">
          <Image
            src="/assets/hero.png"
            alt="Seamless Payments"
            width={500}
            height={500}
            className="w-full max-w-sm md:max-w-md"
          />
          {/* Info Card*/}
          <div className="relative bottom-5 md:bottom-10 right-0 bg-white p-4 md:p-6 rounded-lg shadow-lg w-60 md:w-80 text-center">
            <p className="text-gray-600 font-lato">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      
      {/* Trusted By */}
      <section className="px-8 md:px-16 py-10 flex flex-col items-center text-center bg-white shadow-md rounded-lg mx-6 md:mx-16 -mt-20">
        <p className="text-gray-600 text-lg"> Beneficiaries within the <span className="text-[#205781] font-semibold"> Philippine Enterprises</span></p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <p className="mt-2 text-gray-800">E-commerce</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-2 text-gray-800">Financial</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-2 text-gray-800">Telecommunications</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-2 text-gray-800">Travel</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-2 text-gray-800">Service-Based</p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section id="about" className="px-8 md:px-16 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 relative">
          <Image src="/assets/business.png" alt="Businessman" width={450} height={350} className="rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-[#205781] font-medium">Who we are</h3>
          <h2 className="text-3xl font-bold mt-2 font-lato">Expert Online Payment Gateway Solutions: Secure, Efficient, and Reliable.</h2>
          <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center space-x-3 font-lato">
              <span className="text-[#205781]">✔</span>
              <p>Trusted Partner</p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#205781]">✔</span>
              <p>Fastpace Platform</p>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#205781]">✔</span>
              <p>Tested Reliability</p>
            </li>
          </ul>
        </div>
      </section>
    

     {/* Services Section */}
     <section id="services" ref={ref} className="px-8 md:px-16 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8 font-lato">
          {[ 
            { title: "Shopping Cart Integration", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { title: "Abandoned Cart Recovery", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { title: "Automated Proration & Upgrades", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { title: "User-friendly Interface", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
          ].map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }} 
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white border border-[#72D3DF] rounded-lg shadow-md flex items-start space-x-4">
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 md:px-16 py-16 text-center bg-[#4F959D]">
        <p className="text-[#205781] font-medium">The Solution</p>
        <h2 className="text-white text-4xl font-bold mt-2 uppercase">Let us innovate together.</h2>
        <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-2 bg-[#205781] text-white rounded-lg"> Contact Us 
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-700 text-white px-8 md:px-16 py-10">
        <div className="grid md:grid-cols-4 gap-8 border-b border-black pb-8">
          <div>
            <Image src="/logo-footer.png" alt="Logo" width={120} height={40} />
          </div>
          <div>
            <h3 className="font-semibold mb-4">Head Office</h3>
            <p>Taguig City</p>
            <p>Philippines</p>
            <p className="text-blue-400 cursor-pointer hover:text-[#205781] transition duration-300 ease-in-out">
              Branch Location / Link
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-[#205781] transition duration-300 ease-in-out">About Us</li>
              <li className="cursor-pointer hover:text-[#205781] transition duration-300 ease-in-out">Services</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Policy</h3>
            <ul className="space-y-2">
              <li className="cursor-pointer hover:text-[#205781] transition duration-300 ease-in-out">Terms of Use</li>
              <li className="cursor-pointer hover:text-[#205781] transition duration-300 ease-in-out">Privacy Policy</li>
              <li className="cursor-pointer hover:text-[#205781] transition duration-300 ease-in-out">Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 text-sm text-gray-400">
          <p>© 2025 Topologics Solutions Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-6 justify-center">
            <Facebook size={24} className="text-gray-400 cursor-pointer hover:text-[#205781] transition duration-300 ease-in-out" />
            <Instagram size={24} className="text-gray-400 cursor-pointer hover:text-[#205781] transition duration-300 ease-in-out" />
            <Twitter size={24} className="text-gray-400 cursor-pointer hover:text-[#205781] transition duration-300 ease-in-out" />
            <Youtube size={24} className="text-gray-400 cursor-pointer hover:text-[#205781] transition duration-300 ease-in-out" />
          </div>
        </div>
      </footer>
    </div>
  );
}
