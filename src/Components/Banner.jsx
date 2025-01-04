import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import DownloadButton from "./DownloadButton";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-10 md:p-20">
      {/* Left Side Content */}
      <div className="max-w-lg text-center md:text-left">
        <p className="text-lg">Hi I am</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-orange-500">Maptaul Islam Taraq</span>
        </h1>
        <h2 className="text-3xl md:text-3xl font-bold mt-2">
          Junior Frontend Developer
        </h2>
        <p className="text-gray-300 text-justify mt-4">
          with a passion for crafting intuitive and visually appealing
          websites.From responsive design to smooth user interactions, I focus
          on every detail.Let's collaborate to bring your vision to life.Explore
          my portfolio and see how I can help you achieve your goals.
        </p>
        <button>
          <DownloadButton />
        </button>
      </div>

      {/* Right Side Image */}
      <div className="mt-10 md:mt-0">
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-orange-500">
          <img
            src="https://i.ibb.co.com/w7gTtrM/myphoto.png"
            alt="Fawzi Sayed"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/Maptaul"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white text-xl rounded-full p-2 border-2 border-orange-500"
          >
            <i class="fab fa-github text-2xl">
              <FaGithub />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/maptaul-islam-taraq/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white text-xl rounded-full p-2 border-2 border-orange-500"
          >
            <i class="fab fa-github text-2xl">
              <FaLinkedin />
            </i>
          </a>
          <a
            href="https://www.facebook.com/Maptaul/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-white text-xl rounded-full p-2 border-2 border-orange-500"
          >
            <i class="fab fa-github text-2xl">
              <FaFacebookSquare />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
