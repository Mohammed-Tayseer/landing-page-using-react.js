import React from 'react'
import './Blogs.css'
import Data from '../../Data/Data'


const Blogs = () => { 

  const blogitem = Data.map((item) => {
    return(
      <div className='col-md-4'>
        <div className='box'>
          <img src={item.img} alt=''/>
          <h1>{item.title}</h1>
          <p>Time: {item.time} | Serves: 1</p>
          <h3>{item.price} <span>{item.discount}</span></h3>
          <button className=''>Order Now</button>
        </div>
      </div>
    )
  })



  return (
    <>
      <div className='blogs'>
        <div className='container'>
          <div className='row'>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='title text-center'>
                <h1>Explore Our Foods</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
              </div>
            </div>
            {blogitem}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs
