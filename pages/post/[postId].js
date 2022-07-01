import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";

const PostId = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const blogId = router.query.postId;
  useEffect(() => {
    setLoading(true);
    fetch("/api/myData")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  const post = data.find((i) => +blogId === i._id);
  const { title, discretion, img, auth, authImg, publish, category, _id } =
    post || {};
  return (
    <>
      <Head>
        <title>{title} | Proweb Blogs</title>
      </Head>
      <Layout>
        <div className="max-w-[920px] mx-auto md:py-20">
          <div className="my-10 md:mt-0 mx-2 md:mx-0">
            <Link href={`/`}>
              <a className="btn ">Back To Home</a>
            </Link>
          </div>
          <div className=" grid grid-cols-1 justify-center md:gap-5 m-2 md:m-0 ">
            <div className="image w-full">
              <Link href={`post/${_id}`}>
                <a>
                  <Image src={img} width={920} height={550} alt="" />
                </a>
              </Link>
            </div>
            <div className="title text-5xl font-semibold mt-5 hover:text-sky-500">
              <Link href={`post/${_id}`}>
                <a>{title}</a>
              </Link>
            </div>
            <div className="flex items-start gap-10">
              <div className="flex items-start justify-start gap-4">
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
                  <h4 className="text-xl font-semibold text-sky-500">{auth}</h4>
                  <div>CEO</div>
                </div>
              </div>
              <div className="category ">
                <Link href={"/"}>
                  <a className="text-sky-500">{category}</a>
                </Link>
                <Link href={"/"}>
                  <a className="ml-2">{publish}</a>
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center text-xl">
              <p className="text-slate-500 font-light mt-5">{discretion}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PostId;
