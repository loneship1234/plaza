import React from 'react'
// import {ShoppingCartIcon} from '@heroicons/react/outline'

function SelectButton(props) {
  return (
   <button className=' font-semibold rounded-md text-gray-200  text-xs p-button  hover:bg-cyan-600 bg-red-500'> <span>{props.ButtonText}</span> </button>

  )
}

export default SelectButton