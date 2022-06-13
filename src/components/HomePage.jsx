import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Banner from './Banner';
import DesktopMenu from './DesktopMenu'
import ThumbNail from './ThumbNail'
import BannerTwo from './BannerTwo'
import ProductSlider from './ProductSlider'
import Footer from './Footer'

function HomePage() {
  return (
   <React.Fragment>
    <Header/>
    <DesktopMenu/>
    <Slider/>
    <Banner/>
    <ThumbNail buttonAvailable={true} text='کالاهای متمایز پلازا دیجیتال' ButtonText='نمایش همه'/>
    <ProductSlider/>
    <BannerTwo/>
    <ThumbNail buttonAvailable={true} text='گیمینگ پلازا دیجیتال' ButtonText='نمایش همه'/>
    <ProductSlider bg='bg-white'/>
    <ThumbNail buttonAvailable={true} text='جدیدترین ها' ButtonText='نمایش همه'/>
    <ProductSlider bg='bg-gray-50'/>
    <ThumbNail buttonAvailable={true} text='پرفروش ترین ها' ButtonText='نمایش همه'/>
    <ProductSlider  bg='bg-white'/>
    <ThumbNail buttonAvailable={false} text='پرفروش ترین ها' ButtonText='نمایش همه'/>
    {/*  */}
    <ProductSlider bg='bg-gray-50'/>
  <Footer/>
  
    </React.Fragment>
  )
}

export default HomePage