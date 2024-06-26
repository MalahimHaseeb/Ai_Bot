"use client"
import { AppContext } from '@/app/context'
import Link from 'next/link'
import { useContext } from 'react'
// import React, { useContext } from 'react'

const ImageC = () => {
  const {login} = useContext(AppContext)
  return (
    <div className='image'>
      <div className='flex justify-center text-center items-center h-screen'>
        <div className="text-white">
          <h1 className=' font-bold'>Welcome to your personal bot. Here I use AI API to provide you with real-time information.</h1>
          <div className="flex justify-center mt-8">
          
            
            
              <Link href={'/Components/Bot'}><button className="bg-yellow-500 text-white px-4 m-3 py-2 rounded-md text-sm font-medium">Haseeb Bot</button></Link> 
            
            {/* <Link href={'/Components/Login'}><button className="bg-yellow-500 text-white px-4 m-3 py-2 rounded-md text-sm font-medium">{login.user}</button></Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageC
