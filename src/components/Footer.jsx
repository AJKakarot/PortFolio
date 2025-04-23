import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
             <a href= "https://www.instagram.com/a_jee_t4?igsh=bGZvNmRzOWs3d2R5&utm_source=qr"> <FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com/in/ajeet-gupta-99aa6b281/">  <FaLinkedinIn size={24} /> </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2025 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Ajeet</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
