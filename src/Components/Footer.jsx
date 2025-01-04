import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black w-11/12 mx-auto text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Information</h3>
          <p>
            Email:{" "}
            <a href="mailto:mehefujalim@gmail.com" className="underline">
              mdmaptaul@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+8801846035436" className="underline">
              +880 1846 035436
            </a>
          </p>
          <p>Location: Sitakunda, Chattogram, Bangladesh</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">For More</h3>
          <div className="flex space-x-4">
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

      {/* Copyright Section */}
      <div className="mt-8 text-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Maptaul
          Islam Taraq
        </p>
      </div>
    </footer>
  );
};

export default Footer;
