import React from 'react'
import photo from '../assets/Images/calvin-dahne-WX9bvBTUzB4-unsplash.jpg'


const Home = () => {
  return (
    <div  className='relative w-full h-screen'>
      <img src={photo} alt="Car" className='w-full h-full object-cover absolute ' />
      <h1 className='absolute bottom-5 left-10 p-3 text-pink-600 text-xl'>
        Best Car Rental Website for Big Tours
      </h1>
    </div>
  )
}

export default Home