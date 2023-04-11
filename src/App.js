import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TrailerPage from './pages/TrailerPage'
import ListPage from './pages/ListPage'
import { ListProvider } from './components/ListContext'
import ErrorPage from './pages/ErrorPage'
import NavBar from './components/NavBar'
import FootEr from './components/FootEr'

function App() {
    return (
        <>
            <ListProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/trailers" element={<TrailerPage />} />
                    <Route path="/watchlist" element={<ListPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </ListProvider>
            <FootEr />
        </>
    )
}

export default App
