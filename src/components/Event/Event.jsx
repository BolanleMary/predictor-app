import rainData from "../../data/rain.js";
import EventCard from "./EventCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Event() {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      spaceBetween={20}
      slidesPerView={3}
      initialSlide={3}
      resistance={true}
      resistanceRatio={0.85}
    >
      {rainData.map((item, index) => (
        <SwiperSlide key={index}>
          <EventCard date={item.date} rain={item.rain} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default Event;
