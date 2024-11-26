import React from "react";
import { Link } from "react-scroll";
import footerLogo from "../../../assets/footer-logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";

const Footer = () => {
  return (
    <div className="contact-us bg-[#081c33] mt-12 flex justify-between items-center px-12 py-24 md:px-32">
      <div>
        <img src={footerLogo} />
      </div>
      <div className="footer-center hidden lg:flex  items-center justify-between w-[50%]">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer font-bold text-white hover:text-gray-300"
        >
          Home
        </Link>
        <Link
          to="about-us"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer font-bold text-white hover:text-gray-300 "
        >
          About Us
        </Link>
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer font-bold text-white hover:text-gray-300 "
        >
          Roadmap
        </Link>
        <Link
          to="faqs"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer font-bold text-white hover:text-gray-300 "
        >
          FAQs
        </Link>
        <Link
          to="contact-us"
          smooth={true}
          duration={500}
          className="text-xl cursor-pointer font-bold text-white hover:text-gray-300 "
        >
          Contact Us
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-white">
          Contact <span className="golden-text">Us</span>
        </h1>
        <div className="flex gap-8 items-center justify-between text-xl text-white mt-6">
          <a href="https://github.com/">
            <GitHubIcon />
          </a>
          <a href="https://twitter.com/">
            <TwitterIcon />
          </a>
          <a href="https://www.reddit.com">
            <RedditIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
