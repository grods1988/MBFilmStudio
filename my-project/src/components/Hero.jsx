import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className=" flex flex-col top-[20%] sm:top-[40%] absolute px-8  gap-y-3 md:gap-y-6 container">
        <h1 className="md:text-8xl">
          <span className="bg-[var(--primary)] text-gray-800 px-2 italic rounded-md ">
            Mircea
          </span>{" "}
          <span className="md:text-7xl">Banu</span>
        </h1>
        <p className=" mt-6 leading-7 md:text-xl md:w-1/2 font text-center sm:text-left">
          <span className="text-[var(--primary)] text-2xl">"</span> As a leading
          film production studio, we specialize in creating engaging content
          that tells captivating stories. we craft engaging stories and produce
          high-quality films. Our team has the skills and expertise to help
          businesses and individuals bring their vision to life on screen.{" "}
          <span className="text-[var(--primary)] text-2xl">"</span>
        </p>
        <button className="sm:w-1/2 mt-6">
          <a href="#contact" className="text-2xl">
            Get in touch
          </a>
        </button>
      </div>
    </div>
  );
}
export default Hero;
