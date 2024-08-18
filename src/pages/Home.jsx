import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='flex justify-center'>
        <h1 className='fixed top-0 left-0 text-6xl font-extrabold p-4 text-gray-800'>ACCUKNOX</h1>
        <div className='mt-48 grid grid-cols-1'>
            <h1 className='text-5xl font-bold'>Home Page</h1>
            <Link to={'/dashboard'} className='bg-purple-500 text-2xl p-3 rounded-lg mt-4 text-center'>Go To Dashboard</Link>
        </div>
      </div>
  )
}

export default Home
