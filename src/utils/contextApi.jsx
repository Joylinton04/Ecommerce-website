import { createContext } from "react";
import { useState } from "react";




export const DataContext = createContext("")




export const DataProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [confirmation, setConfirmation] = useState(false)

    return (
        <DataContext.Provider value={{
            cart,setCart,confirmation,setConfirmation
        }}>
            {children}
        </DataContext.Provider>
    )
}