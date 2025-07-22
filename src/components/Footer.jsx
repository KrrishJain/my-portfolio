import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f1f1f1]  px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-black">
      {/* Left - Name */}
      <div className="mb-2 md:mb-0 font-medium">Krish Jain</div>

      {/* Center - Copyright */}
      <div className="mb-2 md:mb-0 text-gray-600">
        © krishjain.in 2024–25
      </div>

      {/* Right - Social Icons */}
      <div className="flex gap-4">
        <a href="https://linkedin.com/in/krish-jain-437b07268/" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin className="text-lg hover:text-primary transition-all" />
        </a>
        <a href="https://www.instagram.com/jain_krish_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-lg hover:text-primary transition-all" />
        </a>
        <a href="https://github.com/KrrishJain" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-lg hover:text-primary transition-all" />
        </a>
        <a href="mailto:krishjain167@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-lg hover:text-primary transition-all" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
