import React, { useContext } from 'react'
import styled from 'styled-components'
import ListContext from './ListContext'

function WatchList() {
    const { items } = useContext(ListContext)
    return (
        <>
            <MovieWrap>
                <Title>Movie List</Title>
                <div>
                    {items.map((item, index) => (
                        <ul key={index}>
                            <li>{item.title}</li>
                            <li>{item.rating}</li>
                        </ul>
                    ))}
                </div>
            </MovieWrap>
        </>
    )
}

export default WatchList

const Title= styled.h1`
display: flex;
justify-content: space-between;
`
const MovieWrap = styled.div`
    display: Flex;
    justify-content: center;
    padding: 30px;
    background-color: antiquewhite;
`
