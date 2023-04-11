import React, { useContext } from 'react'
import styled from 'styled-components'
import ListContext from './ListContext'

function WatchList() {
    const { items } = useContext(ListContext)
    return (
        <>
            <MovieWrap>
                <h1>Movie List</h1>
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
const MovieWrap = styled.div`
    display: Flex;
    justify-content: center;
    padding: 30px;
`
