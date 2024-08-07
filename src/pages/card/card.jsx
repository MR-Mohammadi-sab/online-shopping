import { useContext } from "react";
import { PRODUCT } from "../../data/data";
import { shopContext } from "../../context/context";
import { Product } from "../shop/product";

export function Cart(){
    
  
    const {cartItems,reset}=useContext(shopContext)
    return <div>
        <h1 className="text-center font-bold text-5xl my-5 mt-16">Your Cart items</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4   md:ml-11 text-center ">
        
        {PRODUCT.map((p)=>{
           if(cartItems?.some((item)=>p.id===item.id&&item.count>0))
            return<div> <Product data={p}></Product></div>
        })}
    </div>
      
    <div className=" flex justify-center items-center w-full">
    <button className="py-2 px-3 bg-red-400 rounded-xl active:translate-y-0.5" onClick={reset}>Reset</button></div>
    <h1>these things you want to buy</h1>
    </div>
}