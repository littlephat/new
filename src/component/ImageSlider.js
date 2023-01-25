import { useState } from "react";

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentUser] = useState(0);

    const sliderStyle = {
        height: '100%',
        position: 'relative',
    };

    const slideStyle  = {
        width: '100px',
        height: '100px',
        backgroudRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `img(${slides[currentIndex].src})` ,
    };
    return (
        <div style={sliderStyle}>
            <div style={{slideStyle}}>
            </div>
        </div>
    )
}
export default ImageSlider;