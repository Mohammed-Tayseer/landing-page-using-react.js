import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='box'>
                <h1>Good food choices are good investments.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                <div className='div-btn'>
                  <button>Order Now</button>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
