import React from 'react'
import './Numbers.css'

const Numbers = () => {
  return (
    <>
      <section className='numbers'>
        <div className='container'>
          <div className='row g-row'>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <h2>1288+</h2>
                <h6>SAVINGS</h6>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <h2>7110+</h2>
                <h6>PHOTOS</h6>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <h2>1440+</h2>
                <h6>ROCKETS</h6>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <h2>5786+</h2>
                <h6>GLOBES</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Numbers
