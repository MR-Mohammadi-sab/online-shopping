import { useContext } from "react";
import { shopContext } from "../../context/context";

export function Product(props){
  const {id,productName,price,productImage}=props.data;
  const{addToCart,removeFromCart,cartItems}=useContext(shopContext)
  const isDone=cartItems?.some((item)=>item.id===id)
  return(
    <div className="flex flex-col space-y-3 justify-center items-center mt-12">
      <img src={productImage} alt="img" className=" h-52 bg-cover w-52"/>
      <h2 className="font-bold text-3xl">{productName}</h2>
      <p className="font-normal text-xl ">Price ${price}</p>
      <div className="flex space-x-3 mt-4">
        <button className="font-bold text-4xl bg-red-400 rounded-lg border border-e-red-200 px-[2px] pb-[5px] hover:bg-red-500 duration-150 active:translate-y-0.5 " onClick={()=>addToCart(id)}>+</button>
        <span className="text-4xl ">{cartItems?.filter((row)=>row.id===id)[0]?.count}</span>
        {isDone&&<button className="font-bold text-4xl bg-red-400 rounded-lg border border-e-red-200 px-[7px] pb-[3px] hover:bg-red-500 duration-150 active:translate-y-0.5 " onClick={()=>removeFromCart(id)}>-</button>}
      </div>
    </div>
  )
}