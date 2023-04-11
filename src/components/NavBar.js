import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ListContext from './ListContext'

function NavBar() {
    const { items } = useContext(ListContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <LogoContainer>
                    <Link className="navbar-brand" to={'/'}>
                        IMBD
                    </Link>
                </LogoContainer>
                <ToggleWrap>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </ToggleWrap>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to={'/'}>
                            Home
                        </Link>
                        <TrailerContainer>
                            <Link
                                className="nav-item nav-link"
                                to={'/trailers'}
                            >
                                Trailers
                            </Link>
                        </TrailerContainer>
                        <ListContainer>
                            <Link
                                className="nav-item nav-link"
                                to={'/watchlist'}
                            >
                                <span>({items.length}) </span>
                                <i className="fa-solid fa-plus">Watchlist</i>
                            </Link>
                        </ListContainer>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar
const LogoContainer = styled.div`
    margin-left: 15px;
`
const ToggleWrap = styled.div`
    margin-right: 15px;
`
const TrailerContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const ListContainer = styled.div`
    margin-right: 10px;
    //Check
`
