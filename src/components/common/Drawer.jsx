import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "./Button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

export default function Drawerplacement({ isOpen, setIsOpen }) {
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? `w-[40vw] h-screen` : `hidden bg-black `}>
      <Drawer anchor={"right"} open={isOpen} onClose={toggleDrawer(false)}>
        <div className="w-[100%] bg-gray-900">
          <XMarkIcon
            className="text-white w-8 mr-12 py-8 pb-12 float-right"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <div className="flex flex-col bg-gray-900 h-screen items-center justify-start gap-10 px-24 pb-24">
          <Link
            to="header"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white hover:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </Link>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white hover:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            About Us
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white hover:text-gray-200 "
            onClick={() => setIsOpen(!isOpen)}
          >
            Roadmap
          </Link>
          <Link
            to="faqs"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white hover:text-gray-200 "
            onClick={() => setIsOpen(!isOpen)}
          >
            FAQs
          </Link>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            className="text-xl font-bold text-white hover:text-gray-200 "
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact Us
          </Link>
          <Button text={"Connect Wallet"} />
        </div>
      </Drawer>
    </div>
  );
}
