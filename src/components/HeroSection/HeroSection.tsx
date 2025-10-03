import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroImages } from "../../data/heroSectionData";

export default function HeroSection() {
  return (
    <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] relative bg-background overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full group/slider1"
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center bg-background">
              <img
                src={img}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-fill md:object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
