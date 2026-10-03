import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center h-80'>
        <div className=''>This page is not developed yet</div>
        <div className='text-9xl text-black/80'>404</div>
        <Link href={"/"} className='border-black border-2 p-2 rounded text-white bg-black/80 font-bold' >Go back to homepage</Link>
      
    </div>
  )
}
