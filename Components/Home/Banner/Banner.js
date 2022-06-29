import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <div className="font-bold text-3xl text-center pb-10">Taring</div>
        <div className="grid md:grid-cols-2 md:gap-10 m-2 md:m-0">
          <div className="image">
            <Link href={"/"}>
              <a>
                <Image
                  src={
                    "https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_1280.jpg"
                  }
                  width={600}
                  height={550}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="flex flex-col justify-center">
            <div className="category ">
              <Link href={"/"}>
                <a className="text-sky-500">Web Design</a>
              </Link>
              <Link href={"/"}>
                <a className="ml-2">15 Jun 2022</a>
              </Link>
            </div>
            <div className="title text-2xl font-semibold mt-5 hover:text-sky-500">
              <Link href={"/"}>
                <a>Web design is crucial for the success of a website</a>
              </Link>
            </div>
            <p className="text-slate-500 font-light mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              ullam dolorum soluta ex? Neque, numquam, iste provident voluptates
              sunt obcaecati maxime eveniet, odit soluta laudantium ea sequi
              fugiat voluptate voluptatum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quam ullam dolorum soluta ex? Neque,
              numquam, iste provident voluptates sunt obcaecati maxime eveniet,
              odit soluta laudantium ea sequi fugiat voluptate voluptatum.
            </p>
            <div className="text-sky-500 my-5">auth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
