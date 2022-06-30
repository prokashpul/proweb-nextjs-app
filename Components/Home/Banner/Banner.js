import Image from "next/image";
import Link from "next/link";
import Auth from "../../_child/auth/Auth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import BannerBody from "../../_child/bannerBody/BannerBody";
import { useEffect, useState } from "react";

const posts = [
  {
    title: "Web design is crucial for the success of a website 1",
    discretion:
      "Web design is crucial for the success of a website—according to Adobe’s State of Create report, 46% of people “will not purchase from a brand if its website or mobile experience is poorly designed.” So, how can you learn to create outstanding web design and build your skill? The answer: web design tutorials. There’s a wealth of fantastic web design tutorials out there that will teach you anything from responsive design, layout and hierarchy to wireframing, UX and UI.Best web design tutorials Illustration by OrangeCrush As most professional web designers will tell you, web design is best learned by doing it. You’ll just need to master the",
    img: "https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    auth: "Prokash Pul",
    authImg:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    publish: "12 Jun 2022",
    category: "Web Design",
    _id: 1,
  },
  {
    title: "Web design is crucial for the success of a website 2",
    discretion:
      "Web design is crucial for the success of a website—according to Adobe’s State of Create report, 46% of people “will not purchase from a brand if its website or mobile experience is poorly designed.” So, how can you learn to create outstanding web design and build your skill? The answer: web design tutorials. There’s a wealth of fantastic web design tutorials out there that will teach you anything from responsive design, layout and hierarchy to wireframing, UX and UI.Best web design tutorials Illustration by OrangeCrush As most professional web designers will tell you, web design is best learned by doing it. You’ll just need to master the",
    img: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    auth: "Prokash Pul",
    authImg:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    publish: "12 Jun 2022",
    category: "Web Design",
    _id: 2,
  },
  {
    title: "Web design is crucial for the success of a website 3",
    discretion:
      "Web design is crucial for the success of a website—according to Adobe’s State of Create report, 46% of people “will not purchase from a brand if its website or mobile experience is poorly designed.” So, how can you learn to create outstanding web design and build your skill? The answer: web design tutorials. There’s a wealth of fantastic web design tutorials out there that will teach you anything from responsive design, layout and hierarchy to wireframing, UX and UI.Best web design tutorials Illustration by OrangeCrush As most professional web designers will tell you, web design is best learned by doing it. You’ll just need to master the",
    img: "https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80",
    auth: "Prokash Pul",
    authImg:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    publish: "12 Jun 2022",
    category: "Web Design",
    _id: 3,
  },
];
const Banner = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("posts.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  SwiperCore.use(Autoplay);
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        {/* <div className="font-bold text-4xl text-center pb-16">Taring</div> */}
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          {/* map function use */}
          {posts?.slice(0, 3).map((post) => {
            return (
              <SwiperSlide key={post._id}>
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
