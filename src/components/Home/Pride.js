import React from 'react'
import './Pride.css'
import ImgPride from './../../assets/Images/pride.png'

const Pride = () => {
  return (
    <>
    <section className='pride'>
      <div className='container'>
        <div className='row g-row'>
          <div className='col-md-7'>
            <div className='box'>
              <img src={ImgPride} alt='images' className='img-fluid'/>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='box'>
              <h1>We pride ourselves on making real food from the best ingredients.</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Pride
