import React from 'react'
import Logo from '../img/plazadigital-logo.png';
import HamburgerMenu from './HamburgerMenu';
import { SearchIcon,UserIcon,HeartIcon,ShoppingBagIcon} from '@heroicons/react/outline';
// import { slide as Menu } from 'react-burger-menu'

function Header() {
  return (
        <React.Fragment>
          
            <div className='flex h-16 items-center flex-row justify-between lg:h-28 sticky top-0 bg-white z-50 drop-shadow-md' id='App'> 
            <a href='tel:00982188775702' className='lg:hidden py-3 px-4 bg-slate-100 rounded-md ml-2  text-sm hover:bg-slate-200'>02188775702</a>
           {/*  */}
           
           <span dir='rtl' className='text-md mt-1 ml-20 hidden lg:block'><span className='ml-1'>0</span>تومان</span>
           <ShoppingBagIcon  className='w-7 ml-1 mr-5 hidden lg:block cursor-pointer'/>
      
           <HeartIcon className='w-7 mx-6 hidden lg:block cursor-pointer'/>
            <UserIcon  className='w-7 mx-6 hidden lg:block  cursor-pointer'/>
           <SearchIcon   className='w-7 ml-40 mr-2 hidden lg:block '/>
            <input type="text" dir='rtl' placeholder='محصول خود را جست و جو کنید' className='bg-gray-100 outline-none  w-11/12 h-9 ml-2  placeholder:float-right placeholder:text-sm placeholder:mt-1 placeholder:mr-2 rounded hidden lg:block lg:w-6/12 lg:mr-0 ' />
           {/*  */}
            <img src={Logo} alt="logo" className=' h-9 w-44  lg:ml-10 lg:mr-16 lg:w-60 lg:h-12' />
            <HamburgerMenu className='w-8 mr-2 block lg:hidden cursor-pointer'/> 
            </div>
            
            {/*  */}
            <div className='flex mt-3 mb-3 lg:hidden'>
            <SearchIcon className='w-6 ml-5 -mr-2'/>
            <input type="text" placeholder='محصول خود را جست و جو کنید' className='bg-gray-100 outline-none  w-10/12 h-8 ml-auto  mr-2 placeholder:float-right placeholder:text-sm placeholder:mt-1 placeholder:mr-2 rounded' />
            </div>
        </React.Fragment>
  )
}

export default Header