// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../slider/slider.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/8352271920uz.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/1829711920uz.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/1483331920uz.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/2423251920uz.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/6745081920uz.webp" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
