import { createContext } from "react";
import { useCart } from "../useCart/useCart";

export const shopContext=createContext({
    addToCart:()=>{},
    removeFromCart:()=>{},
    cartItems:null,
    reset:()=>{}
})
export function ShopContextProvider(props){

    return <shopContext.Provider value={useCart()}>{props.children}</shopContext.Provider>
}