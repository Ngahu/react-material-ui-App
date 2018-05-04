import React from 'react'

import home1 from '../images/home-6.png';
import home2 from '../images/home-7.jpg';
import home3 from '../images/home-8.jpg';

import './css/Slider.css';

export default () => {
  return (
    <div>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="d-block w-100 img-fluid" src="https://res.cloudinary.com/nearhomes/image/upload/c_scale,h_173/v1522543345/sample.jpg" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>This is a heading </h5>
    <p>this is the parathis is the parathis is the parathis is the parathis is the parathis is the parathis is the para</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://res.cloudinary.com/nearhomes/image/upload/c_scale,w_151/v1525460118/real-estate-2955057_1920.jpg" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5>This is a heading </h5>
    <p>this is the parathis is the parathis is the parathis is the parathis is the parathis is the parathis is the para</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="http://res.cloudinary.com/nearhomes/image/upload/v1522543345/sample.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    </div>
  )
}
