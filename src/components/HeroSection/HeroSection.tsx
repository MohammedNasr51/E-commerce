import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { heroImages } from "../../data/heroSectionData";

export default function HeroSection() {
  return (
    <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[90vh] relative bg-background">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-fill md:object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
       <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #ffffff; 
          width: 30px;
          height: 30px;
        }

        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            width: 20px;
            height: 20px;
          }
        }

        .swiper-pagination-bullet {
          background: #ffffff; 
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: #ff7f50; 
        }
      `}</style>
    </div>
  );
}
