
import { useState } from "react"; // import state
import {HomeIcon,PhoneIcon,DeviceMobileIcon,FolderIcon,GiftIcon,HeartIcon,IdentificationIcon, InformationCircleIcon, LoginIcon, LogoutIcon} from '@heroicons/react/outline';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8 p-2 mr-3 lg:hidden">

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-1 w-8 animate-pulse bg-gray-600 cursor-pointer"></span>
            <span className="block h-1 w-8 animate-pulse bg-gray-600 cursor-pointer"></span>
            <span className="block h-1 w-8 animate-pulse bg-gray-600 cursor-pointer"></span>
          
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 cursor-pointer right-0 px-2 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-end  min-h-[50px]">
              <li className="border-b border-gray-400 my-8">
                <span className="bg-gray-200 px-[123px] py-7 border-b-4 border-red-500 text-700 font-bold">منو</span>
              </li>              
            </ul>
           <ul className="flex flex-col items-end">
           <li className=" my-3 mt-7 mr-2 flex">
                <span>خانه</span>
             <HomeIcon className="w-6 ml-2"/>
              </li> 
              <li className="mr-2 my-3 mt-5 flex">
                <span >تلفن</span>
             <PhoneIcon className="w-6 ml-2"/>
              </li> 
              <li className="mr-2 my-3 mt-5 flex">
                <span >گوشی</span>
             <DeviceMobileIcon className="w-6 ml-2"/>
              </li> 
              <li className="mr-2 my-5 mt-4 flex">
                <span >پوشه</span>
             <FolderIcon className="w-6 ml-2"/>
              </li> 
              <li className="mr-2 my-5 mt-4 flex">
                <span >هدیه</span>
             <GiftIcon className="w-6 ml-2"/>
              </li> 
              <li className="mr-2 my-5 mt-4 flex">
                <span >مورد علاقه</span>
             <HeartIcon className="w-6 ml-2"/>
              </li> 
              <li className="mr-2 my-5 mt-4 flex">
                <span >اطلاعات</span>
             <IdentificationIcon className="w-6 ml-2"/>
              </li>
              <li className="mr-2 my-5 mt-4 flex">
                <span >درباره</span>
             <InformationCircleIcon className="w-6 ml-2"/>
              </li> 
              <li className="mr-2 my-5 mt-4 flex">
                <span >ورود</span>
             <LoginIcon className="w-6 ml-2"/>
              </li> 
              <li className="mr-2 my-5 mt-4 flex">
                <span >خروج</span>
             <LogoutIcon className="w-6 ml-2"/>
              </li> 
           </ul>
          </div>
        </section>

         </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 60%;
        margin-left:auto;
        height: 100vh;
        top: 0;
        right: 0;
        background: white;
        z-index: 10;
      }
    `}</style>
    </div>
  );
}