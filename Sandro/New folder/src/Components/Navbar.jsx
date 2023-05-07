import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // const scrollEvent = () => {
  //   if(window.pageYOffset > 50) {
  //     document.getElementById('svimoni').style.backgroundColor = 'silver'
  //   } else{
  //     document.getElementById('svimoni').style.backgroundColor = 'white'
  //   }
  // };

  // let scrollEvent = document.getElementById('svimoni')

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document.getElementById("svimoni").style.backgroundColor =
          "rgba(225,225,225,0.9)";
        document.getElementById("svimoni").style.color = "black";
        document.getElementById("svimoni").style.height = "3rem";
        document.getElementById("aqvsenti").style.color = "black";
      } else {
        document.getElementById("svimoni").style.backgroundColor = "white";
        document.getElementById("svimoni").style.color = "#00df9a";
        document.getElementById("svimoni").style.height = "6rem";
        document.getElementById("aqvsenti").style.color = "#00df9a";
      }
    });
  });

  return (
    <div className="fixed w-[100%] ">
      <div
        id="svimoni"
        className="Zviadi transition-all duration-[400ms] rounded-b-xl flex justify-between w-[95%] mx-auto px-4 items-center h-24 text-[#00df9a] bg-white "
      >
        <h1 id="aqvsenti" className="w-full text-3xl font-bold text-[#00df9a]">
          React.
        </h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineClose size={20} cursor="pointer" />
          ) : (
            <AiOutlineMenu size={20} cursor="pointer" />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden "
              : " fixed left-[-100%] top-0 w-0 h-full ease-in-out duration-1000"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[white] opacity-60 m-4">
            React.
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">COmpany</li>
            <li className="p-4 border-b border-gray-600">Resources</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
