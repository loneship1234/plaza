import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, FreeMode,Mousewheel, Keyboard, Autoplay } from 'swiper';
// css
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
// 
function Slider() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,FreeMode,Mousewheel, Keyboard,Autoplay]}
    style={{
      "--swiper-navigation-color":"#fff",
      "--swiper-pagination-color":"#f1f1f1",
      "marginLeft":"8px",
      "marginRight":"8px",
      "marginBottom":"8px"
            
      }}
    autoplay={{
      delay:4000,
      disableOnInteraction:false
    }}
    className={"swiper-fixed-width-300 "}
    spaceBetween={5}
    cssMode={false}
    mousewheel={false}
    
    keyboard={true}
    slidesPerView={1}
    pagination={ {dynamicBullets: true, clickable:true}}
    navigation={true}
    loop
  >
    <SwiperSlide><div className='h-44 lg:h-96 bg-blue-600'></div></SwiperSlide>
    <SwiperSlide><div className='h-44 lg:h-96 bg-red-600'></div></SwiperSlide>
    <SwiperSlide><div className='h-44 lg:h-96 bg-stone-600'></div></SwiperSlide>
    <SwiperSlide><div className='h-44 lg:h-96 bg-green-600'></div></SwiperSlide>
    <SwiperSlide><div className='h-44 lg:h-96 bg-orange-600'></div></SwiperSlide>
    <SwiperSlide><div className='h-44 lg:h-96 bg-lime-600'></div></SwiperSlide>

  </Swiper>
  )
}

export default Slider