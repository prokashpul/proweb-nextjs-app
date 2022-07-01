import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import MostPopularInfo from "../../_child/MostPopularInfo/MostPopularInfo";

const MostPopular = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch("posts.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <div className="font-bold text-4xl text-center pb-16">Popular Post</div>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: false,
          }}
          modules={[Navigation]}
          navigation={true}
          className=""
        >
          {/* map function use */}
          {posts?.slice(0, 3).map((post) => {
            return (
              <SwiperSlide key={post._id}>
                <MostPopularInfo post={post}></MostPopularInfo>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default MostPopular;
