import Link from "next/link";
import React, { useEffect, useState } from "react";
import LatestPostInfo from "../../_child/LatestPostInfo/LatestPostInfo";

const LatestPost = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("api/myData")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <div className="font-bold text-4xl text-center pb-16">Latest Post</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-5 m-2 md:m-0">
          {posts?.map((post) => {
            return (
              <LatestPostInfo key={post?._id} post={post}></LatestPostInfo>
            );
          })}
        </div>
        <div className="flex justify-center mt-10 ">
          <Link href={"/"}>
            <a className=" btn">See All Post</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
