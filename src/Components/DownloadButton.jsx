import React from "react";

const DownloadButton = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <a
        href="/path-to-your-file/yourfile.pdf" // Replace with your file path or URL
        download="YourFileName.pdf" // This sets the downloaded file's name
        className="btn btn-primary text-white"
      >
        Download File
      </a>
    </div>
  );
};

export default DownloadButton;
