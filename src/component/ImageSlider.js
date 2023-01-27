import React, { useState, useEffect } from 'react'

const ImageSlider = ({ slides }) => {
    const [currentCarousel, setCurrentCarousel] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCarousel(prevCurrentCarousel => {
                const isLastSlide = prevCurrentCarousel === slides.length - 1
                const newIndex = isLastSlide ? 0 : prevCurrentCarousel + 1
                return newIndex
            })
        }, 2500);
        return () => clearInterval(interval);
    },);

    return (
        <div className="w-full h-2/6 flex justify-center bg-cover bg-center ">
            <div style={{backgroundImage:`url(${slides[currentCarousel]})`}} className=" my-5 w-[700px] h-[400px] overflow-hidden relative rounded-lg ">
            </div>
        </div>
    )
}
export default ImageSlider;