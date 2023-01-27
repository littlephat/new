import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {
    ShoppingCart,
    AccountCircle,
    MoreHoriz,
    FavoriteBorder,
    Close
} from "@mui/icons-material";
const Nav = () => {
    const [isHiddenCard, setIsHiddenCard] = useState(false)

    const toggleCart = () => {
        setIsHiddenCard(!isHiddenCard)

    }
    const [isHiddenFav, setIsHiddenFav] = useState(false)

    const toggleFav = () => {
        setIsHiddenFav(!isHiddenFav)

    }
    // const [isHiddenProfile, setIsHiddenProfile] = useState(true)

    // const toggleList = () => {
    //     setIsHiddenList(!isHiddenList)

    // }
    const [isHiddenList, setIsHiddenList] = useState(false)

    const toggleList = () => {
        setIsHiddenList(!isHiddenList)

    }
    return (
        <div>
            <nav className="flex w-full h-full justify-center">
            <div className="flex justify-between items-center w-full h-12 bg-amber-200">
                <div className=" flex font-sans cursor-pointer m-5">
                    <il className="px-2.5 py-1 underline underline-offset-8 text-zinc-800 font-bold text-sm">
                        <Link to="/">labellskin.lab</Link>
                    </il>
                    <il className="px-5 py-2 font-mono hover:bg-white rounded-3xl text-zinc-600 text-xs">
                        <Link to="/Collections">Collections</Link>
                    </il>
                    <il className="px-5 py-2 font-mono hover:bg-white rounded-3xl text-zinc-600 text-xs">
                        <Link to="/AllProducts">All Products</Link>
                    </il>
                    <il className="px-5 py-2 font-mono hover:bg-white rounded-3xl text-zinc-600 text-xs">
                        <Link to="/Payment">Payment Method</Link>
                    </il>
                    <il className="px-5 py-2 font-mono hover:bg-white rounded-3xl text-zinc-600 text-xs">
                        <Link to="/ContactUs">Contact Us</Link>
                    </il>
                </div>
                <div className="flex justify-between m-5">
                    <il onClick={() => toggleCart()} className="px-2 py-2 text-white hover:text-cyan-500">
                        <ShoppingCart />
                    </il>
                    <il onClick={() => toggleFav()} className="px-2 py-2 text-white hover:text-cyan-500">
                        <FavoriteBorder />
                    </il>
                    <il className="px-2 py-2 text-white hover:text-cyan-500">
                        <AccountCircle />
                    </il>
                    <il onClick={() => toggleList()} className="px-2 py-2 text-white hover:text-cyan-500">
                        <MoreHoriz />
                    </il>
                </div>
            </div>
           
        </nav>
         {/* ตะกร้า */}
         <div className={`absolute flex w-full h-full fixed top-0 ${isHiddenCard ? "top-0 right-0" : "top-[100%] right-[100%"}`} >
                <div onClick={() => toggleCart()} className='flex w-full h-full bg-transparent justify-end px-36 my-12 '>
                    <div className='flex w-[250px] h-[500px] bg-amber-200'>
                        <div className='m-1 px-1 w-[240px] h-[490px] bg-white rounded-lg'>
                            <div className='flex justify-between'>
                                <div className='mx-3 my-2 w-screen h-6 rounded-lg bg-amber-200 shadow-sm'>
                                    <p className='px-12 mx-5 text-white font-bold font-mono text-sm '>Order Lists</p>
                                </div>
                                <div className='flex m-2'>
                                    <Close onClick={() => toggleCart()} />
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Favlist */}
            <div className={`absolute flex w-full h-full ${isHiddenFav ? "top-0 right-0" : "top-[100%] right-[100%"}`} >
                <div onClick={() => toggleFav()} className='flex w-full h-screen bg-transparent justify-end px-28 my-12'>
                    <div className='flex w-[250px] h-[500px] bg-amber-200    '>
                        <div className='m-1 px-1 w-[240px] h-[490px] bg-white rounded-lg'>
                            <div className='flex justify-between'>
                                <div className='px-1 mx-2 my-2 w-screen h-6 rounded-lg bg-rose-200 shadow-sm'>
                                    <p className='px-2 mx-5 text-white font-bold font-mono text-sm '>Favorite Lists</p>
                                </div>
                                <div className='flex m-2'>
                                    <Close onClick={() => toggleFav()} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hiddenlist */}
            <div className={`absolute flex w-full h-full ${isHiddenList ? "top-0 right-0" : "top-[100%] right-[100%"}`} >
                <div onClick={() => toggleList()} className='flex w-full h-screen bg-transparent justify-end px-12 my-12'>
                    <div className='flex w-[250px] h-[210px] bg-amber-200'>
                        <div className='m-1 px-1 w-[240px] h-[200px] bg-white rounded-lg'>
                            <div className='flex-col w-screen h-screen'>
                            <div className='flex my-1 mx-52'>
                            <Close onClick={() => toggleList()} />
                            </div>
                                <il className='flex my-2 mx-1 bg-amber-200 rounded-lg w-56 h-7'>
                                    <p className='mx-1 px-20 py-1 text-white font-bold font-mono text-sm shadow-sm'>Setting</p>
                                    </il>
                               
                                <il className='flex my-2 mx-1 bg-amber-200 rounded-lg w-56 h-7'>
                                    <p className='mx-2 px-12 py-1 text-white font-bold font-mono text-sm shadow-sm'>Privacy Policy</p>
                                </il>
                                <il className='flex my-2 mx-1 bg-amber-200 rounded-lg w-56 h-7'>
                                    <p className='mx-1 px-16 py-1 text-white font-bold font-mono text-sm shadow-sm'>Help Center</p>
                                </il>
                                <il className='flex my-2 mx-1 bg-amber-200 rounded-lg w-56 h-7'>
                                    <p className='mx-1 px-20 py-1 text-white font-bold font-mono text-sm shadow-sm'>Log Out</p>
                                </il>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Nav;
