import { createContext, useState } from "react";

export const ProductContext = createContext()

export const ProductContextProvider = ({ children }) => {
    const [data, setData] = useState({
        productName: 'Apple 14 Pro Max'
    })

    const [cart, setCart] = useState([])

    return <ProductContext.Provider value={{ data, setCart, cart }}>{children}</ProductContext.Provider>

}