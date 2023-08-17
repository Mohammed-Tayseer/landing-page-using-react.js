import React from 'react'
import './Ingredients.css'
import imgIngredient from './../../assets/Images/ingredients.png'

const Ingredients = () => {
  return (
    <>
      <div className='ingredients'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='box'>
                <h1>We make everything by hand with the best possible ingredients.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul>
                  <li><i class="fa-solid fa-check-double"></i>Etiam sed dolor ac diam volutpat.</li>
                  <li><i class="fa-solid fa-check-double"></i>purus a odio finibus bibendum.</li>
                  <li><i class="fa-solid fa-check-double"></i>Erat volutpat aliquet imperdiet.</li>
                </ul>
                <button>Learn More</button>
              </div>  
            </div>
            <div className='col-md-6'>
              <div className='box'>
                <img src={imgIngredient} alt="images" className='img-fluid'/>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ingredients
