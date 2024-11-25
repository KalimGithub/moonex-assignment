import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import Button from "./Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Drawerplacement from "./Drawer";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <img src={logo} />
        {/* center part of header */}
        <div className="hidden lg:flex  items-center justify-between w-[50%]">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white hover:text-gray-200 active   "
          >
            Home
          </Link>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white hover:text-gray-200 "
          >
            About Us
          </Link>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white hover:text-gray-200 "
          >
            Roadmap
          </Link>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white hover:text-gray-200 "
          >
            FAQs
          </Link>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white hover:text-gray-200 "
          >
            Contact Us
          </Link>
        </div>
        {/* humburger menu */}
        {isOpen ? (
          <>
            <XMarkIcon
              className="text-white w-8 block lg:hidden"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          </>
        ) : (
          <Bars3Icon
            className="text-white w-8 block lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
        <div className="hidden lg:block">
          <Button text={"Connect Wallet"} />
          {/* <Button text={"Trade Crypto"} outlined={true} /> */}
        </div>
      </div>
      <Drawerplacement isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
