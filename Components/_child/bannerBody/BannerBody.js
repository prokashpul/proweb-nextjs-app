import React from "react";
import Link from "next/link";
import Image from "next/image";
import Auth from "../auth/Auth";
const BannerBody = ({ post }) => {
  const { title, discretion, img, auth, authImg, publish, category, _id } =
    post || {};
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-10 m-2 md:m-0 ">
        <div className="image">
          <Link href={`post/${_id}`}>
            <a>
              <Image src={img} width={600} height={550} alt="" />
            </a>
          </Link>
        </div>
        <div className="flex flex-col justify-center p-5">
          <div className="category ">
            <Link href={"/"}>
              <a className="text-sky-500">{category}</a>
            </Link>
            <Link href={"/"}>
              <a className="ml-2">{publish}</a>
            </Link>
          </div>
          <div className="title text-3xl font-semibold mt-5 hover:text-sky-500">
            <Link href={`post/${_id}`}>
              <a>{title}</a>
            </Link>
          </div>
          <p className="text-slate-500 font-light mt-5">
            {discretion?.slice(0, 350)}
          </p>
          <div>
            <div className="flex items-start justify-start gap-4 my-5">
              <div className="image">
                <Image
                  className="rounded-full border-2 border-sky-500"
                  src={authImg}
                  width={60}
                  height={60}
                  alt="auth"
                />
              </div>
              <div className=" flex flex-col justify-start items-start">
                <h4 className="text-xl font-semibold text-sky-500"> {auth}</h4>
                <div>CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerBody;
