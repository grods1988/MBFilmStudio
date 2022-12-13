import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaGooglePlus,
  FaInstagram,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };

  //   useEffect(() => {
  //     setShowNav(false);
  //   }, []);

  return (
    <div>
      <div className="bg-gray-800 opacity-50 w-full ">
        <img
          src="https://images.unsplash.com/photo-1610817683839-aa86bb67a05f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80"
          alt="nav image"
          className="w-full h-screen object-cover object-center  opacity-20"
        />
      </div>
      <div className="container">
        <nav className="hidden md:flex  w-full min-h-[50px] fixed container top-0 z-10 overflow-hidden justify-between items-center px-8 bg-zinc-900/50 rounded-md">
          <h1>
            <a href="" className="text-white">
              LOGO
            </a>
          </h1>
          <ul className="flex gap-10 font-bold px-3">
            <li className="md:px-5">
              <a href="" className="hover:text-[var(--primary)]">
                Home
              </a>
            </li>
            <li className="md:px-5">
              <a href="#about" className="hover:text-[var(--primary)]">
                About
              </a>
            </li>
            <li className="md:px-5">
              <a href="#services" className="hover:text-[var(--primary)]">
                Services
              </a>
            </li>
            <li className="md:px-5">
              <a href="#contact" className="hover:text-[var(--primary)]">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex gap-3 items-center">
            <FaFacebookF className="text-white hover:text-[var(--primary)] duration-300 ease-in-out text-xl cursor-pointer" />
            <FaTwitter className="text-white hover:text-[var(--primary)] duration-300 ease-in-out text-xl cursor-pointer" />
            <FaInstagram className="text-white hover:text-[var(--primary)] duration-300 ease-in-out text-xl cursor-pointer" />
            <FaGooglePlus className="text-white hover:text-[var(--primary)] duration-300 ease-in-out text-xl cursor-pointer" />
            <button className="hidden lg:block">
              <a href="">Lets get in touch</a>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}

      <div className="md:hidden cursor-pointer">
        {showNav ? (
          <FaTimes
            onClick={handleClick}
            size={30}
            className="text-[var(--primary)] absolute z-20 top-5 right-5  ease-in duration-300"
          />
        ) : (
          <FaBars
            onClick={handleClick}
            size={30}
            className="text-[var(--primary)] absolute z-20 top-5 right-5 ease-in duration-300"
          />
        )}
      </div>

      <div
        className={
          showNav
            ? "md:hidden absolute bg-gray-900/80 z-10 flex flex-col w-full h-[90vh] ease-in-out duration-500 top-0 overflow-y-hidden pt-12 "
            : "h-[90vh] fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <ul className="h-full w-full text-center items-center  font-bold px-3 ">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#about">About</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#services">Services</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
