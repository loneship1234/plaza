import React from 'react'
import Banner5 from '../img/Banner-5.jpg'
import Banner6 from '../img/Banner-6.jpg'


function BannerTwo() {
  return (
    <div className='lg:flex lg:justify-around mx-2 lg:mx-14 lg:my-10 mt-10'>
        <img src={Banner5} alt="Banner-5" className=' px-2 lg:ml-2 w-full mb-10 lg:mb-0' />
        <img src={Banner6} alt="Banner-6" className=' px-2 lg:ml-2 w-full mb-10 lg:mb-0 ' />
    </div>
  )
}

export default BannerTwo