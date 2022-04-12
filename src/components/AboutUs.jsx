import React from 'react'
import FotoAboutUs from '../Img/AboutUs.jpg'

const AboutUs = () => {
  return (
    <div className='informationFrame-par'>
        <h3 id='nosotros'>Sobre Nosotros</h3>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cum incidunt dignissimos voluptate ipsa debitis saepe nam labore cupiditate quaerat accusamus, quos laborum amet similique soluta? Magni reprehenderit dicta magnam?

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quod quaerat et. Porro dignissimos consectetur omnis ut, itaque iure impedit, maxime, consequatur distinctio cupiditate debitis doloremque dolorem consequuntur voluptates mollitia?
                </div>
                <div className="col-4">
                    <img src={FotoAboutUs} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs