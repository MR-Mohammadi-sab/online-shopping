import { PRODUCT } from "../../data/data";
import { Product } from "./product";

export function Shop(){
    return(<div>
        <h1 className="font-bolf text-5xl my-5 text-center mt-16">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-80  md:ml-11 text-center">
            {PRODUCT.map((productItem)=>{
                return <Product data={productItem} key={productItem.id} />
            })}
        </div>
    </div>)
}
