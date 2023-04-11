import { createContext, useState } from 'react'

//envoking/kallar på functionen och placerar den i varabel
const ListContext = createContext()

//komponenten providar/ger data till sin barn
export function ListProvider({ children }) {
    const [items, setItems] = useState([])
    const addToList = (title, rating) => {
        //... meaning keep whatever was in the state and after comma declare the new value to be added to the state.
        setItems((prevState) => [...prevState, { title, rating }])
    }

    return (
        <ListContext.Provider value={{ items, addToList }}>
            {children}
        </ListContext.Provider>
    )
}
export default ListContext
