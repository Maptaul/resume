import React, { useEffect, useState } from "react";

const ContactMe = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  // Show the "Go to Top" button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="bg-black w-11/12 mx-auto text-white py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://i.ibb.co/3Wd4xd3/Animation-1736000136277.gif" // Replace with your image URL
              alt="Contact Illustration"
              className="rounded-lg w-64 h-64 shadow-md"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">
              Contact Me
            </h2>
            <form className="space-y-4">
              {/* Name Input */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full text-gray-900"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full text-gray-900"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="form-control">
                <textarea
                  placeholder="Your message"
                  className="textarea textarea-bordered w-full text-gray-900"
                  rows="4"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="btn btn-primary w-full">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Go to Top Button */}
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition"
          aria-label="Go to Top"
        >
          ^
        </button>
      )}
    </>
  );
};

export default ContactMe;
