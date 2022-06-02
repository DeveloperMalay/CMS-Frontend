import React from 'react'
import{images} from '../../Constants'
import "./Welcome.scss"

const Welcome = () => {
  return (
    <div className='welcome__container'>
        <div className="welcome_card">
            <div className="welcome-image">
              <img src={images.welcome_image} alt="" />
            </div>
            <p>Are you a </p>
            <div className="options">
              <span>Customer</span>
              <span>Serice Proider</span>
            </div>
        </div>
    </div>
  )
}

export default Welcome