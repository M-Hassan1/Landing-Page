import React from 'react'
import carOne from '../assets/Images/campbell-3ZUsNJhi_Ik-unsplash.jpg'
import CarTwo from '../assets/Images/lance-asper-N9Pf2J656aQ-unsplash.jpg'
import CarThree from '../assets/Images/sid-ramirez-xF2HkuitGDY-unsplash.jpg'

const AboutPage = () => {
  return (
    <>
    <div className='mt-20 text-center ' >
        <div className='grid grid-cols-1 md:grid-cols-2'> 
        <div className='p-4 hover:scale-[1.02] duration-500 ' >
            <img src={carOne} alt='/'  className='rounded-lg' />
        </div>
        <div className='p-4' >
          <h1 className='p-2 text-bold text-2xl ' >
            About Car
          </h1>
          <p>
          BeautiFul And Luxury Car For Long Driving,
          The Mercedes-Benz S-Class, formerly known as Sonderklasse, is a series of full-sized luxury sedans, limousines and armored sedans produced by the German automaker Mercedes-Benz.
          The Mercedes-Benz S-class remains the cream of the full-size luxury sedan crop. No wonder a six-cylinder S500 took top honors over the Genesis G90 and Lexus 
          </p>
        </div>
        </div>
    </div>


    <div className='mt-20 text-center ' >
        <div className='grid grid-cols-1 md:grid-cols-2'> 
        <div className='p-4' >
          <h1 className='p-2 text-bold text-2xl ' >
            About Car
          </h1>
          <p>
          BeautiFul And Luxury Car For Long Driving,
          The Mercedes-Benz S-Class, formerly known as Sonderklasse, is a series of full-sized luxury sedans, limousines and armored sedans produced by the German automaker Mercedes-Benz.
          The Mercedes-Benz S-class remains the cream of the full-size luxury sedan crop. No wonder a six-cylinder S500 took top honors over the Genesis G90 and Lexus 
          </p>
        </div>
        <div className='p-4 hover:scale-[1.02] duration-500 ' >
            <img src={CarTwo} alt='/'  className='rounded-lg' />
        </div>
        </div>
    </div>
    <div className='mt-20 text-center ' >
        <div className='grid grid-cols-1 md:grid-cols-2'> 

        <div className='p-4 hover:scale-[1.02] duration-500 ' >
            <img src={CarThree} alt='/'  className='rounded-lg' />
        </div>


        <div className='p-4' >
          <h1 className='p-2 text-bold text-2xl ' >
            About Car
          </h1>
          <p>
          BeautiFul And Luxury Car For Long Driving,
          The Mercedes-Benz S-Class, formerly known as Sonderklasse, is a series of full-sized luxury sedans, limousines and armored sedans produced by the German automaker Mercedes-Benz.
          The Mercedes-Benz S-class remains the cream of the full-size luxury sedan crop. No wonder a six-cylinder S500 took top honors over the Genesis G90 and Lexus 
          </p>
        </div>
      
        </div>
    </div>
    </>
    
  )
}

export default AboutPage