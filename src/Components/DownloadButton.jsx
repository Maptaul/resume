import React from "react";
import maptaulPdf from "../../public/Maptaul.pdf";

const DownloadButton = () => {
  return (
    <div className="text-center mt-6">
      <a
        href={maptaulPdf} // Ensure the file is in the 'public' directory of your React app
        download="Maptaul.pdf" // Sets the name for the downloaded file
        className="btn btn-primary px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white transition duration-300"
        aria-label="Download CV"
      >
        Download CV
      </a>
    </div>
  );
};

export default DownloadButton;
