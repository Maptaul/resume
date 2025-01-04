import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const ContactMe = () => {
  const form = useRef();
  const [showGoToTop, setShowGoToTop] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b61stv6",
        "template_2wb0lnq",
        form.current,
        "xtAtvikhDkEgQbGPv"
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out. I will get back to you soon.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#FFA500",
          });
          e.target.reset(); // Clear the form
        },
        (error) => {
          Swal.fire({
            title: "Oops!",
            text: `Something went wrong: ${error.text}`,
            icon: "error",
            confirmButtonText: "Try Again",
            confirmButtonColor: "#FF5733",
          });
        }
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="bg-gradient-to-b from-gray-900 to-black w-11/12 mx-auto text-white py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co/3Wd4xd3/Animation-1736000136277.gif" // Replace with your image URL
              alt="Contact Illustration"
              className="rounded-lg w-80 h-80 shadow-xl border-2 border-orange-500"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
              Contact Me
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full text-black"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full text-black"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-300">Message</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message"
                  className="textarea textarea-bordered w-full text-black"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn btn-primary w-full bg-orange-500 hover:bg-orange-600 text-white font-bold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Go to Top Button */}
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-4 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
          aria-label="Go to Top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ContactMe;
