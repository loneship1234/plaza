import React from 'react'

function ThumbNail(props) {
    const buttonAv=()=>{
        if (props.buttonAvailable===true) {
        return(<React.Fragment>
          <button className='py-3 px-5 bg-red-700 rounded-sm text-sm ml-2 text-gray-200 hover:bg-red-700 hover:text-gray-300'>{props.ButtonText}</button>
        <p className='inline mr-2 mt-2 underline underline-offset-22 font-bold'>{props.text}</p>
        </React.Fragment>
        )
     }
    else if(props.buttonAvailable===false){
return(<p className='inline ml-auto  underline underline-offset-10 text-sm font-bold'>{props.text}</p>)
    }}

  return (
    <div className='mt-7 lg:mx-5'>
       
     <div className=' mx-2 lg:mx-10 mb-7'>
     <div className='flex justify-between  mb-1'>
    {buttonAv()}
    </div>
        <hr />
     </div>
    </div>
  )
}

export default ThumbNail