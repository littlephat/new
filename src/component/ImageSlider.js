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
            <div className="my-5 rounded-lg w-[40rem] h-96 overflow-hidden relative " >
                <img src={slides[currentCarousel]} alt="" />
            </div>
        </div>
    )
}
export default ImageSlider;