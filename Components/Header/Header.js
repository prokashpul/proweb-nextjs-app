import React from "react";
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialTwitter,
} from "react-icons/ti";
const Header = () => {
  return (
    <header className="xl:container mx-auto flex flex-col sm:flex-row justify-between items-center md:px-6 py-3 bg-gray-50 shadow-sm rounded-b-xl">
      <div className="order-2 sm:order-1 md:flex-none flex justify-center md:justify-start w-96">
        <input
          className="input-box"
          type="text"
          name=""
          id=""
          placeholder="Search.."
        />
      </div>
      <div className="text-3xl font-bold  w-80 shrink flex justify-center sm:order-2 uppercase">
        ProWeb
      </div>
      <div className="flex justify-center  md:justify-end  gap-6 w-96 order-3">
        <a
          href="#"
          className=" text-3xl font-bold cursor-pointer hover:text-sky-500 duration-500"
        >
          <TiSocialFacebook />
        </a>
        <a
          href="#"
          className=" text-3xl font-bold cursor-pointer hover:text-sky-500 duration-500"
        >
          <TiSocialYoutube />
        </a>
        <a
          href="#"
          className=" text-3xl font-bold cursor-pointer hover:text-sky-500 duration-500"
        >
          <TiSocialTwitter />
        </a>
      </div>
    </header>
  );
};

export default Header;
