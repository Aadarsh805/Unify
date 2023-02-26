"use client";

import ProductCard from "@/components/explore/ProductCard";
import { useEffect } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";

type Props = {
  products: any;
};

function ProductCards({ products }: Props) {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
          centeredSlides: true,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 3,
        },
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="testimonial-cards ">
      <div className="mx-auto  px-4 py-24 ">
        <div className="grid grid-cols-1 gap-y-8 ">
          <div className="-mx-6 p-4 ">
            <div className="swiper-container !overflow-hidden">
              <div className="swiper-wrapper">
                {Array.isArray(products) &&
                  products.map((product: any) => (
                    <div className="swiper-slide" key={product.id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
              </div>
            </div>
            <div className="hidden transition-all lg:mt-8 lg:flex  lg:gap-4">
              <button className="prev-button rounded-full border-2 bg-[#AF7A0F] p-3 text-white hover:bg-black hover:text-white">
                <span className="sr-only">Previous Slide</span>
                <svg
                  className="h-7 w-7 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <button className="next-button rounded-full border-2 bg-[#AF7A0F] p-3 text-white hover:bg-black hover:text-white">
                <span className="sr-only">Next Slide</span>
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCards;
