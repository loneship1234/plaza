import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import Product from './Product'
import { Navigation, Pagination, Scrollbar, A11y, FreeMode,Mousewheel, Keyboard, Autoplay, } from 'swiper';
// img
import Product1 from '../img/product-1.png';
// css
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
// 
function ProductSlider(props) {
  return (
       <div className={props.bg+' mx-2 lg:mx-16'}>
           <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,FreeMode,Mousewheel, Keyboard,Autoplay]}
    style={{
    "--swiper-navigation-color":"#000000",
    "--swiper-pagination-color":"#f1f1f1",
    // "marginRight":"35px",
    // "marginLeft":"35px",
    "marginBottom":"8px"

    }}
      breakpoints={{
        // when window width is >= 640px
        640: {
            spaceBetween:4,
          slidesPerView: 6,
        
        },
      }}
    autoplay={{
      delay:7000,
      disableOnInteraction:false
    }}
    className={"swiper-fixed-width-300"}
    spaceBetween={1}
    
    // mousewheel={true}
  
    // keyboard={{enabled:true}}
    slidesPerView={1}
    pagination={ {dynamicBullets: true, clickable:true}}
    draggable={true}
    navigation={true}
    loop={false}
  >
    
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    <SwiperSlide><Product ImgSrc={Product1} Model="لپ تاپ ۱۵ اینچی ایسوس مدل ASUSVivoBook K513EQ F" Price={'25,599,000'} ShowedPrice={false} Detail={true} Cpu={'Core i7 7700kh'} Display={'14 inch full hd'} Gpu={'2060 6gb'} Storage={'500 GB SSD'}Ram={'12 Gb DDR5'}  ButtonText={'انتخاب کنید'} /> </SwiperSlide>
    
    
   

  </Swiper>
    
       </div>
  )
}

export default ProductSlider
  