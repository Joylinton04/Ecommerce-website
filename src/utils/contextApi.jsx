import { createContext } from "react";
import { useState } from "react";




export const DataContext = createContext("")




export const DataProvider = ({children}) => {
    const [cart, setCart] = useState([])
    return (
        <DataContext.Provider value={{
            cart,setCart
        }}>
            {children}
        </DataContext.Provider>
    )
}