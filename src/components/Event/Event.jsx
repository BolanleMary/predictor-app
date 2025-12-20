import rainData from "../../data/rain.js";
import EventCard from "./EventCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Event() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4}
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
