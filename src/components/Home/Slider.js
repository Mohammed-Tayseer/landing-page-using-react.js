import React from 'react'
import './Slider.css'
import imgSlider01 from '../../assets/Images/slider01.jpg'

import {Carousel} from 'react-bootstrap'

const Slider = () => {
  return (
    <>
      <div className='slider'>
        <div className='container'>
          <div className='row'>
              <h1>Testimonials</h1>
            <div className='col-lg-12 col-md-12'>
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <img src={imgSlider01} alt="First slide"/>
                  <Carousel.Caption>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <h5>Simab Dave - Web Designer</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={imgSlider01} alt="Second slide"/>
                  <Carousel.Caption>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <h5>Johnthan Doe - UX Designer</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={imgSlider01} alt="Third slide"/>
                  <Carousel.Caption>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <h5>Maccy Doe - Front End</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
