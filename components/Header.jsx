import Image from "next/image";
import { BsInstagram, BsPlusCircle, BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlinePaperAirplane, HiOutlineUserGroup } from "react-icons/hi";
const Header = () => {
  return (
    <div className="border-b sticky top-0 drop-shadow bg-white z-50">
      <div className="customContainer">
        <div className="flex px-4 w-full justify-between items-center">
          <BsInstagram className="cursor-pointer" size={24} />
          <div>
            <div className="relative p-3 rounded-md mt-1">
              <div className="absolute inset-y-0 p-3 flex items-center pointer-events-none">
                <BsSearch />
              </div>
              <input
                type="text"
                placeholder="Search"
                className=" bg-gray-100  block  pl-10 rounded-md border-gray-300 focus:ring-black focus:border-black"
              />
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <AiOutlineHome className="navBtn" />
            <div className="relative navBtn">
              <HiOutlinePaperAirplane className="navBtn rotate-45 " />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white font-semibold animate-pulse rounded-full h-5 w-5 flex items-center justify-center text-xs">
                3
              </div>
            </div>
            <BsPlusCircle className="navBtn" />
            <HiOutlineUserGroup className="navBtn" />
            <AiOutlineHeart className="navBtn" />
            <GiHamburgerMenu size={24} className="md:hidden cursor-pointer" />
            <img
              src="https://links.papareact.com/3ke"
              alt="Profile Picture"
              className="h-10 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
