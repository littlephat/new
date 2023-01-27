import React, { useState, useEffect } from 'react'
import {
    ShoppingCart
} from "@mui/icons-material";

const Cart = () => {
    const [isHiddenCard, setIsHiddenCard] = useState(true)

    const toggleCart = () => {
        setIsHiddenCard(!isHiddenCard)
    }
    return (

        <div className='w-full h-screen justify-end px-36'>
            <div className='w-[250px] h-[500px] bg-amber-200'>
                <div className='m-1 px-1 w-[240px] h-[490px] bg-white rounded-lg'>
                    <div className='flex justify-center items-center '>
                        <div className='m-3 w-screen h-6 rounded-lg bg-amber-200 shadow-sm'>
                            <p className='px-12 mx-3 text-white font-bold font-mono text-sm '>Order Lists</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;