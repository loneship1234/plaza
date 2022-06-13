import React,{useState} from 'react'
import SelectButton from './SelectButton';
import { SearchIcon,HeartIcon,DesktopComputerIcon,CheckIcon } from '@heroicons/react/outline';


function Product(props) {
  const [Heart, SetHeart] = useState(HeartIcon);
  const [Class, SetClass] = useState('');
  const Scroll=()=>{    
     window.scrollTo({
    top: 0,
    behavior: "smooth"
  });}
  const HeartHandeler=(e)=>{ 
    
    <div className="loader"></div>
    SetClass('text-red-600')
    SetHeart(CheckIcon) 
  }
  const ShowedPrice=()=>{ 
    if (props.ShowedPrice===true) {
      return (<p className='text-red-500 text-center mt-10 font-bold text-sm' dir='rtl'>{props.Price } تومان</p>)
    } else if(props.ShowedPrice===false) {
      return (<p className='text-red-500 text-center my-10 font-bold text-sm' dir='rtl'> </p>)
      
    }
  }
  // 
  const Detail=()=>{ 
  if (props.Detail===true) {
    return(
       <div>
      <hr />
       <ul>
           <li className='text-xs font-semibold ml-5 mt-4 list-disc'>CPU: {props.Cpu }</li>
           <li className='text-xs font-semibold ml-5 mt-2 list-disc'>RAM: {props.Ram }</li>
           <li className='text-xs font-semibold ml-5 mt-2 list-disc'>Storage: {props.Storage }</li>
           <li className='text-xs font-semibold ml-5 mt-2 list-disc'>Graphic: {props.Gpu }</li>
           <li className='text-xs font-semibold ml-5 mt-2 list-disc'>Display: {props.Display}</li>
       
       </ul>
      </div>)
  } else {
    <div></div>
  }      }
  return (
     <section>
        
    <div className='h-ziad-2 border-2 border-slate-100 rounded-sm card'  >
         <div className='z-20 position rounded-xl shadow-1  p-1 lg:px-2 lg:rounded-md lg:hidden tooltip bg-white'>
    <SearchIcon  className='w-5 hidden lg:block  cursor-pointer ' onClick={Scroll}/>
  <DesktopComputerIcon className='w-5 mb-4 mt-1 lg:my-3 cursor-pointer'/>
  <Heart className={Class+' w-5 cursor-pointer '} onClick={HeartHandeler}/>
    </div>
        <img src={props.ImgSrc} alt="product" className='ml-auto mr-auto pt-7' />
        <p className='text-center text-xs font-semibold mt-3' dir='rtl'>{props.Model }</p>
     {ShowedPrice()}
       <div className="flex justify-center mt-2 mb-4"> <SelectButton ButtonText={props.ButtonText}/> </div>
     {Detail()}
    </div>
    
     </section>
  )
}

export default Product