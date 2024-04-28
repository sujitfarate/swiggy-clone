import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import { MdOutlineHelpOutline } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const showSideMenu = () => {
    setToggle(true);
  };
  const hideSideMenu = () => {
    setToggle(false);
  };

  const links=[
    {icon: <IoIosSearch />,
  name:"Search"
  }, {icon: <CiDiscount1 />,
  name:"Offers",
  sup:"New"
  }, {icon: <MdOutlineHelpOutline />,
  name:"Help"
  }, {icon: <CiUser />,
  name:"Sign In"
  },
  
  {icon: <BsCartDash />,
  name:"Cart",
  sup:"(2)"
  }
  ]

  return (
    <>
      <div
        onClick={hideSideMenu}
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[500px] h-full bg-white absolute duration-700"
          style={{ left: toggle ? "0%" : "-100%" }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto border border-red-500 flex items-center">
          <div className="w-[100px]">
            <img src="/images/Swiggy-Emblem.png" className="w-full" alt="" />
          </div>
          <div className="">
            {" "}
            <span className="font-bold border-b-[3px] text-black border-black">
              Ratanda
            </span>{" "}
            jodhpur,Rajsthan, India{" "}
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={20}
              className="font-bold inline  text-[#fc8019] cursor-pointer"
            />
          </div>

          <nav className="flex list-none gap-10 ml-auto font-semibold text-[18px]">
            {links.map((value,index)=>{
              return   <li key={index} className="flex cursor-pointer hover:text-[#fc8019] items-center gap-2">
                {value.icon} {value.name}<sup>{value.sup}</sup>
              </li>
            })}
            {/* <li className="flex items-center gap-2">
              <IoIosSearch /> Search
            </li>
            <li className="flex items-center gap-2">
              <CiDiscount1 /> Offers
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <MdOutlineHelpOutline />
              Help
            </li>
            <li className="flex items-center gap-2">
              {" "}
              <CiUser />
              Sign In
            </li>{" "}
            <li className="flex items-center gap-2">
              {" "}
              <BsCartDash />
              Cart
            </li> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
