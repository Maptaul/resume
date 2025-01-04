import React from "react";

const AboutMe = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center  bg-black  text-white">
      {/* Profile Image */}
      <div className="relative w-6/12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-orange-500 overflow-hidden">
          <img
            src="https://i.ibb.co.com/w7gTtrM/myphoto.png"
            alt="MehfuJ Ali"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="text-center w-9/12 md:text-left md:ml-8 mt-6 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-orange-500">Maptaul Islam Taraq</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
          A passionate frontend developer with a love for creating visually
          appealing and user-friendly web experiences. With a strong foundation
          in{" "}
          <span className="text-orange-400">HTML, CSS, JavaScript, React</span>,
          <span className="text-orange-400">Node.js, Express.js, MongoDB</span>,
          and
          <span className="text-orange-400">GitHub</span>, I specialize in
          building responsive websites that not only look great but also provide
          a seamless user experience.
        </p>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
          Over the years, I've honed my skills by working on a variety of
          projects, from simple landing pages to complex web applications. My
          goal is to turn creative ideas into functional, engaging digital
          products.
        </p>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          When I'm not coding, I enjoy staying up-to-date with the latest web
          development trends and continuously learning new technologies to keep
          my skills sharp. Let's connect and create something amazing together!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
