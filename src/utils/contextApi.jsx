import { createContext, useEffect } from "react";
import { useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";



export const DataContext = createContext("")




export const DataProvider = ({children}) => {
    const { getItem } = useLocalStorage('cart')
    const [cart, setCart] = useState(getItem('cart') || [])
    const [confirmation, setConfirmation] = useState(false)

    return (
        <DataContext.Provider value={{
            cart,setCart,confirmation,setConfirmation
        }}>
            {children}
        </DataContext.Provider>
    )
}