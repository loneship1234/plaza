import React,{useState} from 'react'
import {MenuIcon,ChevronUpIcon,} from '@heroicons/react/solid';


function DesktopMenu() {
    const [Icon, setIcon] = useState('');
  return (
    <div className='hidden lg:flex content-center border-2 my-2 py-1 border-gray-100 '>
        <br  className='mt-10'/>
            <a href='tel:00982188775702' className='ml-14 py-3 px-4 text-gray-100 bg-red-700 rounded-md  text-sm hover:bg-red-900'>02188775702</a>
            <a href='tel:00982188775702' className='ml-9 py-3 px-4 text-gray-100 bg-red-700 rounded-md   text-sm hover:bg-red-900'>02188775702</a>
        
            <div className='ml-auto mt-2'>
            <button className='mx-4 text-xs font-semibold'> درباره  پلازا دیجیتال </button>
            <button className='mx-4 text-xs font-semibold'>شعبات حضوری</button>
            <button className='mx-4 text-xs font-semibold'>وبلاگ</button>
            <button className='mx-4 text-xs font-semibold'>گارانتی پلازا دیجیتال</button>
            <button className='mx-4 text-xs font-semibold mr-10'>خرید اقساطی</button>
            <div className=' mr-16 inline-block border-l-2 ' onMouseLeave={()=>{setIcon(' rotate-0')}} onMouseEnter={()=>{setIcon(' rotate-180 ' )}} >
            <ChevronUpIcon className={'w-5 mr-10 inline-block'+Icon}/>
            <label tabindex="0" class=" m-1">دسته بندی کالاها</label>
            <MenuIcon className='w-6 inline-block'/>
            </div>
            </div>
    </div>
  )
}

export default DesktopMenu