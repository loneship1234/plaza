import React from 'react'
import logo1 from '../img/logo-etehadiye.png';
import logo2 from '../img/logo.png';
import logo3 from '../img/enamaad.png';
import logo from '../img/plazadigital-logo.png'

function Footer() {
  return (
    <div className='bg-zinc-700 pb-20 pt-10 flex justify-evenly'>
<div dir='rtl' className=' flex justify-around flex-col w-56 h-96'>
<h2 className='text-base font-bold text-white'>نمادهای الکترونیکی</h2>
<img src={logo1} className='w-40 h-24 mr-auto ml-auto' alt="" />
<img src={logo2} className='w-40 h-24 mr-auto ml-auto' alt="" />
<img src={logo3} className='w-40 h-24 mr-auto ml-auto' alt="" />
</div>
      {/*  */}

<div dir='rtl' className='text-xs flex justify-around flex-col w-56 h-96 pr-4 pb-6 pt-2'>
<h2 className='text-base font-bold text-white'>دسترسی سریع</h2>
  <span  className=" transition-all text-slate-200 hover:text-red-600">تماس با ما</span>
  <span  className="transition-all text-slate-200 hover:text-red-600">وبلاگ</span>
  <span  className="transition-all text-slate-200 hover:text-red-600">درباره ما</span>
  <span  className="transition-all text-slate-200 hover:text-red-600">پرسش و پاسخ</span>
  <span  className=" transition-all text-slate-200 hover:text-red-600">قوانین و مقررات</span>
  <span  className="transition-all text-slate-200 hover:text-red-600">ثبت شکایات</span>
  <span  className=" transition-all text-slate-200 hover:text-red-600">نظر سنجی</span>
  <span  className=" transition-all text-slate-200 hover:text-red-600">گارانتی</span>
  <span  className=" transition-all text-slate-200 hover:text-red-600">پیگیری سفارش</span>
</div>
{/*  */}
<div dir='rtl' className='text-xs flex justify-around flex-col w-56 h-96 pr-4 pb-6 pt-2'>
  <h2 className='text-base font-bold text-white'>دسته بندی ها</h2>
  <span  className=" transition-all text-slate-200 hover:text-red-600">لپ تاپ</span>
  <span  className="transition-all text-slate-200 hover:text-red-600">موبایل</span>
  <span  className="transition-all text-slate-200 hover:text-red-600">تبلت</span>
  <span  className="transition-all text-slate-200 hover:text-red-600">کامپیوتر کوچک</span>
  <span  className=" transition-all text-slate-200 hover:text-red-600">کامپیوتر همه کاره</span>
  <span  className="transition-all text-slate-200 hover:text-red-600">قطعات کامپیوتر</span>
  <span  className=" transition-all text-slate-200 hover:text-red-600">ماشین اداری و لوازم جانبی</span>
  <span  className=" transition-all text-slate-200 hover:text-red-600">کنسول بازی و تجهیزات</span>
  <span  className=" transition-all text-slate-200 hover:text-red-600">لوازم جانبی</span>
</div>
{/*  */}
<div dir='rtl' className=' flex flex-col w-56 pr-4 pb-6 pt-2'>
<h2 className='text-base font-bold text-white'>دفتر مرکزی</h2>
  <p className='text-slate-200 text-sm mt-4'>خیابان ولیعصر بلوار میرداماد مجتمع پایتخت بلوک B طبقه 10 واحد 1002</p>
  <p  className='text-slate-200 text-sm mt-3'>ساعات پاسخگویی: شنبه تا چهارشنبه از ساعت 10 الی 18.30 | پنجشنبه‌ ها از ساعت 10 الی 14.30</p>
  <img src={logo} className='w-56 mt-4' alt="logo" />
</div>

 </div>
    
  )
}

export default Footer