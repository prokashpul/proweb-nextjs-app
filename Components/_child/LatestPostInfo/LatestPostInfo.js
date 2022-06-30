import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestPostInfo = ({ post }) => {
  const {
    img,
    title,
    publish,
    category,
    discretion,
    authImg,
    auth,
    regelation,
  } = post || {};
  return (
    <div className="shadow-2xl rounded-lg overflow-hidden group">
      <div className="image group-hover:scale-105 duration-500">
        <Link href={"/"}>
          <a>
            <Image src={img} width={600} height={450} alt="" />
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
        <div className="title text-2xl font-semibold mt-2 group-hover:text-sky-500">
          <Link href={"/"}>
            <a>{title.length > 30 ? title.slice(0, 30) + "...." : title}</a>
          </Link>
        </div>
        <p className="text-slate-500 font-light mt-3">
          {discretion.length > 20
            ? discretion?.slice(0, 150) + "...."
            : discretion}
        </p>
        <Link href={"/"}>
          <a className="flex items-start justify-start gap-4 mt-3 ">
            <div className="image">
              <Image
                className="rounded-full border-2 border-sky-500"
                src={authImg}
                width={50}
                height={50}
                alt="auth"
              />
            </div>
            <div className=" flex flex-col justify-start items-start">
              <h4 className="text-xl font-semibold text-sky-500"> {auth}</h4>
              <div>{regelation}</div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LatestPostInfo;
