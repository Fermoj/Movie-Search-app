import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { BsFillStarFill, BsStar } from 'react-icons/bs'
import ListContext from './ListContext'

function MovieCards({ title, rating }) {
    const { addToList } = useContext(ListContext)
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('Movies.json')
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error(error))
    }, [])

    function toggleStar(index) {
        console.log('clicked')
        setMovies((prevMovies) => {
            const updatedMovies = [...prevMovies]
            updatedMovies[index].isFavorite = !updatedMovies[index].isFavorite
            console.log(updatedMovies)
            return updatedMovies
        })
    }

    function handleSearch(event) {
        setSearch(event.target.value.toLowerCase().trim())
    }

    const filteredMovies = movies.filter((movie) => {
        const movieName = movie.name.toLowerCase()
        return movieName.includes(search)
    })

    return (
        <>
            <Wrap>
                <Search>
                    <Title>Fans favorites </Title>
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={handleSearch}
                    />
                </Search>
                <Card className="container">
                    <div className="row">
                        {filteredMovies.map((movie, index) => (
                            <div className="col" key={movie.id}>
                                <div
                                    className="card"
                                    style={{ width: '10rem', margin: '1rem' }}
                                >
                                    <img
                                        className="card-img-top"
                                        src={movie.image}
                                        alt="About-movies"
                                    />
                                    <div className="card-body">
                                        <div className="star-rate">
                                            <p
                                                onClick={() =>
                                                    toggleStar(index)
                                                }
                                            >
                                                {movie.isFavorite ? (
                                                    <BsFillStarFill />
                                                ) : (
                                                    <BsStar />
                                                )}
                                            </p>
                                            <p className="card-text">
                                                {movie.rating}
                                            </p>
                                        </div>
                                        <div className="add-title">
                                            <h5 className="card-title">
                                                {movie.name}
                                            </h5>
                                            <i
                                                className="fa-solid fa-plus"
                                                id="add"
                                                onClick={() =>
                                                    addToList(title, rating)
                                                }
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </Wrap>
        </>
    )
}
export default MovieCards

const Wrap = styled.div`
    margin-top: 50px;
`
const Title = styled.div`
    background-color: lightgrey;
    padding: 7px;
    font-weight: bold;
    margin-left: 30px;
`
const Card = styled.div`
    padding: 30px;
`
const Search = styled.form`
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
`
