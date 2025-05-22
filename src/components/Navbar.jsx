import logo from '../assets/logo2.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-0 w-20 text-white-500" src={logo} alt="logo" />
        <div className="mx-0 w-10"></div>
        <span className="text-4xl font-bold">AB</span>{' '}
        {/* Increased size here */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/abhirampedada/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Abhiram-108"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ab_introvert_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black-500"
        >
          <FaSquareXTwitter />{' '}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
