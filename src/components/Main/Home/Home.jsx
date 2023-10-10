import React from 'react'
import Profile from '../../../../public/Profile.png';

const Home = () => {
  return (
    <section id='home' className='h-[100vh] flex justify-evenly pt-12 bg-slate-200'>
          <div className=' flex flex-col justify-center items-center max-w-[990px]'>
            <h1>Hi, I’M <span className='text-cyan-900'> MICHAEL</span></h1>
            <h2 className=' text-1xl'>junior software Developer react</h2>
            <h2 className=' text-1xl'>I develop website, user interfaces and web application</h2>
            <br />
            <a href=''>contact me</a>

          </div>
          <div className=' max-w-[990px] flex flex-col items-center justify-center b'>
            <div className='w-[400px] h-[400px] rounded-full bg-cyan-900 overflow-hidden'>
                <img src={Profile}/>
            </div>
          </div>
        </section>
  )
}

export default Home