import React, { useState, useEffect } from 'react'

const TopHitzSlider = ({ TopHits }) => {
    const [currentCarousel, setCurrentCarousel] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCarousel(prevCurrentCarousel => {
                const isLastSlide = prevCurrentCarousel === TopHits.length - 1
                const newIndex = isLastSlide ? 0 : prevCurrentCarousel + 1
                return newIndex
            })
        }, 2500);
        console.log(TopHits);
        return () => clearInterval(interval);
    },);

    return (
        <div className=" w-full h-full flex justify-center">
            <div style={{backgroundImage:`url(${TopHits[currentCarousel]})`}} className=" my-5 w-full h-[500px] overflow-hidden relative">
        </div>
            </div >
            )
}
export default TopHitzSlider;