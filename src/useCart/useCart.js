import { useEffect, useState } from "react";

export function useCart(){
    const[cartItems , setCartItems]=useState()

    useEffect(()=>{
        const data=localStorage.getItem("save_data")
        setCartItems(!!JSON.parse(data)?JSON.parse(data):[])
    },[])

    useEffect(()=>{
        if(cartItems !== undefined)
        localStorage.setItem("save_data",JSON.stringify(cartItems))
    },[cartItems])

    function addToCart(itemId){
        setCartItems((prev)=>{
            const isDone=prev.find((prvItems)=>prvItems.id===itemId)
            if(isDone){
            return prev.map((item)=>{
              return  item.id===itemId?{id:itemId,count:item.count+1}:item;
            })
            }else {
                return [...prev,{id:itemId,count:1}]
            }
        })
    }

    function removeFromCart(itemId){
        setCartItems((prevs)=>{
           return prevs.map((item)=>{
                if(item.id===itemId){
                   return {...item, count:item.count===0?0:item.count-1}
                }
                return item
            })
        })
    }

    function reset(itemId){
        setCartItems()
        localStorage.removeItem("save_data")
    }
    
    return {cartItems, addToCart,removeFromCart,reset}
}