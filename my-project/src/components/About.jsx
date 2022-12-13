import React from "react";

function About() {
  return (
    <div id="about" className="container px-8 ">
      <div className="text-center my-6 bg-zinc-900 rounded-md py-3">
        <h1 className="sm:text-base text-xl">Our Philosophy</h1>
      </div>
      <div className="bg-zinc-800 p-3 rounded-md">
        <div className="grid md:grid-cols-2 justify-center items-center text-lg gap-2  ">
          <p className="sm:leading-10 text-center sm:text-left text-sm sm:text-base">
            <span className="text-[var(--primary)] text-xl">"</span> At MB Film,
            we believe that a quality film is a valuable investment that can
            help businesses grow and succeed. That's why we focus on creating
            unique visual strategies that help our clients stand out in the
            market and connect with their audience. <br /> Our team, led by
            founder
            <span className="text-[var(--primary)] text-gray-800 font-semibold italic underline underline-offset-3">
              {" "}
              Mircea Banu
            </span>
            , is passionate about film and marketing, and we are dedicated to
            providing our clients with the support and expertise they need to
            achieve their goals.
            <span className="text-[var(--primary)] text-xl">"</span>
          </p>
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
            alt="aboutus"
            className="w-full h-[400px] object-cover object-center rounded-md shadow-md p-2"
          />
        </div>
      </div>
      <div className="bg-zinc-900 p-2 rounded-md mt-2">
        <div className="grid md:grid-cols-2 justify-center items-center text-lg gap-2  ">
          <img
            src="https://images.unsplash.com/photo-1575561684178-82bcbf845de5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt=""
            className="w-full h-[400px] object-cover object-center rounded-md shadow-md p-2"
          />
          <p className="sm:leading-10 sm:text-left text-center text-sm sm:text-base">
            <span className="text-[var(--primary)] text-xl">"</span>In addition
            to our film production services, we also offer a separate
            development segment for original entertainment products. Whether
            you're looking to create a promotional video, a training film, or an
            entertainment product, we are here to help you connect with your
            audience in a professional, authentic, and engaging way.
            <span className="text-[var(--primary)] text-xl">"</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
