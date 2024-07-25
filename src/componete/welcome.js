import {faClose} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from 'react'
export function Welcome(){

    const [showWelcome,setShowWelcome]=useState()
    useEffect(()=>{
        const data =localStorage.getItem("hidden")
        setShowWelcome(JSON.parse(data)??true)
    },[])
    function hideen(){
        setShowWelcome(false)
        localStorage.setItem("hidden",JSON.stringify(false))
    }
    return (
        <React.Fragment>
            {showWelcome&&<div className=" mx-auto relative rounded-xl bg-blue-400 text-black text-center mt-24 w-1/2" id='welcome'>
            
            <FontAwesomeIcon icon={faClose} id="hidden" onClick={hideen}   className='absolute -right-1 -top-2 text-sm  w-7 h-7 rounded-full bg-blue-200 bg-opacity-70 text-white cursor-pointer active:translate-y-0.5' />
            <h2 className='py-3 text-3xl'>Welcome</h2>
        </div>}
        </React.Fragment>
    )
}