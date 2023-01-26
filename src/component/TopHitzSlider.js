import React, { useState, useEffect } from 'react'

const TopHitzSlider = ({TopHits}) => {
    const [currentCarousel, setCurrentCarousel] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
                setCurrentCarousel(prevCurrentCarousel => {
                    const isLastSlide = prevCurrentCarousel === TopHits.length - 1
                    const newIndex = isLastSlide ? 0 : prevCurrentCarousel + 1
                    return newIndex
                })
            }, 2500);
        return () => clearInterval(interval);
    }, );

            return (
            <div className=" w-full h-full flex justify-center bg-contain bg-center">
                <div className=" my-5 w-[72rem] h-3/4 overflow-hidden relative " >
                    <img src={TopHits[currentCarousel]} alt="" />
                </div>
            </div>
            )
}
export default TopHitzSlider;