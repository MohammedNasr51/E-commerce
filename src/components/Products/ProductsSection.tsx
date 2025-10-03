import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import { FaBoltLightning } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import Product from "./Product";

export default function ProductsSection() {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-8 container">
        <h1 className="text-4xl text-foreground">
          Products
          <span className="text-primary relative inline-block text-[#FFBF00]">
            <FaBoltLightning />
            <RiDiscountPercentFill className="absolute top-0 text-lg left-0 z-10 border border-background rounded-full bg-background" />
          </span>
        </h1>
        <Link to="/products" className="text-primary underline text-xl">See All</Link>
      </div>

      <div className="relative container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="group/productsSwiper w-full h-full"
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id} className="pb-10">
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute -left-8 lg:-left-8 md:-left-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
          <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center bg-background hover:bg-foreground hover:text-background transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </div>

        <div className="swiper-button-next-custom absolute -right-8 lg:-right-8 md:-right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
          <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center bg-background hover:bg-foreground hover:text-background transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
