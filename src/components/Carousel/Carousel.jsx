import React from 'react'
import './Carousel.scss'
import img from '../../Assets/img/carousel/img.jpg'
import img5 from '../../Assets/img/carousel/img5.jpg'
import img4 from '../../Assets/img/carousel/img4.jpg'
import rek1 from '../../Assets/img/carousel/rek.webp'
import rek3 from '../../Assets/img/carousel/rek3.jpg'
import rek4 from '../../Assets/img/carousel/rek4.jpg'

const Carousel = () => {
  return (
    <div className='hero-section'>
        <div className="container">
            <div className="carousel">
                <div className="carousel__item">
                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                            <img src={img} alt="" class="d-block w-100 " id='img' />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                            <img src={img4} alt="" class="d-block w-100" id='img' />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                            <img src={img5} alt="" class="d-block w-100" id='img' />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="carousel__rek">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src={rek3} alt="" class="d-block w-100" id='img'  />
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <img src={rek1} alt="" class="d-block w-100" id='img'  />
                            </div>
                            <div class="carousel-item">
                                <img src={rek4} alt="" class="d-block w-100" id='img'  />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel