import React from "react";
import Image from "next/image";
const Auth = () => {
  return (
    <div className="flex items-start justify-start gap-4 my-5">
      <div className="image">
        <Image
          className="rounded-full border-2 border-sky-500"
          src={
            "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg"
          }
          width={60}
          height={60}
          alt="auth"
        />
      </div>
      <div className=" flex flex-col justify-start items-start">
        <h4 className="text-xl font-semibold text-sky-500"> Prokash</h4>
        <div>CEO</div>
      </div>
    </div>
  );
};

export default Auth;
