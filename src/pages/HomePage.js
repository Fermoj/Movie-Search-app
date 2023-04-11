import React from 'react'
import MovieCards from '../components/MovieCards'
import HeroImage from '../components/HeroImage'
import { BsFillStarFill, BsStar } from 'react-icons/bs'

function HomePage() {
    const slides = [
        {
            image: './image/HeroImg.jpg',
            title: 'Batman',
            rating: [<BsFillStarFill/>,<BsFillStarFill/>,<BsFillStarFill/>,<BsFillStarFill/> ,<BsStar/>] ,
            time: '2h : 22min'
        },
        {
            image: './image/Titanic_poster.png',
            title: 'Movie',
            rating: [<BsFillStarFill/>,<BsFillStarFill/>,<BsFillStarFill/>,<BsStar/> ,<BsStar/>],
            time: '2h : 22min'
        },
        {
            image: './image/HeroImg.jpg',
            title: 'Movie',
            rating: [<BsFillStarFill/>,<BsFillStarFill/>,<BsFillStarFill/>,<BsFillStarFill/> ,<BsStar/>],
            time: '2h : 22min'
        }
    ]
    return (
        <div>
            <HeroImage className="home-page" slides={slides} />
            <MovieCards />
        </div>
    )
}

export default HomePage
