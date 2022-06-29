import Image from "next/image";
import Link from "next/link";
import Auth from "../../_child/auth/Auth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import BannerBody from "../../_child/bannerBody/BannerBody";

const posts = [
  {
    title: "Web design is crucial for the success of a website 1",
    discretion:
      "Web design is crucial for the success of a website—according to Adobe’s State of Create report, 46% of people “will not purchase from a brand if its website or mobile experience is poorly designed.” So, how can you learn to create outstanding web design and build your skill? The answer: web design tutorials. There’s a wealth of fantastic web design tutorials out there that will teach you anything from responsive design, layout and hierarchy to wireframing, UX and UI.Best web design tutorials Illustration by OrangeCrush As most professional web designers will tell you, web design is best learned by doing it. You’ll just need to master the",
    img: "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg",
    auth: "Prokash Pul",
    authImg:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
    publish: "12 Jun 2022",
    category: "Web Design",
    _id: 1,
  },
  {
    title: "Web design is crucial for the success of a website 2",
    discretion:
      "Web design is crucial for the success of a website—according to Adobe’s State of Create report, 46% of people “will not purchase from a brand if its website or mobile experience is poorly designed.” So, how can you learn to create outstanding web design and build your skill? The answer: web design tutorials. There’s a wealth of fantastic web design tutorials out there that will teach you anything from responsive design, layout and hierarchy to wireframing, UX and UI.Best web design tutorials Illustration by OrangeCrush As most professional web designers will tell you, web design is best learned by doing it. You’ll just need to master the",
    img: "https://cdn.pixabay.com/photo/2015/09/04/23/28/wordpress-923188_1280.jpg",
    auth: "Prokash Pul",
    authImg:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
    publish: "12 Jun 2022",
    category: "Web Design",
    _id: 2,
  },
  {
    title: "Web design is crucial for the success of a website 3",
    discretion:
      "Web design is crucial for the success of a website—according to Adobe’s State of Create report, 46% of people “will not purchase from a brand if its website or mobile experience is poorly designed.” So, how can you learn to create outstanding web design and build your skill? The answer: web design tutorials. There’s a wealth of fantastic web design tutorials out there that will teach you anything from responsive design, layout and hierarchy to wireframing, UX and UI.Best web design tutorials Illustration by OrangeCrush As most professional web designers will tell you, web design is best learned by doing it. You’ll just need to master the",
    img: "https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_1280.jpg",
    auth: "Prokash Pul",
    authImg:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
    publish: "12 Jun 2022",
    category: "Web Design",
    _id: 3,
  },
];
const Banner = () => {
  SwiperCore.use(Autoplay);
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <div className="font-bold text-4xl text-center pb-16">Taring</div>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          {posts.map((post) => {
            return (
              <SwiperSlide key={post._id}>
                {" "}
                <BannerBody post={post}></BannerBody>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
