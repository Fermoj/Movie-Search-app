import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    )
}
const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-chevron-left"></i>
            </button>
        </div>
    )
}

function HeroImage({ slides }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }
    return (
        <div>
            <Container>
                <Slider {...settings}>
                    {slides.map(({ image, title, rating, time }, index) => (
                        <div className="slide" key={index}>
                            <div className="hero-image">
                                <img src={image} className="img" alt="hej" />
                            </div>
                            <div className="slide-info">
                                <Title>{title}</Title>
                                <p>{rating}</p>
                                <p>{time}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    )
}
export default HeroImage
const Container = styled.div`
    position: relative;
`

const Title = styled.h1`
    background-image: url('/image/h1Title.jpg');
    display: flex;
    font-size: 90px;
    text-transform: uppercase;
    font-weight: 800;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
