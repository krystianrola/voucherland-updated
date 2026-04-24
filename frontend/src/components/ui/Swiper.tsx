import { Swiper as SwiperPrimary, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, EffectFade } from "swiper/modules";
import { FC, JSX } from "react";

interface SwiperProps {
  children: JSX.Element[];
}

const Swiper: FC<SwiperProps> = ({ children }) => {
  return (
    <SwiperPrimary
      slidesPerView="auto"
      spaceBetween={30}
      speed={800}
      navigation={true}
      breakpoints={{
        320: {
          centeredSlides: true,
        },
        1000: {
          centeredSlides: false,
        },
      }}
      className="p-1"
      modules={[Navigation, Scrollbar, EffectFade]}
      effect="slide"
    >
      {children.map((child, idx) => {
        return (
          <SwiperSlide key={idx} className="!w-auto">
            {child}
          </SwiperSlide>
        );
      })}
    </SwiperPrimary>
  );
};

export { Swiper };
