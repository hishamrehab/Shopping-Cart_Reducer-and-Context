import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList: [],
    total: 0
}


export const CartContext = createContext(initialState);
const [state, dispatch] = useReducer(cartReducer, initialState);



export const CartProvider = ({ children }) => {
    const value = {
        total: state.total,
        cartList: state.cartList
    };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}


// export const useCart = () => {
//     const context = useContext(CartContext);
//     return context;
// }