import React, { useState, useEffect } from 'react'

const NewItems = ({ newitemz }) =>{
    const [currentCarousel, setCurrentCarousel] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
                setCurrentCarousel(prevCurrentCarousel => {
                    const isLastSlide = prevCurrentCarousel === newitemz.length - 1
                    const newIndex = isLastSlide ? 0 : prevCurrentCarousel + 1
                    return newIndex
                })
            }, 2500);
        return () => clearInterval(interval);
    }, );

            return (
            <div className=" w-full h-full flex justify-center ">
                <div style={{backgroundImage:`url(${newitemz[currentCarousel]})`}} className=" my-5 w-screen h-[500px] overflow-hidden relative">
        </div>
            </div>
            )
}
export default NewItems;