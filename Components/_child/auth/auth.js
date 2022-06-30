import React from "react";
import Image from "next/image";
const Auth = () => {
  return (
    <div className="flex items-start justify-start gap-4 my-5">
      <div className="image">
        <Image
          className="rounded-full border-2 border-sky-500"
          src={
            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
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
