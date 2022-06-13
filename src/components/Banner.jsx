import React from 'react'
import Banner1 from '../img/baner-1.jpg'
import Banner2 from '../img/baner-2.jpg'
import Banner3 from '../img/baner-3.jpg'
import Banner4 from '../img/baner-4.jpg'

function Banner() {
  return (
   <React.Fragment>
<div className='px-0 mx-0 lg:px- lg:mx- lg:mx-28'>
<div className='mt-5 mb-12 mx-2 grid grid-cols-2 lg:flex lg:justify-around gap-4 place-content-stretch '>
  <img src={Banner3} alt="Banner-3" className=' rounded-3xl w-full lg:w-80'/>
  <img src={Banner1} alt="Banner-1" className=' rounded-3xl w-full lg:w-80'/>
  <img src={Banner2} alt="Banner-2" className=' rounded-3xl w-full lg:w-80'/>
  <img src={Banner4} alt="Banner-4" className=' rounded-3xl w-full lg:w-80'/>
    </div>
</div>
   </React.Fragment>
  )
}

export default Banner
