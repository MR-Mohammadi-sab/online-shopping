import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { shopContext } from '../context/context'
function  Nav() {
    const{cartItems}=useContext(shopContext)
    const count=cartItems?.reduce((lastValue,currentVale)=>{
        return lastValue+currentVale.count
        
    },0)
    
    return(
        <div className='flex px-2 py-2  items-center bg-red-800 justify-between text-xl text-zinc-100 z-10 fixed top-0 w-full bg-opacity-20'>
            <div className='ml-0 md:ml-28 text-sm md:text-xl   hover:text-zinc-200 rounded-lg p-1'>Online shoping</div>
            <div className='flex items-center mx-7 md:mr-36 mr-4 text-sm md:text-xl'>
            <div ><Link className='mx-11 cursor-pointer active:translate-y-0.5 p-1  hover:text-zinc-200 rounded-lg' to='/'>shop</Link> </div>
            <div className='relative' ><Link className=' cursor-pointer active:translate-y-0.5   p-1 hover:text-zinc-200 rounded-lg' to='/card'><FontAwesomeIcon icon={faShoppingCart} /></Link>
            {count>0&&<span className='flex justify-center items-center absolute md:h-5 md:w-5 w-4 h-4 rounded-full bg-red-100 text-sm text-black md:-top-1  -right-1 sm:-top-3'>{count}</span>}</div>
            </div>
        </div>
    )
}

export default Nav;