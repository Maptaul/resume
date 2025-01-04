import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-black text-white p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Maptaul
          Islam Taraq
        </p>
      </aside>
    </footer>
  );
};

export default Footer;