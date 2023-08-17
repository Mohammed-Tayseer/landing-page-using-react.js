import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='box'>
                <ul className='ul-text'>
                  <li>Register</li>
                  <li>Forum</li>
                  <li>Affiliate</li>
                  <li>FAQ</li>
                </ul>
                <ul className='icons'>
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-twitter"></i></li>
                  <li><i class="fa-brands fa-youtube"></i></li>
                  <li><i class="fa-brands fa-linkedin-in"></i></li>
                  <li><i class="fa-brands fa-instagram"></i></li>
                </ul>
                <p className='rights'>© 2021. Foodera. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
