import { Carousel } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Caurosel.css'

const Caurosel = () => {
    return (
        <div>
            <div className="h-96 lg:h-[600px] ">
  <Carousel>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white ">
      <div className='img-gradient object-fill'>
        <img className='object-cover h-96 lg:h-[600px]' src=" https://i.ibb.co/5YHSWbT/Edited1.jpg" alt="" />
      </div>
      <section className="z-30 absolute top-0">
      <div className='overflow-hidden'>
        <div className="h-96 lg:h-[600px] container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900 m-0">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">Looking For <span className='text-warning'>Secondhand</span> phone?</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">Then you are on the right place. We have variety of old phone from different people around the Country.</p>
          <div className="flex flex-wrap justify-center">
            <Link to={'/login'} type="button btn-primary" className="btn md:px-10 btn-primary m-2 text-lg font-semibold rounded">Login</Link>
            <Link to={'/signup'} type="button" className="btn btn-outline btn-warning md:px-10  m-2 text-lg  text-gray-50">Sign Up</Link>
          </div>
        </div>
      </div>
      {/* <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" /> */}
    </section>
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative">
    <div className='img-gradient'>
        <img className='object-cover h-96 lg:h-[600px]' src="https://i.ibb.co/hg1R9Vk/Edited2.jpg" alt="" />
      </div>
      <section className="z-30 absolute top-0">
      <div>
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">Want to sell your <span className='text-warning'>Secondhand</span> phone?</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">Then you are on the right place. We have variety of Buyer from different people around the Country.</p>
          <div className="flex flex-wrap justify-center">
            <Link to={'/login'} type="button btn-primary" className="btn md:px-10 btn-primary m-2 text-lg font-semibold rounded">Login</Link>
            <Link to={'/signup'} type="button" className="btn btn-outline btn-warning md:px-10  m-2 text-lg  text-gray-50">Sign Up</Link>
          </div>
        </div>
      </div>
      {/* <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" /> */}
    </section>
    
    </div>



    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative">
    <div className='img-gradient'>
        <img className='object-cover h-96 lg:h-[600px]' src="https://i.ibb.co/R3DK6dr/Edited3.jpg" alt="" />
      </div>
      <section className="z-30 absolute top-0">
      <div>
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">We receive <span className='text-warning'> International </span>Payment</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">You can sell or buy phone internationaly and by using intenational payment methods like visa, Mastercard</p>
          <div className="flex flex-wrap justify-center">
            <Link to={'/login'} type="button btn-primary" className="btn md:px-10 btn-primary m-2 text-lg font-semibold rounded">Login</Link>
            <Link to={'/signup'} type="button" className="btn btn-outline btn-warning md:px-10  m-2 text-lg  text-gray-50">Sign Up</Link>
          </div>
        </div>
      </div>
      {/* <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" /> */}
    </section>      
    </div>
  </Carousel>
</div>

        </div>
    );
};

export default Caurosel;