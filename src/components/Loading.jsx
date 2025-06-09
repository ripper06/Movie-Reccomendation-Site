import React from 'react'
import Loader from "../../Public/Loader.gif" 


const Loading = () => {
  return (
    <div className='w-screen h-full flex justify-center items-center bg-white'>
      <img className='h-[25%]' src={Loader} alt="" />
    </div>
  )
}

export default Loading
