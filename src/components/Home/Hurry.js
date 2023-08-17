import React from 'react'
import './Hurry.css'

const Hurry = () => {
  return (
    <>
      <div className='hurry'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>Hurry up! Subscribe our newsletter and get 25% Off</h1>
              <p>Limited time offer for this month. No credit card required.</p>
              <form>
                <div className='div-inp'>
                  <input placeholder='Email Address here'/>
                  <button>Subscribe</button>
                </div>
              </form>
            </div>  

          </div>
        </div>
      </div>
    </>
  )
}

export default Hurry
