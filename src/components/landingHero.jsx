import React from 'react'
import pan1 from '../Img/pan1.jpg'
import pan2 from '../Img/pan2.jpg'
import pan3 from '../Img/pan3.jpg'
import pan4 from '../Img/pan4.jpg'

const landingHero = () => {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={pan1} alt="First slide" />
          </div>
          <div className="carousel-item  ">
            <img className="d-block w-100" src={pan2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={pan3} alt="Third slide" />
          </div>
          <div className="carousel-item ">
            <img className="d-block w-100" src={pan4}alt="foutrh slide" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default landingHero